import { useState } from "react";
import WalletsList from "./components/WalletsList";
import { useWalletStore } from "./store/walletStore";
import { handleCreateWallet } from "./utils/walletHandlers";

export default function Home() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { addWallet } = useWalletStore();

  const onCreateWallet = async () => {
    await handleCreateWallet(password, setPasswordError, setPassword, addWallet);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-black">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Simple Wallet Manager
      </h1>

      <div className="w-full max-w-md">
        <div className="mb-6">
          <label className="block mb-2 text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError("");
            }}
            className={`w-full p-2 border rounded text-white ${
              passwordError ? "border-red-500" : "border-gray-700"
            }`}
            placeholder="Enter wallet password"
          />
          {passwordError && (
            <p className="mt-2 text-red-400 text-sm">{passwordError}</p>
          )}
        </div>

        <button
          onClick={onCreateWallet}
          className="w-full p-2 bg-blue-600 text-white rounded mb-4"
        >
          Create New Wallet
        </button>

        <WalletsList />
      </div>
    </div>
  );
}
