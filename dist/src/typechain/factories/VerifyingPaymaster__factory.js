"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyingPaymaster__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address",
            },
            {
                internalType: "address",
                name: "_verifyingSigner",
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
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32",
            },
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getDeposit",
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
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "uint48",
                name: "validUntil",
                type: "uint48",
            },
            {
                internalType: "uint48",
                name: "validAfter",
                type: "uint48",
            },
        ],
        name: "getHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getSenderPaymasterNonce",
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
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
        ],
        name: "getSenderPaymasterNonce",
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
        inputs: [],
        name: "owner",
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
                internalType: "bytes",
                name: "paymasterAndData",
                type: "bytes",
            },
        ],
        name: "parsePaymasterAndData",
        outputs: [
            {
                internalType: "uint48",
                name: "validUntil",
                type: "uint48",
            },
            {
                internalType: "uint48",
                name: "validAfter",
                type: "uint48",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum IPaymaster.PostOpMode",
                name: "mode",
                type: "uint8",
            },
            {
                internalType: "bytes",
                name: "context",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256",
            },
        ],
        name: "postOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "senderNonce",
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
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "maxCost",
                type: "uint256",
            },
        ],
        name: "validatePaymasterUserOp",
        outputs: [
            {
                internalType: "bytes",
                name: "context",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "verifyingSigner",
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
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address",
            },
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b50604051620014c7380380620014c7833981016040819052610031916100bb565b8161003b33610053565b6001600160a01b039081166080521660a052506100f5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100b857600080fd5b50565b600080604083850312156100ce57600080fd5b82516100d9816100a3565b60208401519092506100ea816100a3565b809150509250929050565b60805160a05161137462000153600039600081816101750152610b820152600081816102da015281816103f50152818161048c015281816105a201528181610636015281816106ad0152818161073a015261094c01526113746000f3fe6080604052600436106101295760003560e01c8063a9a23409116100a5578063c399ec8811610074578063f2fde38b11610059578063f2fde38b1461034e578063f465c77e1461036e578063fc5396371461039c57600080fd5b8063c399ec8814610331578063d0e30db01461034657600080fd5b8063a9a23409146102a8578063b0d691fe146102c8578063bb9fe6bf146102fc578063c23a5cea1461031157600080fd5b80638269c352116100fc57806394d4ad60116100e157806394d4ad601461022b57806394e1fc191461025b5780639c90b4431461027b57600080fd5b80638269c352146101c95780638da5cb5b1461020d57600080fd5b80630396cb601461012e578063205c28781461014357806323d9ac9b14610163578063715018a6146101b4575b600080fd5b61014161013c366004610eb4565b6103d3565b005b34801561014f57600080fd5b5061014161015e366004610ef6565b61045e565b34801561016f57600080fd5b506101977f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101c057600080fd5b506101416104d0565b3480156101d557600080fd5b506101ff6101e4366004610f22565b6001600160a01b031660009081526001602052604090205490565b6040519081526020016101ab565b34801561021957600080fd5b506000546001600160a01b0316610197565b34801561023757600080fd5b5061024b610246366004610f81565b6104e4565b6040516101ab9493929190610fc3565b34801561026757600080fd5b506101ff610276366004611043565b610521565b34801561028757600080fd5b506101ff610296366004610f22565b60016020526000908152604090205481565b3480156102b457600080fd5b506101416102c33660046110a1565b61057e565b3480156102d457600080fd5b506101977f000000000000000000000000000000000000000000000000000000000000000081565b34801561030857600080fd5b50610141610598565b34801561031d57600080fd5b5061014161032c366004610f22565b61060f565b34801561033d57600080fd5b506101ff610695565b610141610725565b34801561035a57600080fd5b50610141610369366004610f22565b610787565b34801561037a57600080fd5b5061038e610389366004611101565b61081c565b6040516101ab929190611195565b3480156103a857600080fd5b506101ff6103b73660046111b7565b356001600160a01b031660009081526001602052604090205490565b6103db610840565b604051621cb65b60e51b815263ffffffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630396cb609034906024016000604051808303818588803b15801561044257600080fd5b505af1158015610456573d6000803e3d6000fd5b505050505050565b610466610840565b60405163040b850f60e31b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b15801561044257600080fd5b6104d8610840565b6104e2600061089a565b565b60008036816104f76054601487896111f4565b810190610504919061121e565b909450925061051685605481896111f4565b949793965094505050565b600061052c84610902565b6001600160a01b0385351660009081526001602090815260409182902054915161055f9392469230928991899101611251565b6040516020818303038152906040528051906020012090509392505050565b610586610941565b610592848484846109b9565b50505050565b6105a0610840565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156105fb57600080fd5b505af1158015610592573d6000803e3d6000fd5b610617610840565b60405163611d2e7560e11b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b15801561067a57600080fd5b505af115801561068e573d6000803e3d6000fd5b5050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072091906112a1565b905090565b60405163b760faf960e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b760faf99034906024016000604051808303818588803b15801561067a57600080fd5b61078f610840565b6001600160a01b0381166108105760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6108198161089a565b50565b60606000610828610941565b610833858585610a01565b915091505b935093915050565b6000546001600160a01b031633146104e25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610807565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60603660006109156101208501856112ba565b915091508360208184030360405194506020810185016040528085528082602087013750505050919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104e25760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e7400000000000000000000006044820152606401610807565b60405162461bcd60e51b815260206004820152600d60248201527f6d757374206f76657272696465000000000000000000000000000000000000006044820152606401610807565b6060600080803681610a1a6102466101208b018b6112ba565b929650909450925090506040811480610a335750604181145b610aa7576040805162461bcd60e51b81526020600482015260248101919091527f566572696679696e675061796d61737465723a20696e76616c6964207369676e60448201527f6174757265206c656e67746820696e207061796d6173746572416e64446174616064820152608401610807565b6000610b0a610ab78b8787610521565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b6001600160a01b038b35166000908152600160205260408120805492935090610b3283611301565b9190505550610b778184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c0592505050565b6001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610bda57610bbb60018686610c29565b6040518060200160405280600081525090965096505050505050610838565b610be660008686610c29565b6040805160208101909152600081529b909a5098505050505050505050565b6000806000610c148585610c61565b91509150610c2181610ca6565b509392505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b85610c51576000610c54565b60015b60ff161717949350505050565b6000808251604103610c975760208301516040840151606085015160001a610c8b87828585610df0565b94509450505050610c9f565b506000905060025b9250929050565b6000816004811115610cba57610cba611328565b03610cc25750565b6001816004811115610cd657610cd6611328565b03610d235760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610807565b6002816004811115610d3757610d37611328565b03610d845760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610807565b6003816004811115610d9857610d98611328565b036108195760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610807565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610e275750600090506003610eab565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610e7b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ea457600060019250925050610eab565b9150600090505b94509492505050565b600060208284031215610ec657600080fd5b813563ffffffff81168114610eda57600080fd5b9392505050565b6001600160a01b038116811461081957600080fd5b60008060408385031215610f0957600080fd5b8235610f1481610ee1565b946020939093013593505050565b600060208284031215610f3457600080fd5b8135610eda81610ee1565b60008083601f840112610f5157600080fd5b50813567ffffffffffffffff811115610f6957600080fd5b602083019150836020828501011115610c9f57600080fd5b60008060208385031215610f9457600080fd5b823567ffffffffffffffff811115610fab57600080fd5b610fb785828601610f3f565b90969095509350505050565b600065ffffffffffff808716835280861660208401525060606040830152826060830152828460808401376000608084840101526080601f19601f850116830101905095945050505050565b6000610160828403121561102257600080fd5b50919050565b803565ffffffffffff8116811461103e57600080fd5b919050565b60008060006060848603121561105857600080fd5b833567ffffffffffffffff81111561106f57600080fd5b61107b8682870161100f565b93505061108a60208501611028565b915061109860408501611028565b90509250925092565b600080600080606085870312156110b757600080fd5b8435600381106110c657600080fd5b9350602085013567ffffffffffffffff8111156110e257600080fd5b6110ee87828801610f3f565b9598909750949560400135949350505050565b60008060006060848603121561111657600080fd5b833567ffffffffffffffff81111561112d57600080fd5b6111398682870161100f565b9660208601359650604090950135949350505050565b6000815180845260005b8181101561117557602081850181015186830182015201611159565b506000602082860101526020601f19601f83011685010191505092915050565b6040815260006111a8604083018561114f565b90508260208301529392505050565b6000602082840312156111c957600080fd5b813567ffffffffffffffff8111156111e057600080fd5b6111ec8482850161100f565b949350505050565b6000808585111561120457600080fd5b8386111561121157600080fd5b5050820193919092039150565b6000806040838503121561123157600080fd5b61123a83611028565b915061124860208401611028565b90509250929050565b60c08152600061126460c083018961114f565b6020830197909752506001600160a01b03949094166040850152606084019290925265ffffffffffff90811660808401521660a090910152919050565b6000602082840312156112b357600080fd5b5051919050565b6000808335601e198436030181126112d157600080fd5b83018035915067ffffffffffffffff8211156112ec57600080fd5b602001915036819003821315610c9f57600080fd5b60006001820161132157634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fdfea264697066735822122090b927203ce1a53aff61874d23570c4249e5cc6679ff1434b689112398d9d68964736f6c63430008110033";
class VerifyingPaymaster__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(_entryPoint, _verifyingSigner, overrides) {
        return super.deploy(_entryPoint, _verifyingSigner, overrides || {});
    }
    getDeployTransaction(_entryPoint, _verifyingSigner, overrides) {
        return super.getDeployTransaction(_entryPoint, _verifyingSigner, overrides || {});
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
VerifyingPaymaster__factory.bytecode = _bytecode;
VerifyingPaymaster__factory.abi = _abi;
exports.VerifyingPaymaster__factory = VerifyingPaymaster__factory;
//# sourceMappingURL=VerifyingPaymaster__factory.js.map