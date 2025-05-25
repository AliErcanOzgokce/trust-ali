import { Wallet } from "ethers";

export const getDecryptedWallet = (json: string, password: string) => {
    const wallet = Wallet.fromEncryptedJson(json, password);
    return wallet;
};