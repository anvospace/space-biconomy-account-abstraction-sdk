import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Executor, ExecutorInterface } from "../Executor";
export declare class Executor__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
