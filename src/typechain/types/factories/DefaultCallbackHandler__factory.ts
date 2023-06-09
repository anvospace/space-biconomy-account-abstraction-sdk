/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DefaultCallbackHandler,
  DefaultCallbackHandlerInterface,
} from "../DefaultCallbackHandler";

const _abi = [
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105c6806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063a3f4df7e1161005b578063a3f4df7e146100fb578063bc197c8114610144578063f23a6e6114610166578063ffa1ad741461018657600080fd5b806223de291461008157806301ffc9a71461009b578063150b7a02146100c3575b600080fd5b61009961008f3660046102a0565b5050505050505050565b005b6100ae6100a936600461034b565b6101c2565b60405190151581526020015b60405180910390f35b6100e26100d136600461037c565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016100ba565b6101376040518060400160405280601881526020017f44656661756c742043616c6c6261636b2048616e646c6572000000000000000081525081565b6040516100ba91906103eb565b6100e261015236600461047e565b63bc197c8160e01b98975050505050505050565b6100e2610174366004610518565b63f23a6e6160e01b9695505050505050565b6101376040518060400160405280600581526020017f312e302e3000000000000000000000000000000000000000000000000000000081525081565b60006001600160e01b03198216630271189760e51b14806101f357506001600160e01b03198216630a85bd0160e11b145b8061020d57506001600160e01b031982166223de2960e01b145b8061022857506001600160e01b031982166301ffc9a760e01b145b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461025257600080fd5b919050565b60008083601f84011261026957600080fd5b50813567ffffffffffffffff81111561028157600080fd5b60208301915083602082850101111561029957600080fd5b9250929050565b60008060008060008060008060c0898b0312156102bc57600080fd5b6102c58961022e565b97506102d360208a0161022e565b96506102e160408a0161022e565b955060608901359450608089013567ffffffffffffffff8082111561030557600080fd5b6103118c838d01610257565b909650945060a08b013591508082111561032a57600080fd5b506103378b828c01610257565b999c989b5096995094979396929594505050565b60006020828403121561035d57600080fd5b81356001600160e01b03198116811461037557600080fd5b9392505050565b60008060008060006080868803121561039457600080fd5b61039d8661022e565b94506103ab6020870161022e565b935060408601359250606086013567ffffffffffffffff8111156103ce57600080fd5b6103da88828901610257565b969995985093965092949392505050565b600060208083528351808285015260005b81811015610418578581018301518582016040015282016103fc565b506000604082860101526040601f19601f8301168501019250505092915050565b60008083601f84011261044b57600080fd5b50813567ffffffffffffffff81111561046357600080fd5b6020830191508360208260051b850101111561029957600080fd5b60008060008060008060008060a0898b03121561049a57600080fd5b6104a38961022e565b97506104b160208a0161022e565b9650604089013567ffffffffffffffff808211156104ce57600080fd5b6104da8c838d01610439565b909850965060608b01359150808211156104f357600080fd5b6104ff8c838d01610439565b909650945060808b013591508082111561032a57600080fd5b60008060008060008060a0878903121561053157600080fd5b61053a8761022e565b95506105486020880161022e565b94506040870135935060608701359250608087013567ffffffffffffffff81111561057257600080fd5b61057e89828a01610257565b979a969950949750929593949250505056fea2646970667358221220f9bf68273e40153fec1c25026a3e3145e43e4e63c519d4413921bbc86925381c64736f6c63430008110033";

export class DefaultCallbackHandler__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DefaultCallbackHandler> {
    return super.deploy(overrides || {}) as Promise<DefaultCallbackHandler>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DefaultCallbackHandler {
    return super.attach(address) as DefaultCallbackHandler;
  }
  connect(signer: Signer): DefaultCallbackHandler__factory {
    return super.connect(signer) as DefaultCallbackHandler__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefaultCallbackHandlerInterface {
    return new utils.Interface(_abi) as DefaultCallbackHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultCallbackHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DefaultCallbackHandler;
  }
}
