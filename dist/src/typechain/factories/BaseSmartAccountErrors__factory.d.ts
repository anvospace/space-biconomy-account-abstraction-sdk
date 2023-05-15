import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BaseSmartAccountErrors, BaseSmartAccountErrorsInterface } from "../BaseSmartAccountErrors";
export declare class BaseSmartAccountErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BaseSmartAccountErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BaseSmartAccountErrors;
    connect(signer: Signer): BaseSmartAccountErrors__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220e60eb39e1c1801439bdc21ecb92a0692944dcb0741e8d98c7f4377bdaf69c64764736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): BaseSmartAccountErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseSmartAccountErrors;
}
