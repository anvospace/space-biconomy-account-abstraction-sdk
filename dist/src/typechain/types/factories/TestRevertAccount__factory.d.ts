import { Signer, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestRevertAccount, TestRevertAccountInterface } from "../TestRevertAccount";
export declare class TestRevertAccount__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_ep: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<TestRevertAccount>;
    getDeployTransaction(_ep: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestRevertAccount;
    connect(signer: Signer): TestRevertAccount__factory;
    static readonly bytecode = "0x608060405260405161021538038061021583398101604081905261002291610047565b600080546001600160a01b0319166001600160a01b0392909216919091179055610077565b60006020828403121561005957600080fd5b81516001600160a01b038116811461007057600080fd5b9392505050565b61018f806100866000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633a871cdd1461003b578063be76c6ef14610060575b600080fd5b61004e6100493660046100ec565b610075565b60405190815260200160405180910390f35b61007361006e366004610140565b806000fd5b005b6000805460405163b760faf960e01b815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99084906024016000604051808303818588803b1580156100c957600080fd5b505af11580156100dd573d6000803e3d6000fd5b50600098975050505050505050565b60008060006060848603121561010157600080fd5b833567ffffffffffffffff81111561011857600080fd5b8401610160818703121561012b57600080fd5b95602085013595506040909401359392505050565b60006020828403121561015257600080fd5b503591905056fea2646970667358221220c6b31e7d1688827493b940b7fe394b86ee044023802362527d21dd935930996764736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TestRevertAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestRevertAccount;
}
