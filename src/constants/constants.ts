import type { Network, NetworkType } from "../interfaces/networks";

export const NETWORKS: Record<NetworkType, Network> = {
  BINANCE: {
    name: "Binance Testnet",
    rpcUrl: "https://bsc-testnet.drpc.org",
    symbol: "BNB",
    explorer: "https://testnet.bscscan.com/"
  },
  ARBITRUM: {
    name: "Arbitrum Testnet",
    rpcUrl: "https://api.zan.top/arb-sepolia",
    symbol: "ETH",
    explorer: "https://sepolia.arbiscan.io/"
  }
};