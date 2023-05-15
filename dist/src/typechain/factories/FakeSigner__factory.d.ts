import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FakeSigner, FakeSignerInterface } from "../FakeSigner";
export declare class FakeSigner__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FakeSigner>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FakeSigner;
    connect(signer: Signer): FakeSigner__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610220806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631626ba7e1461003b5780638a4e37691461008d575b600080fd5b6100576100493660046100e1565b630b135d3f60e11b92915050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b60408051306020820152604181830152600060608201819052606180830191909152825180830390910181526081909101918290526100849161019c565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156100f457600080fd5b82359150602083013567ffffffffffffffff8082111561011357600080fd5b818501915085601f83011261012757600080fd5b813581811115610139576101396100cb565b604051601f8201601f19908116603f01168101908382118183101715610161576101616100cb565b8160405282815288602084870101111561017a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600060208083528351808285015260005b818110156101c9578581018301518582016040015282016101ad565b506000604082860101526040601f19601f830116850101925050509291505056fea2646970667358221220005ea0d450d077c6a9b4a383197c4ae67709d4cd22e3e7838137056ecb7176f264736f6c63430008110033";
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
    static createInterface(): FakeSignerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FakeSigner;
}
