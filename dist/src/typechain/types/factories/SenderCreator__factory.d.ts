import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SenderCreator, SenderCreatorInterface } from "../SenderCreator";
export declare class SenderCreator__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SenderCreator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SenderCreator;
    connect(signer: Signer): SenderCreator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610200806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063570e1a3614610030575b600080fd5b61004361003e3660046100f9565b61006c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60008061007c601482858761016b565b61008591610195565b60601c90506000610099846014818861016b565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525084519495509360209350849250905082850182875af190506000519350806100f057600093505b50505092915050565b6000806020838503121561010c57600080fd5b823567ffffffffffffffff8082111561012457600080fd5b818501915085601f83011261013857600080fd5b81358181111561014757600080fd5b86602082850101111561015957600080fd5b60209290920196919550909350505050565b6000808585111561017b57600080fd5b8386111561018857600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff1981358181169160148510156101c25780818660140360031b1b83161692505b50509291505056fea26469706673582212202c1dc86959db52cf1bd05cd33b6c1388373718a7a07d81888acd893914ef08e864736f6c63430008110033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): SenderCreatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SenderCreator;
}
