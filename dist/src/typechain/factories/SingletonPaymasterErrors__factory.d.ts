import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SingletonPaymasterErrors, SingletonPaymasterErrorsInterface } from "../SingletonPaymasterErrors";
export declare class SingletonPaymasterErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SingletonPaymasterErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SingletonPaymasterErrors;
    connect(signer: Signer): SingletonPaymasterErrors__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220e2a5f2bdc3497317cf2c544269f0e770db2ade7d2a7d3930b3b66176bb9499a364736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SingletonPaymasterErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SingletonPaymasterErrors;
}
