import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FallbackManager, FallbackManagerInterface } from "../FallbackManager";
export declare class FallbackManager__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FallbackManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FallbackManager;
    connect(signer: Signer): FallbackManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610232806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063856dfd991461008f578063f08a0323146100cd575b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d480548061006057005b36600080373360601b365260008060143601600080855af190503d6000803e80610089573d6000fd5b503d6000f35b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4546040516001600160a01b03909116815260200160405180910390f35b6100e06100db3660046101cc565b6100e2565b005b6100ea610159565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d45461011582610181565b816001600160a01b0316816001600160a01b03167f06be9a1bea257286cf2afa8205ed494ca9d6a4b41aa58d04238deebada20fb0c60405160405180910390a35050565b33301461017f576040516301478e3360e21b815233600482015260240160405180910390fd5b565b6001600160a01b0381166101a85760405163dd449f5f60e01b815260040160405180910390fd5b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d455565b6000602082840312156101de57600080fd5b81356001600160a01b03811681146101f557600080fd5b939250505056fea2646970667358221220243d8d0a2a6a0e92515304ac6a94d4a32262f536981f95e3877a54658d58e6a464736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
    static createInterface(): FallbackManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FallbackManager;
}
