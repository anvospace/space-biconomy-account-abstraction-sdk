import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GuardManager, GuardManagerInterface } from "../GuardManager";
export declare class GuardManager__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GuardManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GuardManager;
    connect(signer: Signer): GuardManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610251806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c91063891461003b578063e19a9dd914610079575b600080fd5b7f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c7546040516001600160a01b03909116815260200160405180910390f35b61008c6100873660046101c9565b61008e565b005b6100966101a5565b6001600160a01b03811615610141576040516301ffc9a760e01b8152636e183c6760e11b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156100f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011491906101f9565b61014157604051634813e70560e11b81526001600160a01b03821660048201526024015b60405180910390fd5b7f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c78181556040516001600160a01b03831681527ffd0c9a427e7dc1fd35e63b6deeaba07d7052412ba1601356a66e2048a688771c9060200160405180910390a15050565b3330146101c7576040516301478e3360e21b8152336004820152602401610138565b565b6000602082840312156101db57600080fd5b81356001600160a01b03811681146101f257600080fd5b9392505050565b60006020828403121561020b57600080fd5b815180151581146101f257600080fdfea2646970667358221220b34656d0cdf9474366bb94ee699ffeb0ac13b65591353e86bf37fc886d2bbd2f64736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): GuardManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GuardManager;
}
