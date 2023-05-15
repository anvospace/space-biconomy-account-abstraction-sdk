import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SmartAccountFactoryErrors, SmartAccountFactoryErrorsInterface } from "../SmartAccountFactoryErrors";
export declare class SmartAccountFactoryErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SmartAccountFactoryErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SmartAccountFactoryErrors;
    connect(signer: Signer): SmartAccountFactoryErrors__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122064ceee94e2a22762c17c77a8a0e0c292deb55a42b46ef0d57a5724b18925eac064736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SmartAccountFactoryErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SmartAccountFactoryErrors;
}
