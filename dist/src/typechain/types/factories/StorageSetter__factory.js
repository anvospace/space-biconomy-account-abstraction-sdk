"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageSetter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes3",
                name: "data",
                type: "bytes3",
            },
        ],
        name: "setStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060db8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a4b42cc314602d575b600080fd5b605c6038366004605e565b7f424242424242424242424242424242424242424242424242424242424242424255565b005b600060208284031215606f57600080fd5b81357fffffff000000000000000000000000000000000000000000000000000000000081168114609e57600080fd5b939250505056fea2646970667358221220ac31a6a99d7421cd1a258fbe42832f77ff8b077b4f62dbf4dc4b953b6470a66764736f6c63430008110033";
class StorageSetter__factory extends ethers_1.ContractFactory {
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
StorageSetter__factory.bytecode = _bytecode;
StorageSetter__factory.abi = _abi;
exports.StorageSetter__factory = StorageSetter__factory;
//# sourceMappingURL=StorageSetter__factory.js.map