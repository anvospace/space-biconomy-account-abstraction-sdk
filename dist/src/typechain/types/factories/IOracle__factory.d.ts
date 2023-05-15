import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOracle, IOracleInterface } from "../IOracle";
export declare class IOracle__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOracle;
}
