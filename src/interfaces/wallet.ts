export interface WalletObject {
    address: string;
    json: string;
}

export interface WalletDetailProps {
    wallet: WalletObject;
}

export interface WalletState {
  wallets: WalletObject[];
  selectedWallet: WalletObject | null;
  addWallet: (wallet: WalletObject) => void;
  selectWallet: (wallet: WalletObject | null) => void;
  getWallets: () => WalletObject[];
}