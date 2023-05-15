/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Deployer, DeployerInterface } from "../Deployer";

const _abi = [
  {
    inputs: [],
    name: "ErrorCreatingContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorCreatingProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "TargetAlreadyExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ContractDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "addressOf",
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
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_creationCode",
        type: "bytes",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610439806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063bb34534c1461003b578063cdcb760a1461006a575b600080fd5b61004e61004936600461033f565b61007f565b6040516001600160a01b03909116815260200160405180910390f35b61007d610078366004610358565b610090565b005b600061008a8261010f565b92915050565b60006100d28484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506101fe92505050565b6040519091506001600160a01b038216907f8ffcdc15a283d706d38281f500270d8b5a656918f555de0913d7455e3e6bc1bf90600090a250505050565b6000806101a8836040517fff0000000000000000000000000000000000000000000000000000000000000060208201526bffffffffffffffffffffffff193060601b166021820152603581018290527f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f605582015260009060750160408051601f19818403018152919052805160209091012092915050565b6040516135a560f21b60208201526bffffffffffffffffffffffff19606083901b166022820152600160f81b603682015290915060370160408051601f1981840301815291905280516020909101209392505050565b600061020c83836000610213565b9392505050565b60408051808201909152601081527f67363d3d37363d34f03d5260086018f30000000000000000000000000000000060208201526000906102538561010f565b9150813b156102755760405163cd43efa160e01b815260040160405180910390fd5b6000858251602084016000f590506001600160a01b0381166102aa5760405163bbd2fe8760e01b815260040160405180910390fd5b6000816001600160a01b031685876040516102c591906103d4565b60006040518083038185875af1925050503d8060008114610302576040519150601f19603f3d011682016040523d82523d6000602084013e610307565b606091505b505090508015806103175750833b155b15610335576040516353de54b960e01b815260040160405180910390fd5b5050509392505050565b60006020828403121561035157600080fd5b5035919050565b60008060006040848603121561036d57600080fd5b83359250602084013567ffffffffffffffff8082111561038c57600080fd5b818601915086601f8301126103a057600080fd5b8135818111156103af57600080fd5b8760208285010111156103c157600080fd5b6020830194508093505050509250925092565b6000825160005b818110156103f557602081860181015185830152016103db565b50600092019182525091905056fea26469706673582212207886676dff8e9b5ec182bd3d55512921e83b71170648ce1692043a572fa2954964736f6c63430008110033";

export class Deployer__factory extends ContractFactory {
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
  ): Promise<Deployer> {
    return super.deploy(overrides || {}) as Promise<Deployer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Deployer {
    return super.attach(address) as Deployer;
  }
  connect(signer: Signer): Deployer__factory {
    return super.connect(signer) as Deployer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployerInterface {
    return new utils.Interface(_abi) as DeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Deployer {
    return new Contract(address, _abi, signerOrProvider) as Deployer;
  }
}
