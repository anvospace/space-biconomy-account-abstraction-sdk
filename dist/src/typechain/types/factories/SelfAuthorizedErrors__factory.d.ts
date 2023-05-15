import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SelfAuthorizedErrors, SelfAuthorizedErrorsInterface } from "../SelfAuthorizedErrors";
export declare class SelfAuthorizedErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SelfAuthorizedErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SelfAuthorizedErrors;
    connect(signer: Signer): SelfAuthorizedErrors__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220626f8f86b8e151d3db3e47806bfa73746b1ebd50081f60a744085df397a2fe5b64736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SelfAuthorizedErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SelfAuthorizedErrors;
}
