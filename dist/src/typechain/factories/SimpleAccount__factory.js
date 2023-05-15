"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleAccount__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "anEntryPoint",
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
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract IEntryPoint",
                name: "entryPoint",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "SimpleAccountInitialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "addDeposit",
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
        inputs: [
            {
                internalType: "address",
                name: "dest",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "func",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "dest",
                type: "address[]",
            },
            {
                internalType: "bytes[]",
                name: "func",
                type: "bytes[]",
            },
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "getNonce",
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
                name: "anOwner",
                type: "address",
            },
        ],
        name: "initialize",
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
        inputs: [],
        name: "proxiableUUID",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
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
                name: "missingAccountFunds",
                type: "uint256",
            },
        ],
        name: "validateUserOp",
        outputs: [
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
        name: "withdrawDepositTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60c0604052306080523480156200001557600080fd5b5060405162001f1a38038062001f1a833981016040819052620000389162000118565b6001600160a01b03811660a0526200004f62000056565b506200014a565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000116576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012b57600080fd5b81516001600160a01b03811681146200014357600080fd5b9392505050565b60805160a051611d5d620001bd600039600081816102e4015281816106cd0152818161074e01528181610a7501528181610c2e01528181610c6801528181610f1a0152611160015260008181610534015281816105b9015281816107df01528181610864015261094e0152611d5d6000f3fe60806040526004361061012c5760003560e01c806352d1902d116100a5578063bc197c8111610074578063c4d66de811610059578063c4d66de81461036c578063d087d2881461038c578063f23a6e61146103a157600080fd5b8063bc197c8114610328578063c399ec881461035757600080fd5b806352d1902d146102825780638da5cb5b14610297578063b0d691fe146102d5578063b61d27f61461030857600080fd5b80633659cfe6116100fc5780634a58db19116100e15780634a58db19146102475780634d44560d1461024f5780634f1ef2861461026f57600080fd5b80633659cfe6146101f95780633a871cdd1461021957600080fd5b806223de291461013857806301ffc9a71461015f578063150b7a021461019457806318dfb3c7146101d957600080fd5b3661013357005b600080fd5b34801561014457600080fd5b5061015d6101533660046116fa565b5050505050505050565b005b34801561016b57600080fd5b5061017f61017a3660046117ab565b6103ce565b60405190151581526020015b60405180910390f35b3480156101a057600080fd5b506101c06101af3660046117d5565b630a85bd0160e11b95945050505050565b6040516001600160e01b0319909116815260200161018b565b3480156101e557600080fd5b5061015d6101f436600461188d565b610420565b34801561020557600080fd5b5061015d6102143660046118f9565b61052a565b34801561022557600080fd5b50610239610234366004611916565b6106a5565b60405190815260200161018b565b61015d6106cb565b34801561025b57600080fd5b5061015d61026a36600461196a565b610744565b61015d61027d3660046119ac565b6107d5565b34801561028e57600080fd5b50610239610941565b3480156102a357600080fd5b506000546102bd906201000090046001600160a01b031681565b6040516001600160a01b03909116815260200161018b565b3480156102e157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102bd565b34801561031457600080fd5b5061015d610323366004611a70565b610a06565b34801561033457600080fd5b506101c0610343366004611ac0565b63bc197c8160e01b98975050505050505050565b34801561036357600080fd5b50610239610a55565b34801561037857600080fd5b5061015d6103873660046118f9565b610ae6565b34801561039857600080fd5b50610239610c07565b3480156103ad57600080fd5b506101c06103bc366004611b5e565b63f23a6e6160e01b9695505050505050565b60006001600160e01b03198216630a85bd0160e11b14806103ff57506001600160e01b03198216630271189760e51b145b8061041a57506001600160e01b031982166301ffc9a760e01b145b92915050565b610428610c5d565b82811461047c5760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156105235761051185858381811061049c5761049c611bda565b90506020020160208101906104b191906118f9565b60008585858181106104c5576104c5611bda565b90506020028101906104d79190611bf0565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cf292505050565b8061051b81611c37565b91505061047f565b5050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036105b75760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610473565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106127f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b03161461067d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610473565b61068681610d62565b604080516000808252602082019092526106a291839190610d6a565b50565b60006106af610f0f565b6106b98484610f87565b90506106c482611060565b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b15801561073057600080fd5b505af1158015610523573d6000803e3d6000fd5b61074c6110ad565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156107b957600080fd5b505af11580156107cd573d6000803e3d6000fd5b505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036108625760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610473565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108bd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109285760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610473565b61093182610d62565b61093d82826001610d6a565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109e15760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610473565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610a0e610c5d565b610a4f848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cf292505050565b50505050565b6040516370a0823160e01b81523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610abd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae19190611c5e565b905090565b600054610100900460ff1615808015610b065750600054600160ff909116105b80610b205750303b158015610b20575060005460ff166001145b610b925760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610473565b6000805460ff191660011790558015610bb5576000805461ff0019166101001790555b610bbe82611117565b801561093d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b604051631aab3f0d60e11b8152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610aa0565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610ca457506000546201000090046001600160a01b031633145b610cf05760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152606401610473565b565b600080846001600160a01b03168484604051610d0e9190611c9b565b60006040518083038185875af1925050503d8060008114610d4b576040519150601f19603f3d011682016040523d82523d6000602084013e610d50565b606091505b50915091508161052357805160208201fd5b6106a26110ad565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610da257610d9d836111a9565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610dfc575060408051601f3d908101601f19168201909252610df991810190611c5e565b60015b610e6e5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610473565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610f035760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610473565b50610d9d83838361127f565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cf05760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610473565b600080610fe1836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050611031610ff4610140860186611bf0565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506112a49050565b6000546201000090046001600160a01b0390811691161461105657600191505061041a565b5060009392505050565b80156106a257604051600090339060001990849084818181858888f193505050503d8060008114610523576040519150601f19603f3d011682016040523d82523d6000602084013e610523565b6000546201000090046001600160a01b03163314806110cb57503330145b610cf05760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610473565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16620100006001600160a01b038481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b6001600160a01b0381163b6112265760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610473565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b611288836112c8565b6000825111806112955750805b15610d9d57610a4f8383611308565b60008060006112b3858561132d565b915091506112c081611372565b509392505050565b6112d1816111a9565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606106c48383604051806060016040528060278152602001611d01602791396114bc565b60008082516041036113635760208301516040840151606085015160001a61135787828585611534565b9450945050505061136b565b506000905060025b9250929050565b600081600481111561138657611386611cb7565b0361138e5750565b60018160048111156113a2576113a2611cb7565b036113ef5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610473565b600281600481111561140357611403611cb7565b036114505760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610473565b600381600481111561146457611464611cb7565b036106a25760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610473565b6060600080856001600160a01b0316856040516114d99190611c9b565b600060405180830381855af49150503d8060008114611514576040519150601f19603f3d011682016040523d82523d6000602084013e611519565b606091505b509150915061152a868383876115f8565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561156b57506000905060036115ef565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156115bf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166115e8576000600192509250506115ef565b9150600090505b94509492505050565b60608315611667578251600003611660576001600160a01b0385163b6116605760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610473565b5081611671565b6116718383611679565b949350505050565b8151156116895781518083602001fd5b8060405162461bcd60e51b81526004016104739190611ccd565b6001600160a01b03811681146106a257600080fd5b60008083601f8401126116ca57600080fd5b50813567ffffffffffffffff8111156116e257600080fd5b60208301915083602082850101111561136b57600080fd5b60008060008060008060008060c0898b03121561171657600080fd5b8835611721816116a3565b97506020890135611731816116a3565b96506040890135611741816116a3565b955060608901359450608089013567ffffffffffffffff8082111561176557600080fd5b6117718c838d016116b8565b909650945060a08b013591508082111561178a57600080fd5b506117978b828c016116b8565b999c989b5096995094979396929594505050565b6000602082840312156117bd57600080fd5b81356001600160e01b0319811681146106c457600080fd5b6000806000806000608086880312156117ed57600080fd5b85356117f8816116a3565b94506020860135611808816116a3565b935060408601359250606086013567ffffffffffffffff81111561182b57600080fd5b611837888289016116b8565b969995985093965092949392505050565b60008083601f84011261185a57600080fd5b50813567ffffffffffffffff81111561187257600080fd5b6020830191508360208260051b850101111561136b57600080fd5b600080600080604085870312156118a357600080fd5b843567ffffffffffffffff808211156118bb57600080fd5b6118c788838901611848565b909650945060208701359150808211156118e057600080fd5b506118ed87828801611848565b95989497509550505050565b60006020828403121561190b57600080fd5b81356106c4816116a3565b60008060006060848603121561192b57600080fd5b833567ffffffffffffffff81111561194257600080fd5b8401610160818703121561195557600080fd5b95602085013595506040909401359392505050565b6000806040838503121561197d57600080fd5b8235611988816116a3565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156119bf57600080fd5b82356119ca816116a3565b9150602083013567ffffffffffffffff808211156119e757600080fd5b818501915085601f8301126119fb57600080fd5b813581811115611a0d57611a0d611996565b604051601f8201601f19908116603f01168101908382118183101715611a3557611a35611996565b81604052828152886020848701011115611a4e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060008060608587031215611a8657600080fd5b8435611a91816116a3565b935060208501359250604085013567ffffffffffffffff811115611ab457600080fd5b6118ed878288016116b8565b60008060008060008060008060a0898b031215611adc57600080fd5b8835611ae7816116a3565b97506020890135611af7816116a3565b9650604089013567ffffffffffffffff80821115611b1457600080fd5b611b208c838d01611848565b909850965060608b0135915080821115611b3957600080fd5b611b458c838d01611848565b909650945060808b013591508082111561178a57600080fd5b60008060008060008060a08789031215611b7757600080fd5b8635611b82816116a3565b95506020870135611b92816116a3565b94506040870135935060608701359250608087013567ffffffffffffffff811115611bbc57600080fd5b611bc889828a016116b8565b979a9699509497509295939492505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611c0757600080fd5b83018035915067ffffffffffffffff821115611c2257600080fd5b60200191503681900382131561136b57600080fd5b600060018201611c5757634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215611c7057600080fd5b5051919050565b60005b83811015611c92578181015183820152602001611c7a565b50506000910152565b60008251611cad818460208701611c77565b9190910192915050565b634e487b7160e01b600052602160045260246000fd5b6020815260008251806020840152611cec816040850160208701611c77565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201fed438535fe4c1b8467a6b47dccea39314e2d3533316f551eef57cf5a1c901764736f6c63430008110033";
class SimpleAccount__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(anEntryPoint, overrides) {
        return super.deploy(anEntryPoint, overrides || {});
    }
    getDeployTransaction(anEntryPoint, overrides) {
        return super.getDeployTransaction(anEntryPoint, overrides || {});
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
SimpleAccount__factory.bytecode = _bytecode;
SimpleAccount__factory.abi = _abi;
exports.SimpleAccount__factory = SimpleAccount__factory;
//# sourceMappingURL=SimpleAccount__factory.js.map