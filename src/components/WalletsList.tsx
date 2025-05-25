import WalletDetail from "./WalletDetail";
import { useWalletStore } from "../store/walletStore";
import type { WalletObject } from "../interfaces/wallet";

function WalletsList() {
  const {
    getWallets: wallets,
    selectWallet,
    selectedWallet,
  } = useWalletStore();

  if (!wallets().length) {
    return <div className="text-white mt-4 text-center">No wallets found</div>;
  }

  if (selectedWallet) {
    return (
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Wallet Details</h2>
          <button
            onClick={() => selectWallet(null)}
            className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Back to List
          </button>
        </div>
        <WalletDetail wallet={selectedWallet} />
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-white">Your Wallets</h2>
      <div className="flex flex-col gap-3">
        {wallets().map((wallet: WalletObject, index) => (
          <div
            key={wallet.address}
            className="bg-gray-800 p-4 rounded-lg text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Wallet {index}</h3>
            </div>
            <div className="bg-gray-700 p-2 rounded mb-2 overflow-hidden">
              <p className="text-sm font-mono truncate">{wallet.address}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => selectWallet(wallet)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WalletsList;
