import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC777TokensRecipient, IERC777TokensRecipientInterface } from "../IERC777TokensRecipient";
export declare class IERC777TokensRecipient__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IERC777TokensRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC777TokensRecipient;
}
