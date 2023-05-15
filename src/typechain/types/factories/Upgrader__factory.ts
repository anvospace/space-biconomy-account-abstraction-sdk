/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Upgrader, UpgraderInterface } from "../Upgrader";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060cf8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80630900f01014602d575b600080fd5b605c6038366004605e565b7f37722d148fb373b961a84120b6c8d209709b45377878a466db32bbc40d95af2655565b005b600060208284031215606f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114609257600080fd5b939250505056fea2646970667358221220f9564bcbf74540862f4d61e96b3d4b45cb3f82e69a3378d6b05fa9b006b7cbad64736f6c63430008110033";

export class Upgrader__factory extends ContractFactory {
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
  ): Promise<Upgrader> {
    return super.deploy(overrides || {}) as Promise<Upgrader>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Upgrader {
    return super.attach(address) as Upgrader;
  }
  connect(signer: Signer): Upgrader__factory {
    return super.connect(signer) as Upgrader__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgraderInterface {
    return new utils.Interface(_abi) as UpgraderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Upgrader {
    return new Contract(address, _abi, signerOrProvider) as Upgrader;
  }
}