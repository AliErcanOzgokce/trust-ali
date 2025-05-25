import { Wallet } from "ethers";
import type { WalletObject } from "../interfaces/wallet";

export const createWallet = async (password: string): Promise<WalletObject> => {

  const wallet = Wallet.createRandom();
  
  const address = wallet.address;

  const json = await wallet.encrypt(password);
  
  return {
    address,
    json
  };
};
