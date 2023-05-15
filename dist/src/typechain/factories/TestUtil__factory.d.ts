import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestUtil, TestUtilInterface } from "../TestUtil";
export declare class TestUtil__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestUtil>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestUtil;
    connect(signer: Signer): TestUtil__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610272806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633a24dea414610030575b600080fd5b61004361003e36600461015d565b610059565b60405161005091906101a0565b60405180910390f35b60606100648261006a565b92915050565b606081356020830135600061008a61008560408701876101ee565b61014a565b9050600061009e61008560608801886101ee565b9050608086013560a087013560c088013560e08901356101008a013560006100cd6100856101208e018e6101ee565b6040805173ffffffffffffffffffffffffffffffffffffffff9c909c1660208d01528b81019a909a5260608b019890985250608089019590955260a088019390935260c087019190915260e08601526101008501526101208401526101408084019190915281518084039091018152610160909201905292915050565b6000604051828085833790209392505050565b60006020828403121561016f57600080fd5b813567ffffffffffffffff81111561018657600080fd5b8201610160818503121561019957600080fd5b9392505050565b600060208083528351808285015260005b818110156101cd578581018301518582016040015282016101b1565b506000604082860101526040601f19601f8301168501019250505092915050565b6000808335601e1984360301811261020557600080fd5b83018035915067ffffffffffffffff82111561022057600080fd5b60200191503681900382131561023557600080fd5b925092905056fea2646970667358221220186da66469c8cdc13a19aa9d083e207c149631a9130ef4dd7aa09f6bbc19398564736f6c63430008110033";
    static readonly abi: {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    static createInterface(): TestUtilInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestUtil;
}
