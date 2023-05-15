import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SelfAuthorized, SelfAuthorizedInterface } from "../SelfAuthorized";
export declare class SelfAuthorized__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SelfAuthorized>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SelfAuthorized;
    connect(signer: Signer): SelfAuthorized__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212201d1cdcd3bbe8d81f2ec1b207096f7e127c03a3929663f44844b877b595f718f864736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SelfAuthorizedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SelfAuthorized;
}
