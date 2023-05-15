import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestOracle, TestOracleInterface } from "../TestOracle";
export declare class TestOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestOracle;
    connect(signer: Signer): TestOracle__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060d18061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063d1eca9cf14602d575b600080fd5b603c6038366004605f565b604e565b60405190815260200160405180910390f35b600060598260026077565b92915050565b600060208284031215607057600080fd5b5035919050565b8082028115828204841417605957634e487b7160e01b600052601160045260246000fdfea2646970667358221220e231c2b89a6c9a44e3cd6ea1ce5ebe70af35ed8c80e612ab601d1b6d8a7d406f64736f6c63430008110033";
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
    static createInterface(): TestOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestOracle;
}
