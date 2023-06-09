"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakedTestToken__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
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
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "STAKED_TOKEN",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "balanceOf",
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
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
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
                name: "_for",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "stake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
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
        name: "totalSupply",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162000d6038038062000d608339810160408190526200003491620000c4565b604051806040016040528060058152602001641cdd1514d560da1b8152506040518060400160405280600f81526020016e29ba30b5b2b22a32b9ba2a37b5b2b760891b81525081600390816200008b91906200019b565b5060046200009a82826200019b565b5050600580546001600160a01b0319166001600160a01b0393909316929092179091555062000267565b600060208284031215620000d757600080fd5b81516001600160a01b0381168114620000ef57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200012157607f821691505b6020821081036200014257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200019657600081815260208120601f850160051c81016020861015620001715750805b601f850160051c820191505b8181101562000192578281556001016200017d565b5050505b505050565b81516001600160401b03811115620001b757620001b7620000f6565b620001cf81620001c884546200010c565b8462000148565b602080601f831160018114620002075760008415620001ee5750858301515b600019600386901b1c1916600185901b17855562000192565b600085815260208120601f198616915b82811015620002385788860151825594840194600190910190840162000217565b5085821015620002575787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ae980620002776000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806340c10f191161008c578063a457c2d711610066578063a457c2d7146101e8578063a9059cbb146101fb578063adc9772e1461020e578063dd62ed3e1461022157600080fd5b806340c10f19146101a257806370a08231146101b757806395d89b41146101e057600080fd5b806323b872dd116100c857806323b872dd14610142578063312f6b8314610155578063313ce56714610180578063395093511461018f57600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761025a565b6040516101049190610911565b60405180910390f35b61012061011b36600461097b565b6102ec565b6040519015158152602001610104565b6002545b604051908152602001610104565b6101206101503660046109a5565b610306565b600554610168906001600160a01b031681565b6040516001600160a01b039091168152602001610104565b60405160128152602001610104565b61012061019d36600461097b565b61032a565b6101b56101b036600461097b565b610369565b005b6101346101c53660046109e1565b6001600160a01b031660009081526020819052604090205490565b6100f7610377565b6101206101f636600461097b565b610386565b61012061020936600461097b565b610435565b6101b561021c36600461097b565b610443565b61013461022f366004610a03565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026990610a36565b80601f016020809104026020016040519081016040528092919081815260200182805461029590610a36565b80156102e25780601f106102b7576101008083540402835291602001916102e2565b820191906000526020600020905b8154815290600101906020018083116102c557829003601f168201915b5050505050905090565b6000336102fa8185856104c9565b60019150505b92915050565b6000336103148582856105ed565b61031f85858561067f565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102fa9082908690610364908790610a70565b6104c9565b6103738282610852565b5050565b60606004805461026990610a36565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104285760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61031f82868684036104c9565b6000336102fa81858561067f565b6005546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561049a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104be9190610a91565b506103738282610852565b6001600160a01b03831661052b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161041f565b6001600160a01b03821661058c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161041f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610679578181101561066c5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161041f565b61067984848484036104c9565b50505050565b6001600160a01b0383166106fb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161041f565b6001600160a01b03821661075d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161041f565b6001600160a01b038316600090815260208190526040902054818110156107ec5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161041f565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610679565b6001600160a01b0382166108a85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161041f565b80600260008282546108ba9190610a70565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b8181101561093e57858101830151858201604001528201610922565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461097657600080fd5b919050565b6000806040838503121561098e57600080fd5b6109978361095f565b946020939093013593505050565b6000806000606084860312156109ba57600080fd5b6109c38461095f565b92506109d16020850161095f565b9150604084013590509250925092565b6000602082840312156109f357600080fd5b6109fc8261095f565b9392505050565b60008060408385031215610a1657600080fd5b610a1f8361095f565b9150610a2d6020840161095f565b90509250929050565b600181811c90821680610a4a57607f821691505b602082108103610a6a57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561030057634e487b7160e01b600052601160045260246000fd5b600060208284031215610aa357600080fd5b815180151581146109fc57600080fdfea2646970667358221220a751c6f9c5e2ff5fb95a084f39920ac7e6d2cee62f1f7f1440368f3315c5122464736f6c63430008110033";
class StakedTestToken__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(_token, overrides) {
        return super.deploy(_token, overrides || {});
    }
    getDeployTransaction(_token, overrides) {
        return super.getDeployTransaction(_token, overrides || {});
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
StakedTestToken__factory.bytecode = _bytecode;
StakedTestToken__factory.abi = _abi;
exports.StakedTestToken__factory = StakedTestToken__factory;
//# sourceMappingURL=StakedTestToken__factory.js.map