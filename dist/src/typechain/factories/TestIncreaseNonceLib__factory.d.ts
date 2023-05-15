import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestIncreaseNonceLib, TestIncreaseNonceLibInterface } from "../TestIncreaseNonceLib";
export declare class TestIncreaseNonceLib__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestIncreaseNonceLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestIncreaseNonceLib;
    connect(signer: Signer): TestIncreaseNonceLib__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061010e806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806379f7573a14602d575b600080fd5b603c6038366004609a565b603e565b005b600081815260336020526040812080547f6e6c2a169ed1d0ccf49fb789155d57448b8405088c7f40fcfaa03dea8569aeae92849291607a9060b2565b91829055506040805192835260208301919091520160405180910390a150565b60006020828403121560ab57600080fd5b5035919050565b60006001820160d157634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220ac7e6476ef395f0d18052a90f71a5d2d3a272ae4ae9e108620e0523d065e9ba464736f6c63430008110033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestIncreaseNonceLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestIncreaseNonceLib;
}
