"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCounter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "CalledFrom",
        type: "event",
    },
    {
        inputs: [],
        name: "count",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "countFail",
        outputs: [],
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
        ],
        name: "counters",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "repeat",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "gasWaster",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "justemit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "offset",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "xxx",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610353806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a5e9585f1161005b578063a5e9585f146100a7578063be65ab8c146100d9578063caece693146100f9578063d55565441461010157600080fd5b806306661abd14610082578063278ddd3c1461008c578063a1b4689014610094575b600080fd5b61008a61010a565b005b61008a610137565b61008a6100a2366004610203565b61016c565b6100c76100b536600461027f565b60016020526000908152604090205481565b60405190815260200160405180910390f35b6100c76100e7366004610298565b60006020819052908152604090205481565b61008a6101b7565b6100c760025481565b336000908152602081905260409020546101259060016102eb565b33600090815260208190526040902055565b6040513381527ffb3b4d6258432a9a3d78dd9bffbcb6cfb1bd94f58da35fd530d08da7d1d058329060200160405180910390a1565b60015b8381116101b1576002805490600061018683610304565b90915550506002546000908152600160205260409020819055806101a981610304565b91505061016f565b50505050565b60405162461bcd60e51b815260206004820152600c60248201527f636f756e74206661696c65640000000000000000000000000000000000000000604482015260640160405180910390fd5b60008060006040848603121561021857600080fd5b83359250602084013567ffffffffffffffff8082111561023757600080fd5b818601915086601f83011261024b57600080fd5b81358181111561025a57600080fd5b87602082850101111561026c57600080fd5b6020830194508093505050509250925092565b60006020828403121561029157600080fd5b5035919050565b6000602082840312156102aa57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146102ce57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102fe576102fe6102d5565b92915050565b600060018201610316576103166102d5565b506001019056fea2646970667358221220173a81fb03938b0c7cbeeeb173c041bff04effa6d79a7ea182a5275fb12e12e364736f6c63430008110033";
class TestCounter__factory extends ethers_1.ContractFactory {
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
TestCounter__factory.bytecode = _bytecode;
TestCounter__factory.abi = _abi;
exports.TestCounter__factory = TestCounter__factory;
//# sourceMappingURL=TestCounter__factory.js.map