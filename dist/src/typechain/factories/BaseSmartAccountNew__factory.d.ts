import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BaseSmartAccountNew, BaseSmartAccountNewInterface } from "../BaseSmartAccountNew";
export declare class BaseSmartAccountNew__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): BaseSmartAccountNewInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseSmartAccountNew;
}
