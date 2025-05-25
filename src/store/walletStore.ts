import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WalletState } from '../interfaces/wallet';

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      wallets: [],
      selectedWallet: null,
      
      addWallet: (wallet) => 
        set((state) => ({
          wallets: [...state.wallets, wallet]
        })),
      
      selectWallet: (wallet) => 
        set({ selectedWallet: wallet }),
      
      getWallets: () => get().wallets
    }),
    {
      name: 'wallet-storage',
    }
  )
);