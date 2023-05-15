import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ModuleManagerErrors, ModuleManagerErrorsInterface } from "../ModuleManagerErrors";
export declare class ModuleManagerErrors__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ModuleManagerErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ModuleManagerErrors;
    connect(signer: Signer): ModuleManagerErrors__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212207759df3750356bf10ae86bcf498bfbf386cb22475d8f944aa12575bfd680e9da64736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ModuleManagerErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ModuleManagerErrors;
}
