import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BaseGuard, BaseGuardInterface } from "../BaseGuard";
export declare class BaseGuard__factory {
    static readonly abi: ({
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
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
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
    })[];
    static createInterface(): BaseGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseGuard;
}
