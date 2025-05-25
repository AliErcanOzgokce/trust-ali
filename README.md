# Trust Ali Wallet Manager

A simple, secure EVM wallet manager built with React, TypeScript, and Vite that allows you to create, manage, and interact with EVM wallets.


## Features

- **Create Secure Wallets**: Generate Ethereum wallets with password protection
- **Password Validation**: Ensures wallet passwords meet minimum security requirements
- **View Wallet Details**: See addresses and balances of your wallets
- **Multi-network Support**: Switch between different networks (Binance Testnet and Arbitrum Testnet)
- **Reveal Private Keys**: Access your private keys securely with your password
- **Persistent Storage**: Wallets are saved locally in your browser
- **Modern UI**: Clean and responsive interface built with Tailwind CSS

## Tech Stack

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Fast build tool and dev server
- [Zustand](https://zustand-demo.pmnd.rs/) - State management with persistence
- [ethers.js](https://docs.ethers.org/v6/) - Ethereum interaction library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vitest](https://vitest.dev/) - Testing framework

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/AliErcanOzgokce/trust-ali.git
cd trust-ali

# Install dependencies
npm install
```

## Usage

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Testing

The application includes a comprehensive test suite covering components, utilities, and state management:

```bash
# Run tests in watch mode
npm run test

```
## Project Structure

```
src/
├── components/         # UI components 
│   ├── WalletDetail.tsx
│   └── WalletsList.tsx
├── constants/          # App constants
│   └── constants.ts
├── interfaces/         # TypeScript interfaces
│   ├── networks.ts
│   └── wallet.ts
├── store/              # State management
│   └── walletStore.ts
├── test/               # Test files
├── utils/              # Utility functions
│   ├── createWallet.ts
│   ├── getDecryptedWallet.ts
│   ├── getProvider.ts
│   ├── validatePassword.ts
│   └── walletHandlers.ts
└── App.tsx             # Main application component
```

## Security Features

- Password validation ensures minimum security standards
  - **Note**: For simplicity and demo purposes, only minimum length (8 characters) and digit requirements are enabled. Additional validations for uppercase letters, lowercase letters, and special characters are implemented but commented out in the code.
- Wallet encryption with user-provided passwords
- Private keys are not stored in plain text
- No sensitive data is sent to remote servers

## Network Support

The wallet manager supports multiple Ethereum-compatible networks:

- **Binance Testnet**: Test network for Binance Smart Chain
- **Arbitrum Testnet**: Layer 2 scaling solution for Ethereum


## Author

[Ali Ercan Özgökçe](https://github.com/AliErcanOzgokce)
