import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FallbackManagerErrors, FallbackManagerErrorsInterface } from "../FallbackManagerErrors";
export declare class FallbackManagerErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FallbackManagerErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FallbackManagerErrors;
    connect(signer: Signer): FallbackManagerErrors__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220139406ecc724a0fa03227ec5f33be8e4fa543abf3f1189be2f773356659992d564736f6c63430008110033";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): FallbackManagerErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FallbackManagerErrors;
}
