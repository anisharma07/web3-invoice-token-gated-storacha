# Web3 Invoice Token-Gated Storage

A decentralized medical billing and invoice management system built with React and Web3 technologies, featuring token-gated storage capabilities through Storacha and smart contract integration across multiple blockchain networks.

## 🚀 Features

- **Multi-Chain Support**: Compatible with Filecoin, Optimism, Polygon, Linea Sepolia, and Base Sepolia networks
- **Web3 Wallet Integration**: Seamless MetaMask connectivity using ConnectKit and Wagmi
- **Smart Contract Integration**: Medical token (MEDT) and invoice contract interactions
- **Spreadsheet Interface**: Built-in SocialCalc spreadsheet for invoice creation and management  
- **Token-Gated Storage**: Secure file storage using Web3 Storage (w3up-client)
- **Responsive Design**: Mobile-friendly interface with device type detection
- **Local Storage Support**: Client-side data persistence capabilities
- **File Management System**: Upload, manage, and organize medical documents

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **CSS3** - Custom styling with Milligram CSS framework for minimal design
- **JavaScript ES6+** - Modern JavaScript features
- **SocialCalc** - Integrated spreadsheet functionality

### Web3 & Blockchain
- **Wagmi 2.10.9** - React hooks for Ethereum development
- **Ethers.js 5.6.0** - Ethereum wallet implementation and utilities
- **Viem 2.x** - TypeScript interface for Ethereum
- **ConnectKit 1.8.2** - Web3 wallet connection interface
- **Web3 Storage** - Decentralized storage using w3up-client

### Development Tools
- **Create React App** - Development environment and build tooling
- **React Scripts 5.0.1** - Build scripts and development server
- **Jest & React Testing Library** - Unit testing framework
- **Babel** - JavaScript transpilation
- **Yarn/NPM** - Package management

### Supported Networks
- Filecoin Mainnet & Calibration Testnet
- Optimism & Optimism Sepolia
- Polygon & Polygon Amoy
- Linea Sepolia
- Base Sepolia

## 📁 Project Structure

```
src/
├── App/                 # Main application component
├── Files/              # File management components
├── Menu/               # Navigation and menu components
├── socialcalc/         # Spreadsheet functionality
│   └── aspiring/       # SocialCalc core modules
├── storage/            # Local storage utilities
├── utils/              # Web3 providers and utilities
│   ├── Web3Provider.js # Wagmi and ConnectKit configuration
│   ├── constants.js    # Contract addresses and network configs
│   └── *.json          # Smart contract ABIs
└── img/                # Application assets
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Yarn or NPM package manager
- MetaMask wallet extension
- WalletConnect Project ID

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/anisharma07/web3-invoice-token-gated-storacha.git
cd web3-invoice-token-gated-storacha
```

2. **Install dependencies**
```bash
yarn install
# or
npm install
```

3. **Set up environment variables**
```bash
# Create .env file in the root directory
touch .env
```

Add the following to your `.env` file:
```env
REACT_APP_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id_here
```

4. **Obtain WalletConnect Project ID**
   - Visit [WalletConnect Cloud Dashboard](https://cloud.walletconnect.com/)
   - Create a new project
   - Copy your Project ID to the `.env` file

## 🎯 Usage

### Development
```bash
# Start development server
yarn start
# or
npm start
```

The application will open at `http://localhost:3000` with hot reloading enabled.

### Production
```bash
# Build for production
yarn build
# or  
npm run build

# Serve production build locally
npx serve -s build
```

### Testing
```bash
# Run test suite
yarn test
# or
npm test

# Run tests in CI mode
yarn test -- --env=jsdom --coverage
```

## 📱 Platform Support

- **Desktop Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Device Detection**: Automatic detection for iPhone, iPad, iPod
- **Responsive Design**: Optimized for all screen sizes

## 🌐 Smart Contract Integration

The application integrates with deployed smart contracts across multiple networks:

### Medical Token (MEDT) Addresses
- **Filecoin Mainnet**: `0xC00BBC9A2C88712dC1e094866973F036373C7134`
- **Filecoin Calibration**: `0xb453DA7D84EFE6E235Da083cef89815820dACd85`
- **Optimism**: `0xc76F004CB35ec0971075060D4DBd6279d2252Acf`

### Medical Invoice Contract Addresses  
- **Filecoin Mainnet**: `0x08bacb51f405a2D793E4F4BE53Ca2B3C8b8cF0CA`
- **Filecoin Calibration**: `0xCDE128D0d80d5F108AFCa42CCa81532C0cD215b2`
- **Optimism**: `0x49009CD05805ce571DcE7b577677F73B5828aB53`

## 🧪 Testing

The project includes comprehensive test suites:

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test -- --coverage --watchAll=false

# Run specific test files
yarn test App.test.js Files.test.js Menu.test.js
```

## 🔄 Deployment

### Build Configuration
- **Production builds** are optimized and minified
- **Browser support** targets modern browsers (>0.2% usage)
- **Static files** are served from the `public/` directory

### Deployment Commands
```bash
# Create production build
yarn build

# Deploy to your preferred hosting platform
# (Vercel, Netlify, IPFS, etc.)
```

## 📊 Performance & Optimization

- **React 18 Features**: Concurrent rendering and automatic batching
- **Code Splitting**: Dynamic imports for optimal bundle sizes  
- **Asset Optimization**: Compressed images and minified CSS
- **Caching Strategy**: Service worker ready for PWA conversion
- **Web3 Optimization**: Efficient contract call batching

## 🔐 Security Considerations

- **Private Key Management**: Never stores private keys locally
- **Contract Verification**: All contract addresses are verified on-chain
- **Input Validation**: Comprehensive validation for all user inputs
- **HTTPS Required**: Secure connections enforced in production

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and structure
- Add tests for new functionality
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Test across multiple blockchain networks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Manu Sheel Gupta

## 🙏 Acknowledgments

- **SocialCalc** - Spreadsheet functionality
- **Wagmi Team** - Web3 React hooks
- **ConnectKit** - Wallet connection interface
- **Filecoin Network** - Decentralized storage infrastructure
- **OpenZeppelin** - Smart contract security standards

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/anisharma07/web3-invoice-token-gated-storacha/issues)
- **Discussions**: [GitHub Discussions](https://github.com/anisharma07/web3-invoice-token-gated-storacha/discussions)
- **Repository**: [GitHub](https://github.com/anisharma07/web3-invoice-token-gated-storacha)

---

**Built with ❤️ for the decentralized healthcare ecosystem**