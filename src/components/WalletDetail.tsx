import { useState, useEffect } from 'react';
import type { WalletDetailProps } from '../interfaces/wallet';
import { ethers } from 'ethers';
import { NETWORKS } from '../constants/constants';
import { getDecryptedWallet } from '../utils/getDecryptedWallet';
import type { NetworkType } from '../interfaces/networks';
import { getProvider } from '../utils/getProvider';

export default function WalletDetail({ wallet }: WalletDetailProps) {
  const [password, setPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [balance, setBalance] = useState("0");
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType>("BINANCE");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      setIsLoading(true);
      setError("");
      
      try {
        const provider = getProvider(selectedNetwork);
        const balanceWei = await provider.getBalance(wallet.address);
        setBalance(ethers.formatEther(balanceWei));
      } catch (err) {
        console.error("Error fetching balance:", err);
        setError("Failed to fetch balance. Network might be unavailable.");
        setBalance("0");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBalance();
  }, [wallet.address, selectedNetwork]);

  // Reveal private key
  const handleRevealPrivateKey = async () => {
    if (!password) {
      setError("Please enter your password");
      return;
    }

    setIsLoading(true);
    setError("");
    
    try {
      const decryptedWallet = await getDecryptedWallet(wallet.json, password);
      setPrivateKey(decryptedWallet.privateKey);
      setShowPrivateKey(true);
    } catch (err) {
      console.error("Error decrypting wallet:", err);
      setError("Incorrect password");
    } finally {
      setIsLoading(false);
    }
  };

  const networkOptions: NetworkType[] = ["BINANCE", "ARBITRUM"];
  
  const handleNetworkChange = (network: NetworkType) => {
    setShowPrivateKey(false);
    setPassword("");
    setPrivateKey("");
    setError("");
    setBalance("0");
    setSelectedNetwork(network);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg text-white">
      <h2 className="text-xl font-bold mb-6">Wallet Details</h2>
      
      {/* Address */}
      <div className="mb-6">
        <h3 className="text-gray-400 mb-2">Address</h3>
        <div className="bg-gray-700 p-3 rounded flex items-center justify-between">
          <p className="font-mono text-sm truncate">{wallet.address}</p>
          <a 
            href={`${NETWORKS[selectedNetwork].explorer}address/${wallet.address}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 text-xs"
          >
            View on Explorer
          </a>
        </div>
      </div>
      
      {/* Network Selection */}
      <div className="mb-6">
        <h3 className="text-gray-400 mb-2">Network</h3>
        <div className="flex gap-2">
          {networkOptions.map((network) => (
            <button 
              key={network}
              onClick={() => handleNetworkChange(network)}
              className={`px-4 py-2 rounded ${selectedNetwork === network 
                ? "bg-blue-600" 
                : "bg-gray-700 hover:bg-gray-600"}`}
              >
                {NETWORKS[network].name}
              </button>
            ))}
        </div>
      </div>
      
      {/* Balance */}
      <div className="mb-6">
        <h3 className="text-gray-400 mb-2">Balance</h3>
        <div className="bg-gray-700 p-3 rounded">
          {isLoading ? (
            <p>Loading balance...</p>
          ) : (
            <p>
              {balance} {NETWORKS[selectedNetwork].symbol}
              {error && <span className="text-red-400 text-sm ml-2">{error}</span>}
            </p>
          )}
        </div>
      </div>
      
      {/* Private Key */}
      <div className="mb-4">
        <h3 className="text-gray-400 mb-2">Reveal Private Key</h3>
        <div className="bg-gray-700 p-4 rounded">
          <div className="mb-3">
            <input
              type="password"
              className="w-full p-2 bg-gray-600 rounded text-white"
              placeholder="Enter your wallet password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            onClick={handleRevealPrivateKey}
            disabled={isLoading}
            className="px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700 disabled:opacity-50"
          >
            {isLoading ? "Decrypting..." : "Reveal Private Key"}
          </button>
          
          {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
          
          {showPrivateKey && (
            <div className="mt-4">
              <h4 className="text-red-400 text-sm mb-2">WARNING: Never share your private key with anyone!</h4>
              <div className="bg-gray-900 p-3 rounded font-mono text-xs break-all">
                {privateKey}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 