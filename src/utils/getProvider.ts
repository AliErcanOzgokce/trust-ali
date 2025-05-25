import type { NetworkType } from "../interfaces/networks";
import { JsonRpcProvider } from "ethers";
import { NETWORKS } from "../constants/constants";

export const getProvider = (network: NetworkType) => {
    return new JsonRpcProvider(NETWORKS[network].rpcUrl);
};