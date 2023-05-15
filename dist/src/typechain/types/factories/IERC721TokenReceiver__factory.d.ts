import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC721TokenReceiver, IERC721TokenReceiverInterface } from "../IERC721TokenReceiver";
export declare class IERC721TokenReceiver__factory {
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
    static createInterface(): IERC721TokenReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721TokenReceiver;
}
