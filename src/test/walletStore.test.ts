import { describe, it, expect, beforeEach } from 'vitest';
import { useWalletStore } from '../store/walletStore';
import { mockWallets } from './setup';

// Reset store between tests
const resetStore = () => {
  const store = useWalletStore.getState();
  store.wallets = [];
  store.selectedWallet = null;
};

describe('WalletStore', () => {
  beforeEach(() => {
    resetStore();
  });

  it('adds a wallet correctly', () => {
    const { addWallet } = useWalletStore.getState();
    
    addWallet(mockWallets.wallet1);
    
    const updatedWallets = useWalletStore.getState().wallets;
    expect(updatedWallets).toHaveLength(1);
    expect(updatedWallets[0]).toEqual(mockWallets.wallet1);
  });

  it('selects a wallet correctly', () => {
    const { addWallet, selectWallet } = useWalletStore.getState();
    
    addWallet(mockWallets.wallet1);
    
    selectWallet(mockWallets.wallet1);
    
    expect(useWalletStore.getState().selectedWallet).toEqual(mockWallets.wallet1);
  });

  it('returns all wallets with getWallets function', () => {
    const { addWallet, getWallets } = useWalletStore.getState();
    
    addWallet(mockWallets.wallet1);
    addWallet(mockWallets.wallet2);
    
    const wallets = getWallets();
    
    expect(wallets).toHaveLength(2);
    expect(wallets).toContainEqual(mockWallets.wallet1);
    expect(wallets).toContainEqual(mockWallets.wallet2);
  });
});
