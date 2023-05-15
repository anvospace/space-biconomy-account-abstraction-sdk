import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Button, ButtonInterface } from "../Button";
export declare class Button__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Button>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Button;
    connect(signer: Signer): Button__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61031c8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063715018a611610050578063715018a6146100925780638da5cb5b1461009a578063f2fde38b146100b557600080fd5b80630a0079721461006c57806331b982e914610076575b600080fd5b6100746100c8565b005b61007f60015481565b6040519081526020015b60405180910390f35b610074610124565b6000546040516001600160a01b039091168152602001610089565b6100746100c336600461028f565b610138565b6100d06101cd565b600180549060006100e0836102bf565b90915550506001546040805133815260208101929092527fe5b191d26c3c0fe400f8aeb9867a526f00cb8f56584918c0a57428ad8dd5d7a0910160405180910390a1565b61012c6101cd565b6101366000610227565b565b6101406101cd565b6001600160a01b0381166101c15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6101ca81610227565b50565b6000546001600160a01b031633146101365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101b8565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156102a157600080fd5b81356001600160a01b03811681146102b857600080fd5b9392505050565b6000600182016102df57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220bf89f8004cc1fb681a2db1451a1e6515763bf74ee604055de65c51e6ac70ffe764736f6c63430008110033";
    static readonly abi: ({
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
    static createInterface(): ButtonInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Button;
}
