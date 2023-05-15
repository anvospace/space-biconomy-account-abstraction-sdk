import { Signer, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestWarmColdAccount, TestWarmColdAccountInterface } from "../TestWarmColdAccount";
export declare class TestWarmColdAccount__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_ep: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<TestWarmColdAccount>;
    getDeployTransaction(_ep: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestWarmColdAccount;
    connect(signer: Signer): TestWarmColdAccount__factory;
    static readonly bytecode = "0x6080604052600180556040516104323803806104328339810160408190526100269161004b565b600080546001600160a01b0319166001600160a01b039290921691909117905561007b565b60006020828403121561005d57600080fd5b81516001600160a01b038116811461007457600080fd5b9392505050565b6103a88061008a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633a871cdd14610051578063c19d93fb14610076578063f115d40d1461007f578063fb0c24251461009a575b600080fd5b61006461005f366004610228565b6100a2565b60405190815260200160405180910390f35b61006460015481565b61006461008d36600461027c565b6001600160a01b03163b90565b600154610064565b6000805460405163b760faf960e01b81523060048201526001600160a01b039091169063b760faf99084906024016000604051808303818588803b1580156100e957600080fd5b505af11580156100fd573d6000803e3d6000fd5b5050505050836020013560010361017a57306001600160a01b031663fb0c24256103e86040518263ffffffff1660e01b81526004016020604051808303818786fa15801561014f573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061017491906102ac565b5061021e565b836020013560020361021e5760006101966101208601866102c5565b6101a591601491600091610313565b6101ae9161033d565b60405163f115d40d60e01b815260609190911c600482018190529150309063f115d40d906103e8906024016020604051808303818786fa1580156101f6573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061021b91906102ac565b50505b5060009392505050565b60008060006060848603121561023d57600080fd5b833567ffffffffffffffff81111561025457600080fd5b8401610160818703121561026757600080fd5b95602085013595506040909401359392505050565b60006020828403121561028e57600080fd5b81356001600160a01b03811681146102a557600080fd5b9392505050565b6000602082840312156102be57600080fd5b5051919050565b6000808335601e198436030181126102dc57600080fd5b83018035915067ffffffffffffffff8211156102f757600080fd5b60200191503681900382131561030c57600080fd5b9250929050565b6000808585111561032357600080fd5b8386111561033057600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff19813581811691601485101561036a5780818660140360031b1b83161692505b50509291505056fea2646970667358221220a4b1569ebae03e1a8b3728e634c5d8dee4d0f1996c970824e1c9f85b972d30b964736f6c63430008110033";
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
    static createInterface(): TestWarmColdAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestWarmColdAccount;
}
