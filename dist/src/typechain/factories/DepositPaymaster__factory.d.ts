import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DepositPaymaster, DepositPaymasterInterface } from "../DepositPaymaster";
export declare class DepositPaymaster__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_entryPoint: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DepositPaymaster>;
    getDeployTransaction(_entryPoint: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DepositPaymaster;
    connect(signer: Signer): DepositPaymaster__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001a0c38038062001a0c833981016040819052610031916100b4565b8061003b33610064565b6001600160a01b031660805261005e336000908152600360205260409020439055565b506100e4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100c657600080fd5b81516001600160a01b03811681146100dd57600080fd5b9392505050565b6080516118db620001316000396000818161037f015281816104dd0152818161057401528181610782015281816108160152818161088d01528181610a050152610c5f01526118db6000f3fe6080604052600436106101755760003560e01c8063addd5099116100cb578063c399ec881161007f578063d0e30db011610059578063d0e30db014610465578063f2fde38b1461046d578063f465c77e1461048d57600080fd5b8063c399ec881461040e578063cc9c837c14610423578063cd8f80c21461044357600080fd5b8063bb9fe6bf116100b0578063bb9fe6bf146103a1578063c23a5cea146103b6578063c23f001f146103d657600080fd5b8063addd509914610337578063b0d691fe1461036d57600080fd5b80635476bd721161012d5780638da5cb5b116101075780638da5cb5b146102c15780639ed0fb68146102f3578063a9a234091461031757600080fd5b80635476bd7214610276578063715018a614610296578063796d4371146102ab57600080fd5b8063382edd9e1161015e578063382edd9e146101af578063493b0170146101cf5780634a6f84cf1461023b57600080fd5b80630396cb601461017a578063205c28781461018f575b600080fd5b61018d61018836600461145f565b6104bb565b005b34801561019b57600080fd5b5061018d6101aa36600461149a565b610546565b3480156101bb57600080fd5b5061018d6101ca3660046114c6565b6105b8565b3480156101db57600080fd5b506102216101ea366004611507565b6001600160a01b03918216600090815260026020908152604080832093909416825291825282812054600390925291909120549091565b604080519283526020830191909152015b60405180910390f35b34801561024757600080fd5b50610268610256366004611540565b60036020526000908152604090205481565b604051908152602001610232565b34801561028257600080fd5b5061018d610291366004611507565b61069f565b3480156102a257600080fd5b5061018d61074a565b3480156102b757600080fd5b506102686188b881565b3480156102cd57600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610232565b3480156102ff57600080fd5b5061018d336000908152600360205260409020439055565b34801561032357600080fd5b5061018d61033236600461155d565b61075e565b34801561034357600080fd5b506102db610352366004611540565b6001602052600090815260409020546001600160a01b031681565b34801561037957600080fd5b506102db7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103ad57600080fd5b5061018d610778565b3480156103c257600080fd5b5061018d6103d1366004611540565b6107ef565b3480156103e257600080fd5b506102686103f1366004611507565b600260209081526000928352604080842090915290825290205481565b34801561041a57600080fd5b50610268610875565b34801561042f57600080fd5b5061018d61043e3660046114c6565b610905565b34801561044f57600080fd5b5061018d33600090815260036020526040812055565b61018d6109f0565b34801561047957600080fd5b5061018d610488366004611540565b610a52565b34801561049957600080fd5b506104ad6104a83660046115ec565b610ae2565b604051610232929190611690565b6104c3610b05565b604051621cb65b60e51b815263ffffffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630396cb609034906024016000604051808303818588803b15801561052a57600080fd5b505af115801561053e573d6000803e3d6000fd5b505050505050565b61054e610b05565b60405163040b850f60e31b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b15801561052a57600080fd5b6105cd6001600160a01b038416333084610b5f565b6001600160a01b03838116600090815260016020526040902054166106395760405162461bcd60e51b815260206004820152601160248201527f756e737570706f7274656420746f6b656e00000000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038084166000908152600260209081526040808320938616835292905290812080548392906106709084906116c8565b90915550506001600160a01b038216330361069a5761069a33600090815260036020526040812055565b505050565b6106a7610b05565b6001600160a01b03828116600090815260016020526040902054161561070f5760405162461bcd60e51b815260206004820152601160248201527f546f6b656e20616c7265616479207365740000000000000000000000000000006044820152606401610630565b6001600160a01b039182166000908152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b610752610b05565b61075c6000610bf7565b565b610766610c54565b61077284848484610ccc565b50505050565b610780610b05565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156107db57600080fd5b505af1158015610772573d6000803e3d6000fd5b6107f7610b05565b60405163611d2e7560e11b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b15801561085a57600080fd5b505af115801561086e573d6000803e3d6000fd5b5050505050565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156108dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090091906116db565b905090565b336000908152600360205260409020541580159061093157503360009081526003602052604090205443115b6109a35760405162461bcd60e51b815260206004820152602960248201527f4465706f7369745061796d61737465723a206d75737420756e6c6f636b546f6b60448201527f656e4465706f73697400000000000000000000000000000000000000000000006064820152608401610630565b6001600160a01b0383166000908152600260209081526040808320338452909152812080548392906109d69084906116f4565b9091555061069a90506001600160a01b0384168383610df6565b60405163b760faf960e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b760faf99034906024016000604051808303818588803b15801561085a57600080fd5b610a5a610b05565b6001600160a01b038116610ad65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610630565b610adf81610bf7565b50565b60606000610aee610c54565b610af9858585610e26565b91509150935093915050565b6000546001600160a01b0316331461075c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610630565b6040516001600160a01b03808516602483015283166044820152606481018290526107729085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526110ab565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075c5760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e7400000000000000000000006044820152606401610630565b600080808080610cde87890189611707565b9450945094509450945060008183856188b8610cfa9190611758565b610d04908a6116c8565b610d0e9190611758565b610d18919061176f565b905060028a6002811115610d2e57610d2e611791565b14610d4d57610d486001600160a01b038616873084610b5f565b610d8a565b6001600160a01b038086166000908152600260209081526040808320938a1683529290529081208054839290610d849084906116f4565b90915550505b6001600160a01b03851660009081526002602052604081208291610db66000546001600160a01b031690565b6001600160a01b03166001600160a01b031681526020019081526020016000206000828254610de591906116c8565b909155505050505050505050505050565b6040516001600160a01b03831660248201526044810182905261069a90849063a9059cbb60e01b90606401610b93565b606060006188b88560a0013511610ea55760405162461bcd60e51b815260206004820152602860248201527f4465706f7369745061796d61737465723a2067617320746f6f206c6f7720666f60448201527f7220706f73744f700000000000000000000000000000000000000000000000006064820152608401610630565b366000610eb66101208801886117a7565b909250905060288114610f315760405162461bcd60e51b815260206004820152603560248201527f4465706f7369745061796d61737465723a207061796d6173746572416e64446160448201527f7461206d757374207370656369667920746f6b656e00000000000000000000006064820152608401610630565b6000610f4082601481866117f5565b610f499161181f565b60601c905087356000610f5c8389611190565b90506000610f698b611279565b6001600160a01b03841660009081526003602052604090205490915015610fde5760405162461bcd60e51b8152602060048201526024808201527f4465706f7369745061796d61737465723a206465706f736974206e6f74206c6f60448201526318dad95960e21b6064820152608401610630565b6001600160a01b0380851660009081526002602090815260408083209387168352929052205482111561105d5760405162461bcd60e51b815260206004820152602160248201527f4465706f7369745061796d61737465723a206465706f73697420746f6f206c6f6044820152607760f81b6064820152608401610630565b604080516001600160a01b03948516602082015294909316848401526060840152608083015260a0808301979097528051808303909701875260c09091019052509295600095509350505050565b6000611100826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112a89092919063ffffffff16565b80519091501561069a578080602001905181019061111e9190611854565b61069a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610630565b6001600160a01b03808316600090815260016020526040812054909116806112065760405162461bcd60e51b815260206004820152602360248201527f4465706f7369745061796d61737465723a20756e737570706f7274656420746f60448201526235b2b760e91b6064820152608401610630565b60405163d1eca9cf60e01b8152600481018490526001600160a01b0382169063d1eca9cf90602401602060405180830381865afa15801561124b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126f91906116db565b9150505b92915050565b600060e0820135610100830135808203611294575092915050565b6112a0824883016112b7565b949350505050565b60606112a084846000856112cf565b60008183106112c657816112c8565b825b9392505050565b6060824710156113475760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610630565b600080866001600160a01b031685876040516113639190611876565b60006040518083038185875af1925050503d80600081146113a0576040519150601f19603f3d011682016040523d82523d6000602084013e6113a5565b606091505b50915091506113b6878383876113c1565b979650505050505050565b60608315611430578251600003611429576001600160a01b0385163b6114295760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610630565b50816112a0565b6112a083838151156114455781518083602001fd5b8060405162461bcd60e51b81526004016106309190611892565b60006020828403121561147157600080fd5b813563ffffffff811681146112c857600080fd5b6001600160a01b0381168114610adf57600080fd5b600080604083850312156114ad57600080fd5b82356114b881611485565b946020939093013593505050565b6000806000606084860312156114db57600080fd5b83356114e681611485565b925060208401356114f681611485565b929592945050506040919091013590565b6000806040838503121561151a57600080fd5b823561152581611485565b9150602083013561153581611485565b809150509250929050565b60006020828403121561155257600080fd5b81356112c881611485565b6000806000806060858703121561157357600080fd5b84356003811061158257600080fd5b9350602085013567ffffffffffffffff8082111561159f57600080fd5b818701915087601f8301126115b357600080fd5b8135818111156115c257600080fd5b8860208285010111156115d457600080fd5b95986020929092019750949560400135945092505050565b60008060006060848603121561160157600080fd5b833567ffffffffffffffff81111561161857600080fd5b8401610160818703121561162b57600080fd5b95602085013595506040909401359392505050565b60005b8381101561165b578181015183820152602001611643565b50506000910152565b6000815180845261167c816020860160208601611640565b601f01601f19169290920160200192915050565b6040815260006116a36040830185611664565b90508260208301529392505050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611273576112736116b2565b6000602082840312156116ed57600080fd5b5051919050565b81810381811115611273576112736116b2565b600080600080600060a0868803121561171f57600080fd5b853561172a81611485565b9450602086013561173a81611485565b94979496505050506040830135926060810135926080909101359150565b8082028115828204841417611273576112736116b2565b60008261178c57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b6000808335601e198436030181126117be57600080fd5b83018035915067ffffffffffffffff8211156117d957600080fd5b6020019150368190038213156117ee57600080fd5b9250929050565b6000808585111561180557600080fd5b8386111561181257600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff19813581811691601485101561184c5780818660140360031b1b83161692505b505092915050565b60006020828403121561186657600080fd5b815180151581146112c857600080fd5b60008251611888818460208701611640565b9190910192915050565b6020815260006112c8602083018461166456fea264697066735822122099768c7e1871531b14ae09b930cbc9cf1a28764027f42be508c55dbc6685d70e64736f6c63430008110033";
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
    })[];
    static createInterface(): DepositPaymasterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DepositPaymaster;
}