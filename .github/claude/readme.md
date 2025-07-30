# Web3 Invoice Token-Gated Storage

A comprehensive Web3-enabled medical billing system that combines spreadsheet functionality with blockchain technology and decentralized storage. This application allows healthcare providers to create, manage, and store medical invoices using smart contracts on multiple blockchain networks while leveraging token-gated access controls.

## 🚀 Features

- **🏥 Medical Invoice Management**: Create and manage medical invoices using an integrated spreadsheet interface
- **🔗 Multi-Chain Support**: Compatible with Filecoin, Optimism, Polygon, Linea, Base, and Celo networks
- **🔐 Token-Gated Access**: Secure access control using custom medical tokens (MEDT)
- **🌐 Web3 Integration**: Seamless blockchain connectivity with MetaMask and other Web3 wallets
- **☁️ Decentralized Storage**: Integration with Web3.Storage (w3up-client) for distributed file storage
- **📊 Interactive Spreadsheet**: Full-featured spreadsheet functionality powered by SocialCalc
- **📱 Responsive Design**: Mobile-friendly interface with device-specific optimizations
- **🔄 Real-time Updates**: Live data synchronization and state management

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with concurrent features
- **JavaScript ES6+** - Core application logic
- **CSS3** - Custom styling with Milligram framework
- **SocialCalc** - Advanced spreadsheet functionality
- **ConnectKit** - Enhanced Web3 wallet connection UI

### Blockchain & Web3
- **Wagmi 2.10.9** - React hooks for Ethereum development
- **Viem 2.x** - TypeScript interface for Ethereum
- **Ethers.js 5.6.0** - Ethereum wallet implementation and utilities
- **Web3.Storage** - Decentralized storage client
- **Smart Contracts** - Custom medical token and invoice contracts

### Development Tools
- **React Scripts 5.0.1** - Build toolchain and development server
- **Jest** - Testing framework with React Testing Library
- **Babel** - JavaScript transpilation
- **ESLint** - Code quality and consistency

### Supported Networks
- Filecoin Mainnet & Calibration Testnet
- Optimism Mainnet & Sepolia Testnet
- Polygon & Polygon Amoy
- Linea Sepolia
- Base Sepolia
- Celo Alfajores

## 📁 Project Structure

```
├── public/                 # Static assets and HTML template
│   ├── images/            # Spreadsheet UI icons and graphics
│   └── styles/            # CSS frameworks (Milligram, Normalize)
├── src/
│   ├── App/               # Main application component
│   ├── Files/             # File management components
│   ├── Menu/              # Navigation and menu components
│   ├── socialcalc/        # Spreadsheet engine integration
│   ├── storage/           # Local storage utilities
│   └── utils/             # Web3 providers and constants
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v14.0 or higher)
- **Yarn** or **npm** package manager
- **MetaMask** or compatible Web3 wallet
- **Git** for version control

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/anisharma07/web3-invoice-token-gated-storacha.git
cd web3-invoice-token-gated-storacha
```

2. **Install dependencies**
```bash
# Using npm
npm install

# Using yarn
yarn install
```

3. **Set up environment variables**
```bash
# Create environment file
touch .env
```

Add the following variables to your `.env` file:
```env
REACT_APP_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

4. **Get WalletConnect Project ID**
   - Visit [WalletConnect Dashboard](https://walletconnect.com/)
   - Create a new project
   - Copy your Project ID to the `.env` file

## 🎯 Usage

### Development
```bash
# Start development server
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

### Production
```bash
# Build for production
npm run build
# or
yarn build

# The build folder will contain optimized production files
```

### Testing
```bash
# Run test suite
npm test
# or
yarn test
```

## 📱 Platform Support

- **Desktop Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Devices**: iOS Safari, Android Chrome
- **Tablet Support**: iPad and Android tablets
- **Web3 Wallets**: MetaMask, WalletConnect-compatible wallets

## 🔗 Smart Contract Integration

The application integrates with custom smart contracts deployed across multiple networks:

### Medical Token (MEDT)
- Provides token-gated access to invoice features
- Deployed on Filecoin, Optimism, and other supported networks

### Medical Invoice Contract
- Manages invoice creation and storage
- Handles billing logic and payment processing

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🔄 Deployment

### Environment Setup
1. Ensure all environment variables are configured
2. Build the project for production
3. Deploy to your preferred hosting service

### Recommended Hosting
- **Vercel** - Optimized for React applications
- **Netlify** - Easy deployment with Git integration
- **IPFS** - Decentralized hosting option

## 📊 Performance & Optimization

- **Code Splitting**: Implemented through React.lazy for optimal loading
- **Asset Optimization**: Images and icons optimized for web delivery
- **Caching**: Service worker implementation for offline functionality
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```
3. **Commit your changes**
```bash
git commit -m 'Add some amazing feature'
```
4. **Push to the branch**
```bash
git push origin feature/amazing-feature
```
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices and hooks conventions
- Maintain consistent code style with existing codebase
- Write tests for new features
- Update documentation for API changes
- Ensure Web3 functionality works across supported networks

## 🔒 Security Considerations

- Always verify smart contract addresses before transactions
- Use secure RPC endpoints for blockchain connections
- Implement proper error handling for Web3 operations
- Keep private keys secure and never commit them to version control

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2025 Manu Sheel Gupta
```

## 🙏 Acknowledgments

- **SocialCalc** - For providing the spreadsheet engine
- **Wagmi Team** - For excellent Web3 React hooks
- **ConnectKit** - For beautiful wallet connection UI
- **Web3.Storage** - For decentralized storage infrastructure
- **OpenZeppelin** - For smart contract security standards

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/anisharma07/web3-invoice-token-gated-storacha/issues)
- **Discussions**: [GitHub Discussions](https://github.com/anisharma07/web3-invoice-token-gated-storacha/discussions)
- **Developer**: [@anisharma07](https://github.com/anisharma07)

---

**Built with ❤️ for the decentralized healthcare ecosystem**