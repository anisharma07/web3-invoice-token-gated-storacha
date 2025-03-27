import React, { Component } from "react";
import "./Menu.css";
import * as AppGeneral from "../socialcalc/AppGeneral";
import { Files, Local } from "../storage/LocalStorage.js";
import { DATA } from "../app-data.js";
import { create } from "@web3-storage/w3up-client";
import { ethers } from "ethers";
import { 
  MEDT_TOKEN_ADDRESSES, 
  MEDI_INVOICE_ADDRESSES, 
  SUPPORTED_NETWORKS, 
  TOKEN_COST 
} from "../utils/constants.js";
import meditokenabi from "../utils/meditokenabi.json";
import medinvoiceabi from "../utils/medinvoiceabi.json";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.store = new Local(this.props.file);
    this.state = {
      numOfTokens: 0,
      isUploading: false
    };
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
  }

  componentDidMount() {
    this.fetchUserTokens();
    
    // Add network change listener
    if (window.ethereum) {
      window.ethereum.on('chainChanged', this.handleNetworkChange);
    }
  }

  componentWillUnmount() {
    // Remove network change listener to prevent memory leaks
    if (window.ethereum) {
      window.ethereum.removeListener('chainChanged', this.handleNetworkChange);
    }
  }

  // New method to handle network changes
  handleNetworkChange(chainId) {
    console.log('Network changed to:', chainId);
    this.fetchUserTokens();
  }
  async getNetworkKey(provider){
    const network = await provider.getNetwork();
    const chainIdHex = "0x" + network.chainId.toString(16);
    
    for (const [network, data] of Object.entries(SUPPORTED_NETWORKS)) {
      if (data.chainId === chainIdHex) {
        return network;
      }
    }
    throw new Error('Unsupported network');
  }

  async getContractAddresses(provider){
    const networkKey = await this.getNetworkKey(provider);
    return {
      mediToken: MEDT_TOKEN_ADDRESSES[networkKey],
      mediInvoice: MEDI_INVOICE_ADDRESSES[networkKey]
    };
  }

  async fetchUserTokens(){
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const { mediInvoice } = await this.getContractAddresses(provider);
      
      const contract = new ethers.Contract(
        mediInvoice,
        medinvoiceabi,
        signer
      );
      
      const userTokens = await contract.getUserTokens();
      console.log("User tokens: ", Number(userTokens));
      this.setState({ numOfTokens: Number(userTokens) / 10 ** 18 });
    } catch (error) {
      console.error("Error fetching user tokens:", error);
    }
  }

  async updateTokenBalance(operation){
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const { mediToken, mediInvoice } = await this.getContractAddresses(provider);
      
      const contract = new ethers.Contract(
        mediToken,
        meditokenabi,
        signer
      );

      // Transfer tokens to the MediInvoice contract address for the current network
      const tx = await contract.transfer(
        mediInvoice,
        ethers.utils.parseEther(TOKEN_COST[operation])
      );
      
      await tx.wait();
      await this.fetchUserTokens();
    } catch (error) {
      console.error("Error transferring tokens:", error);
      throw error;
    }
  }

  async uploadToIPFS(fileData) {
    try {
      this.setState({ isUploading: true });
      
      // Get the saved email and space from localStorage
      const savedEmail = localStorage.getItem('ipfsUserEmail');
      const savedSpace = localStorage.getItem('ipfsUserSpace');
      
      if (!savedEmail || !savedSpace) {
        throw new Error('IPFS account not set up. Please set up your IPFS account in the Files section first.');
      }
      
      const client = await create();
      const account = await client.login(savedEmail);
      await client.setCurrentSpace(savedSpace);
      
      const formattedFile = new File(
        [JSON.stringify(fileData)],
        `${fileData.name}.json`,
        { type: 'application/json' }
      );
      
      const cid = await client.uploadDirectory([formattedFile]);
      return cid.toString();
    } catch (error) {
      console.error('IPFS Upload Error:', error);
      throw error;
    } finally {
      this.setState({ isUploading: false });
    }
  }

  doPrint = async () => {
    if (this.state.numOfTokens < TOKEN_COST.PRINT) {
      window.alert(`You need at least ${TOKEN_COST.PRINT} MediToken to print`);
      return;
    }

    try {
      await this.updateTokenBalance('PRINT');
      const content = AppGeneral.getCurrentHTMLContent();
      var printWindow = window.open("", "", "left=100,top=100");
      printWindow.document.write(content);
      printWindow.print();
      printWindow.close();
    } catch (error) {
      window.alert("Failed to process token payment");
    }
  }

  doSave = async () => {
    if (this.props.file === "default") {
      window.alert(`Cannot update ${this.props.file} file!`);
      return;
    }

    if (this.state.numOfTokens < TOKEN_COST.SAVE) {
      window.alert(`You need at least ${TOKEN_COST.SAVE} MediToken to save`);
      return;
    }

    try {
      await this.updateTokenBalance('SAVE');
      const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
      const data = this.store._getFile(this.props.file);
      const file = new Files(
        data.created,
        new Date().toString(),
        content,
        this.props.file
      );
      this.store._saveFile(file);
      this.props.updateSelectedFile(this.props.file);
      window.alert(`File ${this.props.file} updated successfully!`);
    } catch (error) {
      window.alert("Failed to process token payment");
    }
  }

  doSaveAs = async () => {
    const filename = window.prompt("Enter filename:");
    
    if (!filename) return;

    if (this.state.numOfTokens < TOKEN_COST.SAVE_AS) {
      window.alert(`You need at least ${TOKEN_COST.SAVE_AS} MediToken to save`);
      return;
    }

    if (this._validateName(filename)) {
      try {
        const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
        const fileData = {
          name: filename,
          content: content,
          created: new Date().toString(),
          modified: new Date().toString(),
        };

        // Upload to IPFS
        const cid = await this.uploadToIPFS(fileData);
        await this.updateTokenBalance('SAVE_AS');

        // Save locally
        const file = new Files(
          fileData.created,
          fileData.modified,
          content,
          filename
        );
        this.store._saveFile(file);
        this.props.updateSelectedFile(filename);
        
        window.alert(`File "${filename}" saved successfully! IPFS CID: ${cid}`);
      } catch (error) {
        console.error("Save As error:", error);
        window.alert(`Error saving file: ${error.message}`);
      }
    } else {
      window.alert(`Invalid filename: ${filename}`);
    }
  }
  

  render() {
    return (
      <div className="Menu">
        <button onClick={this.doSave}> Save </button>
        <button onClick={this.doSaveAs}> Save As </button>
        <button onClick={this.doPrint}> Print </button>
        <button onClick={() => this.newFile()}> New File </button>
        <div>Tokens you Own: {this.state.numOfTokens.toFixed(2)}</div>
      </div>
    );
  }

  newFile() {
    if (this.props.file !== "default") {
      const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
      const data = this.store._getFile(this.props.file);
      const file = new Files(
        data.created,
        new Date().toString(),
        content,
        this.props.file
      );
      this.store._saveFile(file);
      this.props.updateSelectedFile(this.props.file);
    }
    const msc = DATA["home"][AppGeneral.getDeviceType()]["msc"];
    AppGeneral.viewFile("default", JSON.stringify(msc));
    this.props.updateSelectedFile("default");
  }

  /* Utility functions */
  _validateName(filename) {
    filename = filename.trim();
    if (filename === "default" || filename === "Untitled") {
      return false;
    } else if (filename === "" || !filename) {
      return false;
    } else if (filename.length > 30) {
      return false;
    } else if (/^[a-zA-Z0-9- ]*$/.test(filename) === false) {
      return false;
    }
    return true;
  }
}

export default Menu;