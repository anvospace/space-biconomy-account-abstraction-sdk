import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiSendCallOnly, MultiSendCallOnlyInterface } from "../MultiSendCallOnly";
export declare class MultiSendCallOnly__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MultiSendCallOnly>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MultiSendCallOnly;
    connect(signer: Signer): MultiSendCallOnly__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101bb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638d80ff0a14610030575b600080fd5b61004361003e3660046100d4565b610045565b005b805160205b818110156100b9578083015160f81c6001820184015160601c60158301850151603584018601516055850187016000856000811461008f576001811461002b5761009b565b6000808585888a5af191505b50806100a657600080fd5b505080605501850194505050505061004a565b505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156100e657600080fd5b813567ffffffffffffffff808211156100fe57600080fd5b818401915084601f83011261011257600080fd5b813581811115610124576101246100be565b604051601f8201601f19908116603f0116810190838211818310171561014c5761014c6100be565b8160405282815287602084870101111561016557600080fd5b82602086016020830137600092810160200192909252509594505050505056fea264697066735822122038b4d4aa45f78e2b451e9814b16e205daec915f2b6524fd6ea4f9c43b4d93e9c64736f6c63430008110033";
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
    static createInterface(): MultiSendCallOnlyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiSendCallOnly;
}
