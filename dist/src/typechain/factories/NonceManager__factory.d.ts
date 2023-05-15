import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NonceManager, NonceManagerInterface } from "../NonceManager";
export declare class NonceManager__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NonceManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NonceManager;
    connect(signer: Signer): NonceManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061020f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd28e3b146100465780631b2e01b81461005b57806335567e1a14610095575b600080fd5b610059610054366004610142565b6100f1565b005b610083610069366004610164565b600060208181529281526040808220909352908152205481565b60405190815260200160405180910390f35b6100836100a3366004610164565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152602081815260408083206001600160c01b0385168452909152908190205491901b67ffffffffffffffff19161790565b336000908152602081815260408083206001600160c01b0385168452909152812080549161011e836101b2565b919050555050565b80356001600160c01b038116811461013d57600080fd5b919050565b60006020828403121561015457600080fd5b61015d82610126565b9392505050565b6000806040838503121561017757600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461019b57600080fd5b91506101a960208401610126565b90509250929050565b6000600182016101d257634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212200121b8cff6755c9cb448ecf76d5fbffe1c3856c72e2981631510d0767bb7c35d64736f6c63430008110033";
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
    static createInterface(): NonceManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonceManager;
}
