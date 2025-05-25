import { createWallet } from "./createWallet";
import validatePassword from "./validatePassword";
import type { WalletObject } from "../interfaces/wallet";


export const handleCreateWallet = async (
  password: string,
  setPasswordError: (error: string) => void,
  setPassword: (password: string) => void,
  addWallet: (wallet: WalletObject) => void
) => {
  if (!password) {
    setPasswordError("Please put a password!");
    return;
  }

  try {
    const validationResult = validatePassword(password);
    if (validationResult !== true) {
      setPasswordError(validationResult as string);
      return;
    }
    const walletObj = await createWallet(password);

    addWallet(walletObj);
    setPassword("");
    setPasswordError("");
  } catch (error) {
    console.error("Error creating wallet:", error);
    alert("Error creating wallet. Please try again.");
  }
};
