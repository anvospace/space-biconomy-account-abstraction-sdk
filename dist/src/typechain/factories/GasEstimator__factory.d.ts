import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GasEstimator, GasEstimatorInterface } from "../GasEstimator";
export declare class GasEstimator__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GasEstimator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GasEstimator;
    connect(signer: Signer): GasEstimator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610255806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630eb34cd314610030575b600080fd5b61004361003e3660046100eb565b61005b565b60405161005293929190610189565b60405180910390f35b600060606000805a90508673ffffffffffffffffffffffffffffffffffffffff16868660405161008c9291906101e8565b6000604051808303816000865af19150503d80600081146100c9576040519150601f19603f3d011682016040523d82523d6000602084013e6100ce565b606091505b5090945092505a6100df90826101f8565b91505093509350939050565b60008060006040848603121561010057600080fd5b833573ffffffffffffffffffffffffffffffffffffffff8116811461012457600080fd5b9250602084013567ffffffffffffffff8082111561014157600080fd5b818601915086601f83011261015557600080fd5b81358181111561016457600080fd5b87602082850101111561017657600080fd5b6020830194508093505050509250925092565b831515815260006020606081840152845180606085015260005b818110156101bf578681018301518582016080015282016101a3565b506000608082860101526080601f19601f83011685010192505050826040830152949350505050565b8183823760009101908152919050565b8181038181111561021957634e487b7160e01b600052601160045260246000fd5b9291505056fea26469706673582212202adcc87e00f4d8d4560db7ff31ebf5932904c76ee4204128de3691221e5c60a164736f6c63430008110033";
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
    static createInterface(): GasEstimatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasEstimator;
}
