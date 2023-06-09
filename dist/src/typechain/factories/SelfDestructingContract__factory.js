"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDestructingContract__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "selfDestruct",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060c88061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633f5a0bdd14602d575b600080fd5b603c60383660046057565b603e565b005b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600060208284031215606857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114608b57600080fd5b939250505056fea26469706673582212207fc4bf3e0a96190654fc611d73af67b5a564421c9736918858ca2d9d2948168f64736f6c63430008110033";
class SelfDestructingContract__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
SelfDestructingContract__factory.bytecode = _bytecode;
SelfDestructingContract__factory.abi = _abi;
exports.SelfDestructingContract__factory = SelfDestructingContract__factory;
//# sourceMappingURL=SelfDestructingContract__factory.js.map