/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VerifyingSingletonPaymaster,
  VerifyingSingletonPaymasterInterface,
} from "../VerifyingSingletonPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
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
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerIsNotAnEntryPoint",
    type: "error",
  },
  {
    inputs: [],
    name: "CanNotWithdrawToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositCanNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "EntryPointCannotBeZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountRequired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sigLength",
        type: "uint256",
      },
    ],
    name: "InvalidPaymasterSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "PaymasterIdCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "VerifyingSignerCannotBeZero",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_oldValue",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "EPGasOverheadChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_paymasterId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_charge",
        type: "uint256",
      },
    ],
    name: "GasBalanceDeducted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_paymasterId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "GasDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_paymasterId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "GasWithdrawn",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldSigner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newSigner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_actor",
        type: "address",
      },
    ],
    name: "VerifyingSignerChanged",
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
    inputs: [
      {
        internalType: "address",
        name: "paymasterId",
        type: "address",
      },
    ],
    name: "depositFor",
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
        name: "paymasterId",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
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
        internalType: "address",
        name: "paymasterId",
        type: "address",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "paymasterIdBalances",
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
        name: "_newVerifyingSigner",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setUnaccountedEPGasOverhead",
    outputs: [],
    stateMutability: "nonpayable",
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

const _bytecode =
  "0x60a0604052604051620018f4380380620018f483398101604081905262000026916200011b565b82826200003333620000b2565b6001600160a01b0381166080526200004b82620000b2565b5050600180556001600160a01b038216620000795760405163091748f960e21b815260040160405180910390fd5b6001600160a01b038116620000a157604051638fc6a93160e01b815260040160405180910390fd5b60045550506125806002556200016f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200011857600080fd5b50565b6000806000606084860312156200013157600080fd5b83516200013e8162000102565b6020850151909350620001518162000102565b6040850151909250620001648162000102565b809150509250925092565b608051611738620001bc600039600081816102a1015281816103db015281816105f8015281816107e701528181610893015281816109270152818161099e0152610c7601526117386000f3fe6080604052600436106101445760003560e01c8063aa67c919116100c0578063d0e30db011610074578063f2fde38b11610059578063f2fde38b14610335578063f465c77e14610355578063f8b2cb4f1461038357600080fd5b8063d0e30db01461030d578063deeb38741461031557600080fd5b8063bb9fe6bf116100a5578063bb9fe6bf146102c3578063c23a5cea146102d8578063c399ec88146102f857600080fd5b8063aa67c9191461027c578063b0d691fe1461028f57600080fd5b80636c19e783116101175780638da5cb5b116100fc5780638da5cb5b14610211578063a40a7ddc1461022f578063a9a234091461025c57600080fd5b80636c19e783146101e9578063715018a6146101fc57600080fd5b80630396cb60146101495780631f67de801461015e578063205c28781461019157806323d9ac9b146101b1575b600080fd5b61015c6101573660046112bd565b6103b9565b005b34801561016a57600080fd5b5061017e610179366004611311565b610444565b6040519081526020015b60405180910390f35b34801561019d57600080fd5b5061015c6101ac366004611363565b610535565b3480156101bd57600080fd5b506004546101d1906001600160a01b031681565b6040516001600160a01b039091168152602001610188565b61015c6101f736600461138f565b61069a565b34801561020857600080fd5b5061015c610712565b34801561021d57600080fd5b506000546001600160a01b03166101d1565b34801561023b57600080fd5b5061017e61024a36600461138f565b60036020526000908152604090205481565b34801561026857600080fd5b5061015c6102773660046113ac565b610726565b61015c61028a36600461138f565b610740565b34801561029b57600080fd5b506101d17f000000000000000000000000000000000000000000000000000000000000000081565b3480156102cf57600080fd5b5061015c610889565b3480156102e457600080fd5b5061015c6102f336600461138f565b610900565b34801561030457600080fd5b5061017e610986565b61015c610a16565b34801561032157600080fd5b5061015c61033036600461143b565b610a5e565b34801561034157600080fd5b5061015c61035036600461138f565b610a9f565b34801561036157600080fd5b50610375610370366004611454565b610b2c565b6040516101889291906114a2565b34801561038f57600080fd5b5061017e61039e36600461138f565b6001600160a01b031660009081526003602052604090205490565b6103c1610b50565b604051621cb65b60e51b815263ffffffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630396cb609034906024016000604051808303818588803b15801561042857600080fd5b505af115801561043c573d6000803e3d6000fd5b505050505050565b6000823580602085013561045b60408701876114f7565b60405161046992919061153e565b60405190819003902061047f60608801886114f7565b60405161048d92919061153e565b604080519182900382206001600160a01b0395861660208401529082019390935260608101919091526080808201929092529086013560a08083019190915286013560c08083019190915286013560e0808301919091528601356101008083019190915286013561012082015246610140820152306101608201529084166101808201526101a001604051602081830303815290604052805190602001209150505b92915050565b61053d610baa565b6001600160a01b038216610564576040516392bc9df360e01b815260040160405180910390fd5b33600090815260036020526040902054808211156105a45760405163cf47918160e01b815260048101839052602481018290526044015b60405180910390fd5b336000908152600360205260409020546105bf908390611564565b3360009081526003602052604090819020919091555163040b850f60e31b81526001600160a01b038481166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b15801561063c57600080fd5b505af1158015610650573d6000803e3d6000fd5b50506040518492506001600160a01b038616915033907f926a144b6fffc1d73f115b81af7ec66a7c12aed0ff73197c39a683753fc1d92590600090a45061069660018055565b5050565b6106a2610b50565b6001600160a01b0381166106c957604051638fc6a93160e01b815260040160405180910390fd5b60048054908290556040516001600160a01b039182169133919084169083907fe1f62c0e6d7bb6d470828565415bf2e87dbfea50e52d2d753788b529bd0c6d6290600090a45050565b61071a610b50565b6107246000610c03565b565b61072e610c6b565b61073a84848484610cb6565b50505050565b610748610baa565b6001600160a01b03811661076f576040516355cd1c6560e11b815260040160405180910390fd5b34600003610790576040516333a6177160e11b815260040160405180910390fd5b6001600160a01b0381166000908152600360205260409020546107b4903490611577565b6001600160a01b038281166000908152600360205260409081902092909255905163b760faf960e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000009091169063b760faf99034906024016000604051808303818588803b15801561082e57600080fd5b505af1158015610842573d6000803e3d6000fd5b50506040513493506001600160a01b03851692507f1dbbf474736d6415d6a265fabee708fe6e988f6fd0c9d870ded36cab380898dd9150600090a361088660018055565b50565b610891610b50565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156108ec57600080fd5b505af115801561073a573d6000803e3d6000fd5b610908610b50565b60405163611d2e7560e11b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b15801561096b57600080fd5b505af115801561097f573d6000803e3d6000fd5b5050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156109ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a11919061158a565b905090565b60405162461bcd60e51b815260206004820152601760248201527f75736572204465706f736974466f7220696e7374656164000000000000000000604482015260640161059b565b610a66610b50565b6002805490829055604051829082907f0b2f957fc0a9306310238ef9a212935360e98fe3f8bc525f4cb69d38b1efa85990600090a35050565b610aa7610b50565b6001600160a01b038116610b235760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161059b565b61088681610c03565b60606000610b38610c6b565b610b43858585610d90565b915091505b935093915050565b6000546001600160a01b031633146107245760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161059b565b600260015403610bfc5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161059b565b6002600155565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461072457604051635dac3db760e11b815233600482015260240161059b565b6000610cf784848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f2292505050565b805160208201516002549293509091600091610d12916115a3565b610d1c9085611577565b6001600160a01b038316600090815260036020526040902054909150610d43908290611564565b6001600160a01b03831660008181526003602052604080822093909355915183927f5dc1c754041954fe976773fa441397a7928c7127a1c83904214a7d256339900791a350505050505050565b6060600080610d9e86610f71565b90506000610db0878360000151610444565b604083015190915060418114610ddc5760405163e4b52b1760e01b81526004810182905260240161059b565b610e418360200151610e3b846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90610fff565b6004546001600160a01b03908116911614610e75576001604051806020016040528060008152509094509450505050610b48565b82516001600160a01b0316600090815260036020526040902054861115610ed55782516001600160a01b03166000908152600360205260409081902054905163cf47918160e01b815261059b918891600401918252602082015260400190565b610f1383610ee28a611023565b9051604080516001600160a01b03909216602083015281810192909252815180820383018152606090910190915290565b98600098509650505050505050565b604080518082019091526000808252602082015260008083806020019051810190610f4d91906115ba565b604080518082019091526001600160a01b0390921682526020820152949350505050565b610f9e604051806060016040528060006001600160a01b0316815260200160608152602001600081525090565b366000610faf6101208501856114f7565b9092509050600080610fc483601481876115e8565b810190610fd19190611628565b604080516060810182526001600160a01b039093168352602083018290529051908201529695505050505050565b600080600061100e8585611052565b9150915061101b81611097565b509392505050565b600060e082013561010083013580820361103e575092915050565b61104a824883016111e1565b949350505050565b60008082516041036110885760208301516040840151606085015160001a61107c878285856111f9565b94509450505050611090565b506000905060025b9250929050565b60008160048111156110ab576110ab6116ec565b036110b35750565b60018160048111156110c7576110c76116ec565b036111145760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161059b565b6002816004811115611128576111286116ec565b036111755760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161059b565b6003816004811115611189576111896116ec565b036108865760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161059b565b60008183106111f057816111f2565b825b9392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561123057506000905060036112b4565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611284573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112ad576000600192509250506112b4565b9150600090505b94509492505050565b6000602082840312156112cf57600080fd5b813563ffffffff811681146111f257600080fd5b600061016082840312156112f657600080fd5b50919050565b6001600160a01b038116811461088657600080fd5b6000806040838503121561132457600080fd5b823567ffffffffffffffff81111561133b57600080fd5b611347858286016112e3565b9250506020830135611358816112fc565b809150509250929050565b6000806040838503121561137657600080fd5b8235611381816112fc565b946020939093013593505050565b6000602082840312156113a157600080fd5b81356111f2816112fc565b600080600080606085870312156113c257600080fd5b8435600381106113d157600080fd5b9350602085013567ffffffffffffffff808211156113ee57600080fd5b818701915087601f83011261140257600080fd5b81358181111561141157600080fd5b88602082850101111561142357600080fd5b95986020929092019750949560400135945092505050565b60006020828403121561144d57600080fd5b5035919050565b60008060006060848603121561146957600080fd5b833567ffffffffffffffff81111561148057600080fd5b61148c868287016112e3565b9660208601359650604090950135949350505050565b604081526000835180604084015260005b818110156114d057602081870181015160608684010152016114b3565b506000606082850101526060601f19601f8301168401019150508260208301529392505050565b6000808335601e1984360301811261150e57600080fd5b83018035915067ffffffffffffffff82111561152957600080fd5b60200191503681900382131561109057600080fd5b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561052f5761052f61154e565b8082018082111561052f5761052f61154e565b60006020828403121561159c57600080fd5b5051919050565b808202811582820484141761052f5761052f61154e565b600080604083850312156115cd57600080fd5b82516115d8816112fc565b6020939093015192949293505050565b600080858511156115f857600080fd5b8386111561160557600080fd5b5050820193919092039150565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561163b57600080fd5b8235611646816112fc565b9150602083013567ffffffffffffffff8082111561166357600080fd5b818501915085601f83011261167757600080fd5b81358181111561168957611689611612565b604051601f8201601f19908116603f011681019083821181831017156116b1576116b1611612565b816040528281528860208487010111156116ca57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220ca09ed175d481bdae402ad312608b55d8e9b4ff42a4f5750623757c9e714b70e64736f6c63430008110033";

export class VerifyingSingletonPaymaster__factory extends ContractFactory {
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
    _owner: string,
    _entryPoint: string,
    _verifyingSigner: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<VerifyingSingletonPaymaster> {
    return super.deploy(
      _owner,
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<VerifyingSingletonPaymaster>;
  }
  getDeployTransaction(
    _owner: string,
    _entryPoint: string,
    _verifyingSigner: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  attach(address: string): VerifyingSingletonPaymaster {
    return super.attach(address) as VerifyingSingletonPaymaster;
  }
  connect(signer: Signer): VerifyingSingletonPaymaster__factory {
    return super.connect(signer) as VerifyingSingletonPaymaster__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingSingletonPaymasterInterface {
    return new utils.Interface(_abi) as VerifyingSingletonPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyingSingletonPaymaster {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VerifyingSingletonPaymaster;
  }
}
