import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SelfDestructingContract, SelfDestructingContractInterface } from "../SelfDestructingContract";
export declare class SelfDestructingContract__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SelfDestructingContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SelfDestructingContract;
    connect(signer: Signer): SelfDestructingContract__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c88061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633f5a0bdd14602d575b600080fd5b603c60383660046057565b603e565b005b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600060208284031215606857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114608b57600080fd5b939250505056fea26469706673582212207fc4bf3e0a96190654fc611d73af67b5a564421c9736918858ca2d9d2948168f64736f6c63430008110033";
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
    static createInterface(): SelfDestructingContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SelfDestructingContract;
}
