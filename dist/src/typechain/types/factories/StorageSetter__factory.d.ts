import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StorageSetter, StorageSetterInterface } from "../StorageSetter";
export declare class StorageSetter__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StorageSetter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StorageSetter;
    connect(signer: Signer): StorageSetter__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060db8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a4b42cc314602d575b600080fd5b605c6038366004605e565b7f424242424242424242424242424242424242424242424242424242424242424255565b005b600060208284031215606f57600080fd5b81357fffffff000000000000000000000000000000000000000000000000000000000081168114609e57600080fd5b939250505056fea2646970667358221220ac31a6a99d7421cd1a258fbe42832f77ff8b077b4f62dbf4dc4b953b6470a66764736f6c63430008110033";
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
    static createInterface(): StorageSetterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StorageSetter;
}
