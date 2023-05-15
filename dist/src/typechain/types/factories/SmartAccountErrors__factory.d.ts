import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SmartAccountErrors, SmartAccountErrorsInterface } from "../SmartAccountErrors";
export declare class SmartAccountErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SmartAccountErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SmartAccountErrors;
    connect(signer: Signer): SmartAccountErrors__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122094600977d167e5f782d8912309a44436e2eb53474fbaebd704b2ff755cb82e4664736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SmartAccountErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SmartAccountErrors;
}
