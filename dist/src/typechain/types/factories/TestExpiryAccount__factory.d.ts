import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestExpiryAccount, TestExpiryAccountInterface } from "../TestExpiryAccount";
export declare class TestExpiryAccount__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(anEntryPoint: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestExpiryAccount>;
    getDeployTransaction(anEntryPoint: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestExpiryAccount;
    connect(signer: Signer): TestExpiryAccount__factory;
    static readonly bytecode = "0x60c06040523060805234801561001457600080fd5b506040516120a33803806120a383398101604081905261003391610044565b6001600160a01b031660a052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160a051611fbd6100e6600039600081816103a6015281816107af0152818161083001528181610b5701528181610dd601528181610e10015281816110c201526113280152600081816106160152818161069b015281816108c1015281816109460152610a300152611fbd6000f3fe60806040526004361061016d5760003560e01c80634f1ef286116100cb578063bc197c811161007f578063cf6dca5511610059578063cf6dca551461044e578063d087d2881461046e578063f23a6e611461048357600080fd5b8063bc197c81146103ea578063c399ec8814610419578063c4d66de81461042e57600080fd5b80638da5cb5b116100b05780638da5cb5b14610359578063b0d691fe14610397578063b61d27f6146103ca57600080fd5b80634f1ef2861461033157806352d1902d1461034457600080fd5b80633a871cdd116101225780633fb5a7a1116101075780633fb5a7a1146102d45780634a58db19146103095780634d44560d1461031157600080fd5b80633a871cdd1461025a5780633e4769511461028857600080fd5b8063150b7a0211610153578063150b7a02146101d557806318dfb3c71461021a5780633659cfe61461023a57600080fd5b806223de291461017957806301ffc9a7146101a057600080fd5b3661017457005b600080fd5b34801561018557600080fd5b5061019e6101943660046118fa565b5050505050505050565b005b3480156101ac57600080fd5b506101c06101bb3660046119ab565b6104b0565b60405190151581526020015b60405180910390f35b3480156101e157600080fd5b506102016101f03660046119d5565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016101cc565b34801561022657600080fd5b5061019e610235366004611a8d565b610502565b34801561024657600080fd5b5061019e610255366004611af9565b61060c565b34801561026657600080fd5b5061027a610275366004611b16565b610787565b6040519081526020016101cc565b34801561029457600080fd5b506102bd6102a3366004611af9565b60026020526000908152604090205465ffffffffffff1681565b60405165ffffffffffff90911681526020016101cc565b3480156102e057600080fd5b506102bd6102ef366004611af9565b60016020526000908152604090205465ffffffffffff1681565b61019e6107ad565b34801561031d57600080fd5b5061019e61032c366004611b6a565b610826565b61019e61033f366004611bac565b6108b7565b34801561035057600080fd5b5061027a610a23565b34801561036557600080fd5b5060005461037f906201000090046001600160a01b031681565b6040516001600160a01b0390911681526020016101cc565b3480156103a357600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061037f565b3480156103d657600080fd5b5061019e6103e5366004611c70565b610ae8565b3480156103f657600080fd5b50610201610405366004611cc0565b63bc197c8160e01b98975050505050505050565b34801561042557600080fd5b5061027a610b37565b34801561043a57600080fd5b5061019e610449366004611af9565b610bc8565b34801561045a57600080fd5b5061019e610469366004611d79565b610cfb565b34801561047a57600080fd5b5061027a610daf565b34801561048f57600080fd5b5061020161049e366004611dbe565b63f23a6e6160e01b9695505050505050565b60006001600160e01b03198216630a85bd0160e11b14806104e157506001600160e01b03198216630271189760e51b145b806104fc57506001600160e01b031982166301ffc9a760e01b145b92915050565b61050a610e05565b82811461055e5760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b83811015610605576105f385858381811061057e5761057e611e3a565b90506020020160208101906105939190611af9565b60008585858181106105a7576105a7611e3a565b90506020028101906105b99190611e50565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e9a92505050565b806105fd81611e97565b915050610561565b5050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106995760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610555565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106f47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b03161461075f5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610555565b61076881610f0a565b6040805160008082526020820190925261078491839190610f12565b50565b60006107916110b7565b61079b848461112f565b90506107a682611228565b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b15801561081257600080fd5b505af1158015610605573d6000803e3d6000fd5b61082e611275565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561089b57600080fd5b505af11580156108af573d6000803e3d6000fd5b505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036109445760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610555565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661099f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610a0a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610555565b610a1382610f0a565b610a1f82826001610f12565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ac35760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610555565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610af0610e05565b610b31848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e9a92505050565b50505050565b6040516370a0823160e01b81523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611ebe565b905090565b600054610100900460ff1615808015610be85750600054600160ff909116105b80610c025750303b158015610c02575060005460ff166001145b610c745760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610555565b6000805460ff191660011790558015610c97576000805461ff0019166101001790555b610ca0826112df565b610cb282600065ffffffffffff610cfb565b8015610a1f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b610d03611275565b8165ffffffffffff168165ffffffffffff1611610d625760405162461bcd60e51b815260206004820152601160248201527f77726f6e6720756e74696c2f61667465720000000000000000000000000000006044820152606401610555565b6001600160a01b03929092166000908152600160209081526040808320805465ffffffffffff95861665ffffffffffff199182161790915560029092529091208054929093169116179055565b604051631aab3f0d60e11b8152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610b82565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610e4c57506000546201000090046001600160a01b031633145b610e985760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152606401610555565b565b600080846001600160a01b03168484604051610eb69190611efb565b60006040518083038185875af1925050503d8060008114610ef3576040519150601f19603f3d011682016040523d82523d6000602084013e610ef8565b606091505b50915091508161060557805160208201fd5b610784611275565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610f4a57610f4583611371565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610fa4575060408051601f3d908101601f19168201909252610fa191810190611ebe565b60015b6110165760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610555565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146110ab5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610555565b50610f45838383611447565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e985760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610555565b600080611189836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905060006111db61119e610140870187611e50565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869392505061146c9050565b6001600160a01b03811660009081526002602090815260408083205460019092529091205491925065ffffffffffff9081169116811561121c818484611490565b98975050505050505050565b801561078457604051600090339060001990849084818181858888f193505050503d8060008114610605576040519150601f19603f3d011682016040523d82523d6000602084013e610605565b6000546201000090046001600160a01b031633148061129357503330145b610e985760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610555565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16620100006001600160a01b038481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b6001600160a01b0381163b6113ee5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610555565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b611450836114c8565b60008251118061145d5750805b15610f4557610b318383611508565b600080600061147b858561152d565b9150915061148881611572565b509392505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b856114b85760006114bb565b60015b60ff161717949350505050565b6114d181611371565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606107a68383604051806060016040528060278152602001611f61602791396116bc565b60008082516041036115635760208301516040840151606085015160001a61155787828585611734565b9450945050505061156b565b506000905060025b9250929050565b600081600481111561158657611586611f17565b0361158e5750565b60018160048111156115a2576115a2611f17565b036115ef5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610555565b600281600481111561160357611603611f17565b036116505760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610555565b600381600481111561166457611664611f17565b036107845760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610555565b6060600080856001600160a01b0316856040516116d99190611efb565b600060405180830381855af49150503d8060008114611714576040519150601f19603f3d011682016040523d82523d6000602084013e611719565b606091505b509150915061172a868383876117f8565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561176b57506000905060036117ef565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156117bf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166117e8576000600192509250506117ef565b9150600090505b94509492505050565b60608315611867578251600003611860576001600160a01b0385163b6118605760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610555565b5081611871565b6118718383611879565b949350505050565b8151156118895781518083602001fd5b8060405162461bcd60e51b81526004016105559190611f2d565b6001600160a01b038116811461078457600080fd5b60008083601f8401126118ca57600080fd5b50813567ffffffffffffffff8111156118e257600080fd5b60208301915083602082850101111561156b57600080fd5b60008060008060008060008060c0898b03121561191657600080fd5b8835611921816118a3565b97506020890135611931816118a3565b96506040890135611941816118a3565b955060608901359450608089013567ffffffffffffffff8082111561196557600080fd5b6119718c838d016118b8565b909650945060a08b013591508082111561198a57600080fd5b506119978b828c016118b8565b999c989b5096995094979396929594505050565b6000602082840312156119bd57600080fd5b81356001600160e01b0319811681146107a657600080fd5b6000806000806000608086880312156119ed57600080fd5b85356119f8816118a3565b94506020860135611a08816118a3565b935060408601359250606086013567ffffffffffffffff811115611a2b57600080fd5b611a37888289016118b8565b969995985093965092949392505050565b60008083601f840112611a5a57600080fd5b50813567ffffffffffffffff811115611a7257600080fd5b6020830191508360208260051b850101111561156b57600080fd5b60008060008060408587031215611aa357600080fd5b843567ffffffffffffffff80821115611abb57600080fd5b611ac788838901611a48565b90965094506020870135915080821115611ae057600080fd5b50611aed87828801611a48565b95989497509550505050565b600060208284031215611b0b57600080fd5b81356107a6816118a3565b600080600060608486031215611b2b57600080fd5b833567ffffffffffffffff811115611b4257600080fd5b84016101608187031215611b5557600080fd5b95602085013595506040909401359392505050565b60008060408385031215611b7d57600080fd5b8235611b88816118a3565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611bbf57600080fd5b8235611bca816118a3565b9150602083013567ffffffffffffffff80821115611be757600080fd5b818501915085601f830112611bfb57600080fd5b813581811115611c0d57611c0d611b96565b604051601f8201601f19908116603f01168101908382118183101715611c3557611c35611b96565b81604052828152886020848701011115611c4e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060008060608587031215611c8657600080fd5b8435611c91816118a3565b935060208501359250604085013567ffffffffffffffff811115611cb457600080fd5b611aed878288016118b8565b60008060008060008060008060a0898b031215611cdc57600080fd5b8835611ce7816118a3565b97506020890135611cf7816118a3565b9650604089013567ffffffffffffffff80821115611d1457600080fd5b611d208c838d01611a48565b909850965060608b0135915080821115611d3957600080fd5b611d458c838d01611a48565b909650945060808b013591508082111561198a57600080fd5b803565ffffffffffff81168114611d7457600080fd5b919050565b600080600060608486031215611d8e57600080fd5b8335611d99816118a3565b9250611da760208501611d5e565b9150611db560408501611d5e565b90509250925092565b60008060008060008060a08789031215611dd757600080fd5b8635611de2816118a3565b95506020870135611df2816118a3565b94506040870135935060608701359250608087013567ffffffffffffffff811115611e1c57600080fd5b611e2889828a016118b8565b979a9699509497509295939492505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611e6757600080fd5b83018035915067ffffffffffffffff821115611e8257600080fd5b60200191503681900382131561156b57600080fd5b600060018201611eb757634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215611ed057600080fd5b5051919050565b60005b83811015611ef2578181015183820152602001611eda565b50506000910152565b60008251611f0d818460208701611ed7565b9190910192915050565b634e487b7160e01b600052602160045260246000fd5b6020815260008251806020840152611f4c816040850160208701611ed7565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ff23598baf5782969c859beb091f2b5352bb48bf4146a56227706d47fb07050c64736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): TestExpiryAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestExpiryAccount;
}
