import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Upgrader, UpgraderInterface } from "../Upgrader";
export declare class Upgrader__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Upgrader>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Upgrader;
    connect(signer: Signer): Upgrader__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060cf8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80630900f01014602d575b600080fd5b605c6038366004605e565b7f37722d148fb373b961a84120b6c8d209709b45377878a466db32bbc40d95af2655565b005b600060208284031215606f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114609257600080fd5b939250505056fea2646970667358221220f9564bcbf74540862f4d61e96b3d4b45cb3f82e69a3378d6b05fa9b006b7cbad64736f6c63430008110033";
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
    static createInterface(): UpgraderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Upgrader;
}
