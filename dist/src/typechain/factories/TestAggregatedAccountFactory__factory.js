"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAggregatedAccountFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "anEntryPoint",
                type: "address",
            },
            {
                internalType: "address",
                name: "anAggregator",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "accountImplementation",
        outputs: [
            {
                internalType: "contract TestAggregatedAccount",
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
                internalType: "uint256",
                name: "salt",
                type: "uint256",
            },
        ],
        name: "createAccount",
        outputs: [
            {
                internalType: "contract TestAggregatedAccount",
                name: "ret",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
            },
        ],
        name: "getAddress",
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
];
const _bytecode = "0x60a060405234801561001057600080fd5b5060405161287a38038061287a83398101604081905261002f916100aa565b818160405161003d90610085565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100e49050565b611c8580610bf583390190565b6001600160a01b03811681146100a757600080fd5b50565b600080604083850312156100bd57600080fd5b82516100c881610092565b60208401519092506100d981610092565b809150509250929050565b608051610aea61010b60003960008181604b0152818160ed01526101cf0152610aea6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100895780638cb84e181461009c575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006d6100973660046102bf565b6100af565b61006d6100aa3660046102bf565b610190565b6000806100bc8484610190565b90506001600160a01b0381163b80156100d75750905061018a565b6040516001600160a01b038616602482015284907f00000000000000000000000000000000000000000000000000000000000000009060440160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663189acdbd60e31b17905251610159906102b2565b61016492919061031b565b8190604051809103906000f5905080158015610184573d6000803e3d6000fd5b50925050505b92915050565b60006102798260001b604051806020016101a9906102b2565b601f1982820381018352601f9091011660408190526001600160a01b03871660248201527f00000000000000000000000000000000000000000000000000000000000000009060440160408051601f19818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663189acdbd60e31b17905290516102409392910161031b565b60408051601f198184030181529082905261025e929160200161035e565b60405160208183030381529060405280519060200120610280565b9392505050565b60006102798383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107278061038e83390190565b600080604083850312156102d257600080fd5b82356001600160a01b03811681146102e957600080fd5b946020939093013593505050565b60005b838110156103125781810151838201526020016102fa565b50506000910152565b6001600160a01b038316815260406020820152600082518060408401526103498160608501602087016102f7565b601f01601f1916919091016060019392505050565b600083516103708184602088016102f7565b8351908301906103848183602088016102f7565b0194935050505056fe608060405260405161072738038061072783398101604081905261002291610319565b61002e82826000610035565b5050610436565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d08383604051806060016040528060278152602001610700602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103e7565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b81526004016101489190610403565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b50506000910152565b6000806040838503121561032c57600080fd5b82516001600160a01b038116811461034357600080fd5b60208401519092506001600160401b038082111561036057600080fd5b818501915085601f83011261037457600080fd5b815181811115610386576103866102df565b604051601f8201601f19908116603f011681019083821181831017156103ae576103ae6102df565b816040528281528860208487010111156103c757600080fd5b6103d88360208301602088016102f5565b80955050505050509250929050565b600082516103f98184602087016102f5565b9190910192915050565b60208152600082518060208401526104228160408501602087016102f5565b601f01601f19169190910160400192915050565b6102bb806104456000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025f602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100e0919061020f565b600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101318683838761013b565b9695505050505050565b606083156101af5782516000036101a8576001600160a01b0385163b6101a85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101b9565b6101b983836101c1565b949350505050565b8151156101d15781518083602001fd5b8060405162461bcd60e51b815260040161019f919061022b565b60005b838110156102065781810151838201526020016101ee565b50506000910152565b600082516102218184602087016101eb565b9190910192915050565b602081526000825180602084015261024a8160408501602087016101eb565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ce3786fbb0fc5f1c990d2afbb60230e99e7348697398d5b8787d3c54da8557b364736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201c34cdfeda1424c38ddf08ead281b91be422e0dd63574fbd8ca9bbbccbc265ab64736f6c6343000811003360e0604052306080523480156200001557600080fd5b5060405162001c8538038062001c8583398101604081905262000038916200013f565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200017e565b600054610100900460ff1615620000d15760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000124576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200013c57600080fd5b50565b600080604083850312156200015357600080fd5b8251620001608162000126565b6020840151909250620001738162000126565b809150509250929050565b60805160a05160c051611a836200020260003960008181610226015261071301526000818161033301528181610756015281816107d701528181610afe01528181610cb801528181610cf201528181610fa401526111110152600081816105830152818161060801528181610868015281816108ed01526109d70152611a836000f3fe6080604052600436106101475760003560e01c80634f1ef286116100c0578063bc197c8111610074578063c4d66de811610059578063c4d66de8146103bb578063d087d288146103db578063f23a6e61146103f057600080fd5b8063bc197c8114610377578063c399ec88146103a657600080fd5b80638da5cb5b116100a55780638da5cb5b146102fe578063b0d691fe14610324578063b61d27f61461035757600080fd5b80634f1ef286146102d657806352d1902d146102e957600080fd5b8063245a7bfc116101175780633a871cdd116100fc5780633a871cdd146102805780634a58db19146102ae5780634d44560d146102b657600080fd5b8063245a7bfc146102145780633659cfe61461026057600080fd5b806223de291461015357806301ffc9a71461017a578063150b7a02146101af57806318dfb3c7146101f457600080fd5b3661014e57005b600080fd5b34801561015f57600080fd5b5061017861016e366004611436565b5050505050505050565b005b34801561018657600080fd5b5061019a6101953660046114e7565b61041d565b60405190151581526020015b60405180910390f35b3480156101bb57600080fd5b506101db6101ca366004611511565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016101a6565b34801561020057600080fd5b5061017861020f3660046115c9565b61046f565b34801561022057600080fd5b506102487f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101a6565b34801561026c57600080fd5b5061017861027b366004611635565b610579565b34801561028c57600080fd5b506102a061029b366004611652565b6106f4565b6040519081526020016101a6565b610178610754565b3480156102c257600080fd5b506101786102d13660046116a6565b6107cd565b6101786102e43660046116e8565b61085e565b3480156102f557600080fd5b506102a06109ca565b34801561030a57600080fd5b50600054610248906201000090046001600160a01b031681565b34801561033057600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610248565b34801561036357600080fd5b506101786103723660046117ac565b610a8f565b34801561038357600080fd5b506101db6103923660046117fc565b63bc197c8160e01b98975050505050505050565b3480156103b257600080fd5b506102a0610ade565b3480156103c757600080fd5b506101786103d6366004611635565b610b6f565b3480156103e757600080fd5b506102a0610c91565b3480156103fc57600080fd5b506101db61040b36600461189a565b63f23a6e6160e01b9695505050505050565b60006001600160e01b03198216630a85bd0160e11b148061044e57506001600160e01b03198216630271189760e51b145b8061046957506001600160e01b031982166301ffc9a760e01b145b92915050565b610477610ce7565b8281146104cb5760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610572576105608585838181106104eb576104eb611916565b90506020020160208101906105009190611635565b600085858581811061051457610514611916565b9050602002810190610526919061192c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d7c92505050565b8061056a81611973565b9150506104ce565b5050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106065760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016104c2565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106617f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146106cc5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016104c2565b6106d581610dec565b604080516000808252602082019092526106f191839190610df4565b50565b60006106fe610f99565b50604080516060810182526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016808252600060208301819052919092015261074d82611011565b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b1580156107b957600080fd5b505af1158015610572573d6000803e3d6000fd5b6107d561105e565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561084257600080fd5b505af1158015610856573d6000803e3d6000fd5b505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036108eb5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016104c2565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109467f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109b15760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016104c2565b6109ba82610dec565b6109c682826001610df4565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a6a5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016104c2565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610a97610ce7565b610ad8848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d7c92505050565b50505050565b6040516370a0823160e01b81523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610b46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6a919061199a565b905090565b600054610100900460ff1615808015610b8f5750600054600160ff909116105b80610ba95750303b158015610ba9575060005460ff166001145b610c1b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016104c2565b6000805460ff191660011790558015610c3e576000805461ff0019166101001790555b610c4860006110c8565b80156109c6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b604051631aab3f0d60e11b8152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610b29565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610d2e57506000546201000090046001600160a01b031633145b610d7a5760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016104c2565b565b600080846001600160a01b03168484604051610d9891906119d7565b60006040518083038185875af1925050503d8060008114610dd5576040519150601f19603f3d011682016040523d82523d6000602084013e610dda565b606091505b50915091508161057257805160208201fd5b6106f161105e565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610e2c57610e278361115a565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610e86575060408051601f3d908101601f19168201909252610e839181019061199a565b60015b610ef85760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016104c2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610f8d5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016104c2565b50610e27838383611230565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d7a5760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016104c2565b80156106f157604051600090339060001990849084818181858888f193505050503d8060008114610572576040519150601f19603f3d011682016040523d82523d6000602084013e610572565b6000546201000090046001600160a01b031633148061107c57503330145b610d7a5760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016104c2565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16620100006001600160a01b038481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b6001600160a01b0381163b6111d75760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016104c2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b61123983611255565b6000825111806112465750805b15610e2757610ad88383611295565b61125e8161115a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061074d8383604051806060016040528060278152602001611a27602791396060600080856001600160a01b0316856040516112d291906119d7565b600060405180830381855af49150503d806000811461130d576040519150601f19603f3d011682016040523d82523d6000602084013e611312565b606091505b50915091506113238683838761132d565b9695505050505050565b6060831561139c578251600003611395576001600160a01b0385163b6113955760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c2565b50816113a6565b6113a683836113ae565b949350505050565b8151156113be5781518083602001fd5b8060405162461bcd60e51b81526004016104c291906119f3565b6001600160a01b03811681146106f157600080fd5b60008083601f8401126113ff57600080fd5b50813567ffffffffffffffff81111561141757600080fd5b60208301915083602082850101111561142f57600080fd5b9250929050565b60008060008060008060008060c0898b03121561145257600080fd5b883561145d816113d8565b9750602089013561146d816113d8565b9650604089013561147d816113d8565b955060608901359450608089013567ffffffffffffffff808211156114a157600080fd5b6114ad8c838d016113ed565b909650945060a08b01359150808211156114c657600080fd5b506114d38b828c016113ed565b999c989b5096995094979396929594505050565b6000602082840312156114f957600080fd5b81356001600160e01b03198116811461074d57600080fd5b60008060008060006080868803121561152957600080fd5b8535611534816113d8565b94506020860135611544816113d8565b935060408601359250606086013567ffffffffffffffff81111561156757600080fd5b611573888289016113ed565b969995985093965092949392505050565b60008083601f84011261159657600080fd5b50813567ffffffffffffffff8111156115ae57600080fd5b6020830191508360208260051b850101111561142f57600080fd5b600080600080604085870312156115df57600080fd5b843567ffffffffffffffff808211156115f757600080fd5b61160388838901611584565b9096509450602087013591508082111561161c57600080fd5b5061162987828801611584565b95989497509550505050565b60006020828403121561164757600080fd5b813561074d816113d8565b60008060006060848603121561166757600080fd5b833567ffffffffffffffff81111561167e57600080fd5b8401610160818703121561169157600080fd5b95602085013595506040909401359392505050565b600080604083850312156116b957600080fd5b82356116c4816113d8565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156116fb57600080fd5b8235611706816113d8565b9150602083013567ffffffffffffffff8082111561172357600080fd5b818501915085601f83011261173757600080fd5b813581811115611749576117496116d2565b604051601f8201601f19908116603f01168101908382118183101715611771576117716116d2565b8160405282815288602084870101111561178a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600080606085870312156117c257600080fd5b84356117cd816113d8565b935060208501359250604085013567ffffffffffffffff8111156117f057600080fd5b611629878288016113ed565b60008060008060008060008060a0898b03121561181857600080fd5b8835611823816113d8565b97506020890135611833816113d8565b9650604089013567ffffffffffffffff8082111561185057600080fd5b61185c8c838d01611584565b909850965060608b013591508082111561187557600080fd5b6118818c838d01611584565b909650945060808b01359150808211156114c657600080fd5b60008060008060008060a087890312156118b357600080fd5b86356118be816113d8565b955060208701356118ce816113d8565b94506040870135935060608701359250608087013567ffffffffffffffff8111156118f857600080fd5b61190489828a016113ed565b979a9699509497509295939492505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261194357600080fd5b83018035915067ffffffffffffffff82111561195e57600080fd5b60200191503681900382131561142f57600080fd5b60006001820161199357634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156119ac57600080fd5b5051919050565b60005b838110156119ce5781810151838201526020016119b6565b50506000910152565b600082516119e98184602087016119b3565b9190910192915050565b6020815260008251806020840152611a128160408501602087016119b3565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205cad6c9ba15b7853236e0d19b613478f2ac8f234a18e6a5284d55b7483bf69fc64736f6c63430008110033";
class TestAggregatedAccountFactory__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(anEntryPoint, anAggregator, overrides) {
        return super.deploy(anEntryPoint, anAggregator, overrides || {});
    }
    getDeployTransaction(anEntryPoint, anAggregator, overrides) {
        return super.getDeployTransaction(anEntryPoint, anAggregator, overrides || {});
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
TestAggregatedAccountFactory__factory.bytecode = _bytecode;
TestAggregatedAccountFactory__factory.abi = _abi;
exports.TestAggregatedAccountFactory__factory = TestAggregatedAccountFactory__factory;
//# sourceMappingURL=TestAggregatedAccountFactory__factory.js.map