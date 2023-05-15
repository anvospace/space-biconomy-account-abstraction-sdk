/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SmartAccountFactory,
  SmartAccountFactoryInterface,
} from "../SmartAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_basicImplementation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "AccountCreation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AccountCreationWithoutIndex",
    type: "event",
  },
  {
    inputs: [],
    name: "accountCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "basicImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "deployAccount",
    outputs: [
      {
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "deployCounterFactualAccount",
    outputs: [
      {
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getAddressForCounterFactualAccount",
    outputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimalHandler",
    outputs: [
      {
        internalType: "contract DefaultCallbackHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610f5a380380610f5a83398101604081905261002f916100de565b6001600160a01b0381166100895760405162461bcd60e51b815260206004820152601d60248201527f696d706c656d656e746174696f6e2063616e6e6f74206265207a65726f000000604482015260640160405180910390fd5b6001600160a01b0381166080526040516100a2906100d1565b604051809103906000f0801580156100be573d6000803e3d6000fd5b506001600160a01b031660a0525061010e565b6105e68061097483390190565b6000602082840312156100f057600080fd5b81516001600160a01b038116811461010757600080fd5b9392505050565b60805160a05161082661014e6000396000818160c1015261056501526000818161010e015281816101b10152818161032b015261043f01526108266000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063d668bfa811610050578063d668bfa8146100e3578063da9fc1ae146100f6578063daf0dfc81461010957600080fd5b8063088924ef1461007757806331c884df146100a75780633b3cb143146100bc575b600080fd5b61008a6100853660046105fe565b610130565b6040516001600160a01b0390911681526020015b60405180910390f35b6100af6102bd565b60405161009e919061064c565b61008a7f000000000000000000000000000000000000000000000000000000000000000081565b61008a6100f13660046105fe565b6102e7565b61008a61010436600461067f565b610408565b61008a7f000000000000000000000000000000000000000000000000000000000000000081565b60008061013c84610550565b90506000818051906020012084604051602001610163929190918252602082015260400190565b60405160208183030381529060405280519060200120905060006040518060200161018d906105d5565b601f1982820381018352601f9091011660408190526101da91906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906020016106a1565b6040516020818303038152906040529050818151826020016000f593506001600160a01b0384166102525760405162461bcd60e51b815260206004820152601360248201527f437265617465322063616c6c206661696c65640000000000000000000000000060448201526064015b60405180910390fd5b8251156102735760008060008551602087016000895af10361027357600080fd5b84866001600160a01b0316856001600160a01b03167f8967dcaa00d8fcb9bb2b5beff4aaf8c020063512cf08fbe11fec37a1e3a150f260405160405180910390a450505092915050565b6060604051806020016102cf906105d5565b601f1982820381018352601f90910116604052919050565b6000806102f384610550565b9050600060405180602001610307906105d5565b601f1982820381018352601f90910116604081905261035491906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906020016106a1565b60408051808303601f1901815282825284516020958601208584015282820196909652805180830382018152606080840183528151918601919091208751978601979097207fff0000000000000000000000000000000000000000000000000000000000000060808501523090911b6bffffffffffffffffffffffff19166081840152609583019690965260b5808301969096528051808303909601865260d5909101905250825192019190912092915050565b6000806040518060200161041b906105d5565b601f1982820381018352601f90910116604081905261046891906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906020016106a1565b60405160208183030381529060405290508051816020016000f091506001600160a01b0382166104da5760405162461bcd60e51b815260206004820152601260248201527f4372656174652063616c6c206661696c656400000000000000000000000000006044820152606401610249565b60006104e584610550565b8051909150156105095760008060008351602085016000885af10361050957600080fd5b836001600160a01b0316836001600160a01b03167f9a6cbf173278cf7dfadb45414d824f7828c0c94479f1b15e45453653070cf65760405160405180910390a35050919050565b6040516001600160a01b0380831660248301527f000000000000000000000000000000000000000000000000000000000000000016604482015260609060640160408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663784d200b60e11b17905292915050565b61012d806106c483390190565b80356001600160a01b03811681146105f957600080fd5b919050565b6000806040838503121561061157600080fd5b61061a836105e2565b946020939093013593505050565b60005b8381101561064357818101518382015260200161062b565b50506000910152565b602081526000825180602084015261066b816040850160208701610628565b601f01601f19169190910160400192915050565b60006020828403121561069157600080fd5b61069a826105e2565b9392505050565b600083516106b3818460208801610628565b919091019182525060200191905056fe608060405234801561001057600080fd5b5060405161012d38038061012d83398101604081905261002f91610090565b6001600160a01b0381166100895760405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e20616464726573730000604482015260640160405180910390fd5b30556100c0565b6000602082840312156100a257600080fd5b81516001600160a01b03811681146100b957600080fd5b9392505050565b605f806100ce6000396000f3fe608060405230543660008037600080366000845af43d6000803e8080156024573d6000f35b3d6000fdfea2646970667358221220a7977748230fa5c96134083773f708cfbe78723c07e58051ac6bd8c4877a4d5a64736f6c63430008110033a26469706673582212201fec0df9ef9e79bf19660229f5fa1cf6bbf67a01bd022c1b6866ccb255550e5764736f6c63430008110033608060405234801561001057600080fd5b506105c6806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063a3f4df7e1161005b578063a3f4df7e146100fb578063bc197c8114610144578063f23a6e6114610166578063ffa1ad741461018657600080fd5b806223de291461008157806301ffc9a71461009b578063150b7a02146100c3575b600080fd5b61009961008f3660046102a0565b5050505050505050565b005b6100ae6100a936600461034b565b6101c2565b60405190151581526020015b60405180910390f35b6100e26100d136600461037c565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016100ba565b6101376040518060400160405280601881526020017f44656661756c742043616c6c6261636b2048616e646c6572000000000000000081525081565b6040516100ba91906103eb565b6100e261015236600461047e565b63bc197c8160e01b98975050505050505050565b6100e2610174366004610518565b63f23a6e6160e01b9695505050505050565b6101376040518060400160405280600581526020017f312e302e3000000000000000000000000000000000000000000000000000000081525081565b60006001600160e01b03198216630271189760e51b14806101f357506001600160e01b03198216630a85bd0160e11b145b8061020d57506001600160e01b031982166223de2960e01b145b8061022857506001600160e01b031982166301ffc9a760e01b145b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461025257600080fd5b919050565b60008083601f84011261026957600080fd5b50813567ffffffffffffffff81111561028157600080fd5b60208301915083602082850101111561029957600080fd5b9250929050565b60008060008060008060008060c0898b0312156102bc57600080fd5b6102c58961022e565b97506102d360208a0161022e565b96506102e160408a0161022e565b955060608901359450608089013567ffffffffffffffff8082111561030557600080fd5b6103118c838d01610257565b909650945060a08b013591508082111561032a57600080fd5b506103378b828c01610257565b999c989b5096995094979396929594505050565b60006020828403121561035d57600080fd5b81356001600160e01b03198116811461037557600080fd5b9392505050565b60008060008060006080868803121561039457600080fd5b61039d8661022e565b94506103ab6020870161022e565b935060408601359250606086013567ffffffffffffffff8111156103ce57600080fd5b6103da88828901610257565b969995985093965092949392505050565b600060208083528351808285015260005b81811015610418578581018301518582016040015282016103fc565b506000604082860101526040601f19601f8301168501019250505092915050565b60008083601f84011261044b57600080fd5b50813567ffffffffffffffff81111561046357600080fd5b6020830191508360208260051b850101111561029957600080fd5b60008060008060008060008060a0898b03121561049a57600080fd5b6104a38961022e565b97506104b160208a0161022e565b9650604089013567ffffffffffffffff808211156104ce57600080fd5b6104da8c838d01610439565b909850965060608b01359150808211156104f357600080fd5b6104ff8c838d01610439565b909650945060808b013591508082111561032a57600080fd5b60008060008060008060a0878903121561053157600080fd5b61053a8761022e565b95506105486020880161022e565b94506040870135935060608701359250608087013567ffffffffffffffff81111561057257600080fd5b61057e89828a01610257565b979a969950949750929593949250505056fea2646970667358221220f9bf68273e40153fec1c25026a3e3145e43e4e63c519d4413921bbc86925381c64736f6c63430008110033";

export class SmartAccountFactory__factory extends ContractFactory {
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
    _basicImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SmartAccountFactory> {
    return super.deploy(
      _basicImplementation,
      overrides || {}
    ) as Promise<SmartAccountFactory>;
  }
  getDeployTransaction(
    _basicImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_basicImplementation, overrides || {});
  }
  attach(address: string): SmartAccountFactory {
    return super.attach(address) as SmartAccountFactory;
  }
  connect(signer: Signer): SmartAccountFactory__factory {
    return super.connect(signer) as SmartAccountFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SmartAccountFactoryInterface {
    return new utils.Interface(_abi) as SmartAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SmartAccountFactory {
    return new Contract(address, _abi, signerOrProvider) as SmartAccountFactory;
  }
}