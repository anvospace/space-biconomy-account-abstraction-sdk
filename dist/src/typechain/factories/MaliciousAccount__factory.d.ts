import { Signer, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MaliciousAccount, MaliciousAccountInterface } from "../MaliciousAccount";
export declare class MaliciousAccount__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_ep: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<MaliciousAccount>;
    getDeployTransaction(_ep: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MaliciousAccount;
    connect(signer: Signer): MaliciousAccount__factory;
    static readonly bytecode = "0x608060405260405161036638038061036683398101604081905261002291610047565b600080546001600160a01b0319166001600160a01b0392909216919091179055610077565b60006020828403121561005957600080fd5b81516001600160a01b038116811461007057600080fd5b9392505050565b6102e0806100866000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633a871cdd14610030575b600080fd5b61004361003e36600461018b565b610055565b60405190815260200160405180910390f35b6000805460405163b760faf960e01b815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99084906024016000604051808303818588803b1580156100a957600080fd5b505af11580156100bd573d6000803e3d6000fd5b50505050506000848061014001906100d591906101df565b8101906100e2919061022d565b9050600060c08601356100fd60a0880135608089013561025c565b610107919061025c565b905060006101158286610275565b9050600061012861010089013583610297565b905083811461017d5760405162461bcd60e51b815260206004820152601d60248201527f5265766572742061667465722066697273742076616c69646174696f6e000000604482015260640160405180910390fd5b506000979650505050505050565b6000806000606084860312156101a057600080fd5b833567ffffffffffffffff8111156101b757600080fd5b840161016081870312156101ca57600080fd5b95602085013595506040909401359392505050565b6000808335601e198436030181126101f657600080fd5b83018035915067ffffffffffffffff82111561021157600080fd5b60200191503681900382131561022657600080fd5b9250929050565b60006020828403121561023f57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561026f5761026f610246565b92915050565b60008261029257634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561026f5761026f61024656fea26469706673582212208c7878223a9688980b51dee0e60cf58bc7f3feba35daed44d800112f804a9d7664736f6c63430008110033";
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
    static createInterface(): MaliciousAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MaliciousAccount;
}
