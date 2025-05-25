export type NetworkType = "BINANCE" | "ARBITRUM";

export interface Network {
    name: string;
    rpcUrl: string;
    symbol: string;
    explorer: string;
}