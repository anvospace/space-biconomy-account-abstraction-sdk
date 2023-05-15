import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiSend, MultiSendInterface } from "../MultiSend";
export declare class MultiSend__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MultiSend>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MultiSend;
    connect(signer: Signer): MultiSend__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b503060805260805161027961002f6000396000605c01526102796000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638d80ff0a14610030575b600080fd5b61004361003e366004610192565b610045565b005b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036100f45760405162461bcd60e51b815260206004820152603060248201527f4d756c746953656e642073686f756c64206f6e6c792062652063616c6c65642060448201527f7669612064656c656761746563616c6c00000000000000000000000000000000606482015260840160405180910390fd5b805160205b81811015610177578083015160f81c6001820184015160601c60158301850151603584018601516055850187016000856000811461013e576001811461014e57610159565b6000808585888a5af19150610159565b6000808585895af491505b508061016457600080fd5b50508060550185019450505050506100f9565b505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156101a457600080fd5b813567ffffffffffffffff808211156101bc57600080fd5b818401915084601f8301126101d057600080fd5b8135818111156101e2576101e261017c565b604051601f8201601f19908116603f0116810190838211818310171561020a5761020a61017c565b8160405282815287602084870101111561022357600080fd5b82602086016020830137600092810160200192909252509594505050505056fea26469706673582212200f72b6f26f59a7164ac4197ef38034b20c7730bc93f1c94f577ad34d68bfab7464736f6c63430008110033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): MultiSendInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiSend;
}
