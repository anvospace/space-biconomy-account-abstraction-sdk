import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SmartAccount4, SmartAccount4Interface } from "../SmartAccount4";
export declare class SmartAccount4__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(anEntryPoint: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SmartAccount4>;
    getDeployTransaction(anEntryPoint: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SmartAccount4;
    connect(signer: Signer): SmartAccount4__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162003891380380620038918339810160408190526200003491620000c5565b6001603155603280546001600160a01b03191673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1790556001600160a01b038116620000af5760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e5c1bda5b9d60721b604482015260640160405180910390fd5b6001600160a01b03166080524660a052620000f7565b600060208284031215620000d857600080fd5b81516001600160a01b0381168114620000f057600080fd5b9392505050565b60805160a0516137356200015c6000396000818161040101528181610587015281816108310152610f2d0152600081816106f501528181610b5f01528181610cbc01528181610da701528181611a0f01528181611aa001526125fd01526137356000f3fe60806040526004361061026e5760003560e01c80638da5cb5b11610153578063c399ec88116100cb578063f08a03231161007f578063f698da2511610064578063f698da25146107fc578063fc7d3d7914610883578063ffa1ad7414610896576102a9565b8063f08a0323146107bc578063f09a4016146107dc576102a9565b8063cc2f8452116100b0578063cc2f84521461074e578063e009cfde1461077c578063ed516d511461079c576102a9565b8063c399ec8814610719578063c4ca3a9c1461072e576102a9565b8063a9059cbb11610122578063ac85dca711610107578063ac85dca7146106b1578063affed0e0146106d1578063b0d691fe146106e6576102a9565b8063a9059cbb14610671578063abc1b74514610691576102a9565b80638da5cb5b146105f1578063912ccaa3146106115780639e5d4c4914610631578063a18f51e514610651576102a9565b80634a58db19116101e65780635c0ba299116101b55780637455ce3c1161019a5780637455ce3c146105625780637477341214610575578063856dfd99146105a9576102a9565b80635c0ba29914610515578063610b592514610542576102a9565b80634a58db19146104925780634d44560d1461049a5780635229073f146104ba5780635ae6bd37146104e8576102a9565b80632d9ad53d1161023d5780633a871cdd116102225780633a871cdd146104255780633d46b81914610445578063468721a714610472576102a9565b80632d9ad53d146103d25780633408e470146103f2576102a9565b806301ffc9a71461030f578063025b22bc1461035557806313af403514610377578063141a468c14610397576102a9565b366102a95760405134815233907ed05ab44e279ac59e855cb75dc2ae23b200ad994797b6f1f028f96a46ecce029060200160405180910390a2005b3480156102b557600080fd5b507f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d48054806102e057005b36600080373360601b365260008060143601600080855af190503d6000803e80610309573d6000fd5b503d6000f35b34801561031b57600080fd5b5061034061032a366004612bdf565b6001600160e01b0319166301ffc9a760e01b1490565b60405190151581526020015b60405180910390f35b34801561036157600080fd5b50610375610370366004612c21565b6108df565b005b34801561038357600080fd5b50610375610392366004612c21565b6109e3565b3480156103a357600080fd5b506103c46103b2366004612c3e565b60336020526000908152604090205481565b60405190815260200161034c565b3480156103de57600080fd5b506103406103ed366004612c21565b610b17565b3480156103fe57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006103c4565b34801561043157600080fd5b506103c4610440366004612c57565b610b52565b34801561045157600080fd5b506103c4610460366004612c3e565b60009081526033602052604090205490565b34801561047e57600080fd5b5061034061048d366004612d86565b610bbb565b610375610cba565b3480156104a657600080fd5b506103756104b5366004612df0565b610d3a565b3480156104c657600080fd5b506104da6104d5366004612d86565b610e2e565b60405161034c929190612e6c565b3480156104f457600080fd5b506103c4610503366004612c3e565b60346020526000908152604090205481565b34801561052157600080fd5b50610535610530366004612f67565b610e64565b60405161034c9190612fbf565b34801561054e57600080fd5b5061037561055d366004612c21565b610fdc565b610340610570366004612fd2565b611102565b34801561058157600080fd5b506103c47f000000000000000000000000000000000000000000000000000000000000000081565b3480156105b557600080fd5b507f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4545b6040516001600160a01b03909116815260200161034c565b3480156105fd57600080fd5b506032546105d9906001600160a01b031681565b34801561061d57600080fd5b5061037561062c36600461308c565b61131b565b34801561063d57600080fd5b5061037561064c366004613168565b6114cf565b34801561065d57600080fd5b506103c461066c3660046131c4565b61151e565b34801561067d57600080fd5b5061037561068c366004612df0565b6116ff565b34801561069d57600080fd5b506103c46106ac366004613222565b611868565b3480156106bd57600080fd5b506103756106cc3660046132ea565b61193b565b3480156106dd57600080fd5b506103c46119e8565b3480156106f257600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006105d9565b34801561072557600080fd5b506103c4611a80565b34801561073a57600080fd5b506103c461074936600461332b565b611acf565b34801561075a57600080fd5b5061076e610769366004612df0565b611b2e565b60405161034c92919061339c565b34801561078857600080fd5b506103756107973660046133f9565b611c27565b3480156107a857600080fd5b506103756107b7366004613432565b611d59565b3480156107c857600080fd5b506103756107d7366004612c21565b61207c565b3480156107e857600080fd5b506103756107f73660046133f9565b6120f3565b34801561080857600080fd5b506103c460007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692187f000000000000000000000000000000000000000000000000000000000000000060408051602081019390935282015230606082015260800160405160208183030381529060405280519060200120905090565b610340610891366004612fd2565b6121e4565b3480156108a257600080fd5b506105356040518060400160405280600581526020017f312e302e3000000000000000000000000000000000000000000000000000000081525081565b6032546001600160a01b03163314806108f757503330145b6109485760405162461bcd60e51b815260206004820152601260248201527f4f6e6c79206f776e6572206f722073656c66000000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0381163b61099f5760405162461bcd60e51b815260206004820152601660248201527f494e56414c49445f494d504c454d454e544154494f4e00000000000000000000604482015260640161093f565b308054908290556040516001600160a01b0380841691908316907faa3f731066a578e5f39b4215468d826cdd15373cbc0dfc9cb9bdc649718ef7da90600090a35050565b6032546001600160a01b03163314806109fb57503330145b610a475760405162461bcd60e51b815260206004820152601260248201527f4f6e6c79206f776e6572206f722073656c660000000000000000000000000000604482015260640161093f565b6001600160a01b038116610ac35760405162461bcd60e51b815260206004820152603460248201527f536d617274204163636f756e743a3a206e6577205369676e61746f727920616460448201527f64726573732063616e6e6f74206265207a65726f000000000000000000000000606482015260840161093f565b603280546001600160a01b038381166001600160a01b03198316811790935560405191169190829030907ff2c2b1b5312b1e31ad49a7d85acd6322ae6facc51488810b882ecdb4df861cd490600090a45050565b600060016001600160a01b03831614801590610b4c57506001600160a01b038281166000908152602081905260409020541615155b92915050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b9f57604051635dac3db760e11b815233600482015260240161093f565b610ba984846121f1565b9050610bb4826122c7565b9392505050565b60003360011480610be25750336000908152602081905260409020546001600160a01b0316155b15610c02576040516321ac7c5f60e01b815233600482015260240161093f565b610c0f858585855a612312565b90508015610c86577f8c014e41cffd68ba64f3e7830b8b2e4ee860509d8deab25ebbcbba2f0405e2da3386868686604051610c4e9594939291906134b1565b60405180910390a160405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a2610cb2565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a25b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b158015610d1f57600080fd5b505af1158015610d33573d6000803e3d6000fd5b5050505050565b6032546001600160a01b03163314610da55760405162461bcd60e51b815260206004820152602860248201527f536d617274204163636f756e743a3a2053656e646572206973206e6f742061756044820152671d1a1bdc9a5e995960c21b606482015260840161093f565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610e1257600080fd5b505af1158015610e26573d6000803e3d6000fd5b505050505050565b60006060610e3e86868686610bbb565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b606060007fda033865d68bf4a40a5a7cb4159a99e33dba8569e65ea3e38222eb12d9e66eee60001b856000015186604001518760600151805190602001208860200151896080015189600001518a602001518b604001518c606001518d608001518d604051602001610ee19c9b9a999897969594939291906134fc565b60408051601f1981840301815291905280516020909101209050601960f81b600160f81b610f7f60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692187f000000000000000000000000000000000000000000000000000000000000000060408051602081019390935282015230606082015260800160405160208183030381529060405280519060200120905090565b6040517fff0000000000000000000000000000000000000000000000000000000000000093841660208201529290911660218301526022820152604281018290526062016040516020818303038152906040529150509392505050565b610fe4612419565b6001600160a01b038116158061100357506001600160a01b0381166001145b1561102c5760405163cadb248f60e01b81526001600160a01b038216600482015260240161093f565b6001600160a01b0381811660009081526020819052604090205416156110705760405163b29d459560e01b81526001600160a01b038216600482015260240161093f565b600060208181527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d80546001600160a01b0385811680865260408087208054939094166001600160a01b03199384161790935560019095528254168417909155519182527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f8440910160405180910390a150565b6000805a6001600090815260336020527f10f6f77027d502f219862b0303542eb5dd005b06fa23ff4d1775aaa45bbf94778054929350909182916111589189918991908561114f8361358b565b91905055610e64565b805160208201209250905061116d8286611d59565b506111a4603f8760800151604061118491906135a4565b61118e91906135bb565b608088015161119f906109c46135dd565b61243d565b6111b0906101f46135dd565b5a10156111ff5760405162461bcd60e51b815260206004820152600660248201527f4253413031300000000000000000000000000000000000000000000000000000604482015260640161093f565b61123f8660000151876040015188606001518960200151896020015160001461122c578a60800151612312565b6109c45a61123a91906135f0565b612312565b925082806112505750608086015115155b8061125e5750602085015115155b6112aa5760405162461bcd60e51b815260206004820152600660248201527f4253413031330000000000000000000000000000000000000000000000000000604482015260640161093f565b602085015160009015611311576112e05a6112c590856135f0565b8751602089015160408a015160608b015160808c0151612453565b905080827f3fd74c38c9f1b6f0499c6d0128fbf77a796dbacc7eda0369b13006dc977bb56b60405160405180910390a35b5050509392505050565b6113236125f2565b60008590036113745760405162461bcd60e51b815260206004820152601460248201527f656d7074792061727261792070726f7669646564000000000000000000000000604482015260640161093f565b8483146113c35760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e6774687300000000000000000000000000604482015260640161093f565b8281146114125760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e6774687300000000000000000000000000604482015260640161093f565b60005b858110156114c6576114be87878381811061143257611432613603565b90506020020160208101906114479190612c21565b86868481811061145957611459613603565b9050602002013585858581811061147257611472613603565b90506020028101906114849190613619565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061267f92505050565b600101611415565b50505050505050565b6114d76125f2565b611518848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061267f92505050565b50505050565b6000836000036115705760405162461bcd60e51b815260206004820152601b60248201527f696e76616c696420746f6b656e4761735072696365466163746f720000000000604482015260640161093f565b60005a905060006001600160a01b0384161561158c578361158e565b325b90506001600160a01b038516611655573a87106115ab573a6115ad565b865b6115b7898b6135dd565b6115c191906135a4565b92506000816001600160a01b03168460405160006040518083038185875af1925050503d8060008114611610576040519150601f19603f3d011682016040523d82523d6000602084013e611615565b606091505b505090508061164f5760405162461bcd60e51b815260206004820152600660248201526542534130313160d01b604482015260640161093f565b506116b7565b85876116618a8c6135dd565b61166b91906135a4565b61167591906135bb565b92506116828582856126ef565b6116b75760405162461bcd60e51b81526020600482015260066024820152652129a098189960d11b604482015260640161093f565b60005a6116c490846135f0565b9050806040516020016116d991815260200190565b60408051601f198184030181529082905262461bcd60e51b825261093f91600401612fbf565b6032546001600160a01b0316331461176a5760405162461bcd60e51b815260206004820152602860248201527f536d617274204163636f756e743a3a2053656e646572206973206e6f742061756044820152671d1a1bdc9a5e995960c21b606482015260840161093f565b6001600160a01b0382166117c05760405162461bcd60e51b815260206004820181905260248201527f7468697320616374696f6e2077696c6c206275726e20796f75722066756e6473604482015260640161093f565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461180d576040519150601f19603f3d011682016040523d82523d6000602084013e611812565b606091505b50509050806118635760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c65640000000000000000000000000000000000604482015260640161093f565b505050565b6000806040518060a001604052808f6001600160a01b031681526020018b600181111561189757611897613479565b81526020018e81526020018d8d8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060209081018b90526040805160a0810182528b81529182018a905281018890526001600160a01b03808816606083015286166080820152909150611920828286610e64565b80519060200120925050509c9b505050505050505050505050565b6032546001600160a01b031633146119a65760405162461bcd60e51b815260206004820152602860248201527f536d617274204163636f756e743a3a2053656e646572206973206e6f742061756044820152671d1a1bdc9a5e995960c21b606482015260840161093f565b6119b18383836126ef565b6118635760405163190eecf360e31b81526001600160a01b038085166004830152831660248201526044810182905260640161093f565b604051631aab3f0d60e11b8152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a906044015b602060405180830381865afa158015611a57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7b9190613660565b905090565b6040516370a0823160e01b81523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401611a3a565b6000805a9050611b18878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525089925050505a612312565b611b2157600080fd5b60005a6116c490836135f0565b606060008267ffffffffffffffff811115611b4b57611b4b612cab565b604051908082528060200260200182016040528015611b74578160200160208202803683370190505b506001600160a01b0380861660009081526020819052604081205492945091165b6001600160a01b03811615801590611bb757506001600160a01b038116600114155b8015611bc257508482105b15611c195780848381518110611bda57611bda613603565b6001600160a01b039283166020918202929092018101919091529181166000908152918290526040909120541681611c118161358b565b925050611b95565b908352919491935090915050565b611c2f612419565b6001600160a01b0381161580611c4e57506001600160a01b0381166001145b15611c775760405163cadb248f60e01b81526001600160a01b038216600482015260240161093f565b6001600160a01b03828116600090815260208190526040902054811690821614611cdf576001600160a01b0382811660008181526020819052604090819020549051633103525b60e21b8152848416600482015292166024830152604482015260640161093f565b6001600160a01b03818116600081815260208181526040808320805488871685528285208054919097166001600160a01b03199182161790965592849052825490941690915591519081527faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace4054276910160405180910390a15050565b600080600080611d7c856020810151604082015160419092015160ff1692909190565b9195509350915060ff8416600003611f8c575081611d9c600160416135a4565b821015611deb5760405162461bcd60e51b815260206004820152600660248201527f4253413032310000000000000000000000000000000000000000000000000000604482015260640161093f565b8451611df88360206135dd565b1115611e465760405162461bcd60e51b815260206004820152600660248201527f4253413032320000000000000000000000000000000000000000000000000000604482015260640161093f565b6020828601810151865190918290611e5f9086906135dd565b611e6991906135dd565b1115611eb75760405162461bcd60e51b815260206004820152600660248201527f4253413032330000000000000000000000000000000000000000000000000000604482015260640161093f565b604051630b135d3f60e11b808252878501602001916001600160a01b03851690631626ba7e90611eed908c908690600401613679565b602060405180830381865afa158015611f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2e9190613692565b6001600160e01b03191614611f855760405162461bcd60e51b815260206004820152600660248201527f4253413032340000000000000000000000000000000000000000000000000000604482015260640161093f565b505061201f565b601e8460ff16111561200f57612007611fa66004866136af565b8484611fff8a6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b92919061283d565b50905061201f565b61201b8685858561283d565b5090505b6032546001600160a01b03828116911614610e265760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f5349474e4154555245000000000000000000000000000000604482015260640161093f565b612084612419565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4546120af82612901565b816001600160a01b0316816001600160a01b03167f06be9a1bea257286cf2afa8205ed494ca9d6a4b41aa58d04238deebada20fb0c60405160405180910390a35050565b6032546001600160a01b03161561214c5760405162461bcd60e51b815260206004820152601360248201527f416c726561647920696e697469616c697a656400000000000000000000000000604482015260640161093f565b6001600160a01b0382166121a25760405162461bcd60e51b815260206004820152600d60248201527f496e76616c6964206f776e657200000000000000000000000000000000000000604482015260640161093f565b603280546001600160a01b0319166001600160a01b0384161790556121c681612901565b6121e060006040518060200160405280600081525061294c565b5050565b6000610cb2848484611102565b60008061224b836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905061229b61225e610140860186613619565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508593925050612a169050565b6032546001600160a01b039081169116146122ba576001915050610b4c565b5060009392505050565b50565b80156122c45760405133906000199083906000818181858888f193505050503d8060008114611518576040519150601f19603f3d011682016040523d82523d6000602084013e611518565b6000600183600181111561232857612328613479565b03612340576000808551602087018986f49050612350565b600080855160208701888a87f190505b80156123b5578360405161236491906136c8565b604051809103902085876001600160a01b03167f81d12fffced46c214dfae8ab8fa0b9f7b69f70c9d500e33f612f2105deb261ee86866040516123a89291906136e4565b60405180910390a4612410565b836040516123c391906136c8565b604051809103902085876001600160a01b03167f3ddd038f78c876172d5dbfd730b14c9f8692dfa197ef104eaac6df3f85a0874a86866040516124079291906136e4565b60405180910390a45b95945050505050565b33301461243b576040516301478e3360e21b815233600482015260240161093f565b565b600081831161244c5781610bb4565b5090919050565b6000836000036124a55760405162461bcd60e51b815260206004820152601b60248201527f696e76616c696420746f6b656e4761735072696365466163746f720000000000604482015260640161093f565b60006001600160a01b038316156124bc57826124be565b325b90506001600160a01b038416612585573a86106124db573a6124dd565b855b6124e7888a6135dd565b6124f191906135a4565b91506000816001600160a01b03168360405160006040518083038185875af1925050503d8060008114612540576040519150601f19603f3d011682016040523d82523d6000602084013e612545565b606091505b505090508061257f5760405162461bcd60e51b815260206004820152600660248201526542534130313160d01b604482015260640161093f565b506125e7565b8486612591898b6135dd565b61259b91906135a4565b6125a591906135bb565b91506125b28482846126ef565b6125e75760405162461bcd60e51b81526020600482015260066024820152652129a098189960d11b604482015260640161093f565b509695505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061263357506032546001600160a01b031633145b61243b5760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161093f565b600080846001600160a01b0316848460405161269b91906136c8565b60006040518083038185875af1925050503d80600081146126d8576040519150601f19603f3d011682016040523d82523d6000602084013e6126dd565b606091505b509150915081610d3357805160208201fd5b60006001600160a01b0384166127475760405162461bcd60e51b815260206004820152601d60248201527f746f6b656e2063616e206e6f74206265207a65726f2061646472657373000000604482015260640161093f565b6000846001600160a01b03163b116127a15760405162461bcd60e51b815260206004820152601c60248201527f746f6b656e20636f6e747261637420646f65736e277420657869737400000000604482015260640161093f565b604080516001600160a01b03851660248201526044808201859052825180830390910181526064909101909152602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b178152825160009182896127105a03f13d8015612823576020811461282b5760009350611311565b819350611311565b50600051159015171595945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561287457506000905060036128f8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156128c8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166128f1576000600192509250506128f8565b9150600090505b94509492505050565b6001600160a01b0381166129285760405163dd449f5f60e01b815260040160405180910390fd5b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d455565b600160009081526020527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d546001600160a01b03161561299f5760405163df8cc4e360e01b815260040160405180910390fd5b600160008181526020527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d80546001600160a01b03191690911790556001600160a01b038216156121e0576129f98260008360015a612312565b6121e05760405163032e3a3960e51b815260040160405180910390fd5b6000806000612a258585612a3a565b91509150612a3281612a7f565b509392505050565b6000808251604103612a705760208301516040840151606085015160001a612a648782858561283d565b94509450505050612a78565b506000905060025b9250929050565b6000816004811115612a9357612a93613479565b03612a9b5750565b6001816004811115612aaf57612aaf613479565b03612afc5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161093f565b6002816004811115612b1057612b10613479565b03612b5d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161093f565b6003816004811115612b7157612b71613479565b036122c45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161093f565b6001600160e01b0319811681146122c457600080fd5b600060208284031215612bf157600080fd5b8135610bb481612bc9565b6001600160a01b03811681146122c457600080fd5b8035612c1c81612bfc565b919050565b600060208284031215612c3357600080fd5b8135610bb481612bfc565b600060208284031215612c5057600080fd5b5035919050565b600080600060608486031215612c6c57600080fd5b833567ffffffffffffffff811115612c8357600080fd5b84016101608187031215612c9657600080fd5b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715612ce457612ce4612cab565b60405290565b600082601f830112612cfb57600080fd5b813567ffffffffffffffff80821115612d1657612d16612cab565b604051601f8301601f19908116603f01168101908282118183101715612d3e57612d3e612cab565b81604052838152866020858801011115612d5757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560028110612c1c57600080fd5b60008060008060808587031215612d9c57600080fd5b8435612da781612bfc565b935060208501359250604085013567ffffffffffffffff811115612dca57600080fd5b612dd687828801612cea565b925050612de560608601612d77565b905092959194509250565b60008060408385031215612e0357600080fd5b8235612e0e81612bfc565b946020939093013593505050565b60005b83811015612e37578181015183820152602001612e1f565b50506000910152565b60008151808452612e58816020860160208601612e1c565b601f01601f19169290920160200192915050565b8215158152604060208201526000610cb26040830184612e40565b600060a08284031215612e9957600080fd5b612ea1612cc1565b90508135612eae81612bfc565b8152612ebc60208301612d77565b602082015260408201356040820152606082013567ffffffffffffffff811115612ee557600080fd5b612ef184828501612cea565b6060830152506080820135608082015292915050565b600060a08284031215612f1957600080fd5b612f21612cc1565b90508135815260208201356020820152604082013560408201526060820135612f4981612bfc565b60608201526080820135612f5c81612bfc565b608082015292915050565b600080600060e08486031215612f7c57600080fd5b833567ffffffffffffffff811115612f9357600080fd5b612f9f86828701612e87565b935050612faf8560208601612f07565b915060c084013590509250925092565b602081526000610bb46020830184612e40565b600080600060e08486031215612fe757600080fd5b833567ffffffffffffffff80821115612fff57600080fd5b61300b87838801612e87565b945061301a8760208801612f07565b935060c086013591508082111561303057600080fd5b5061303d86828701612cea565b9150509250925092565b60008083601f84011261305957600080fd5b50813567ffffffffffffffff81111561307157600080fd5b6020830191508360208260051b8501011115612a7857600080fd5b600080600080600080606087890312156130a557600080fd5b863567ffffffffffffffff808211156130bd57600080fd5b6130c98a838b01613047565b909850965060208901359150808211156130e257600080fd5b6130ee8a838b01613047565b9096509450604089013591508082111561310757600080fd5b5061311489828a01613047565b979a9699509497509295939492505050565b60008083601f84011261313857600080fd5b50813567ffffffffffffffff81111561315057600080fd5b602083019150836020828501011115612a7857600080fd5b6000806000806060858703121561317e57600080fd5b843561318981612bfc565b935060208501359250604085013567ffffffffffffffff8111156131ac57600080fd5b6131b887828801613126565b95989497509550505050565b60008060008060008060c087890312156131dd57600080fd5b86359550602087013594506040870135935060608701359250608087013561320481612bfc565b915060a087013561321481612bfc565b809150509295509295509295565b6000806000806000806000806000806000806101608d8f03121561324557600080fd5b61324f8d35612bfc565b8c359b5060208d01359a5067ffffffffffffffff60408e0135111561327357600080fd5b6132838e60408f01358f01613126565b909a50985061329460608e01612d77565b975060808d0135965060a08d0135955060c08d0135945060e08d013593506101008d01356132c181612bfc565b92506132d06101208e01612c11565b91506101408d013590509295989b509295989b509295989b565b6000806000606084860312156132ff57600080fd5b833561330a81612bfc565b9250602084013561331a81612bfc565b929592945050506040919091013590565b60008060008060006080868803121561334357600080fd5b853561334e81612bfc565b945060208601359350604086013567ffffffffffffffff81111561337157600080fd5b61337d88828901613126565b9094509250613390905060608701612d77565b90509295509295909350565b604080825283519082018190526000906020906060840190828701845b828110156133de5781516001600160a01b0316845292840192908401906001016133b9565b5050506001600160a01b039490941692019190915250919050565b6000806040838503121561340c57600080fd5b823561341781612bfc565b9150602083013561342781612bfc565b809150509250929050565b6000806040838503121561344557600080fd5b82359150602083013567ffffffffffffffff81111561346357600080fd5b61346f85828601612cea565b9150509250929050565b634e487b7160e01b600052602160045260246000fd5b600281106134ad57634e487b7160e01b600052602160045260246000fd5b9052565b60006001600160a01b03808816835280871660208401525084604083015260a060608301526134e360a0830185612e40565b90506134f2608083018461348f565b9695505050505050565b6000610180820190508d82526001600160a01b03808e1660208401528c60408401528b6060840152613531608084018c61348f565b8960a08401528860c08401528760e08401528661010084015280861661012084015280851661014084015250826101608301529d9c50505050505050505050505050565b634e487b7160e01b600052601160045260246000fd5b60006001820161359d5761359d613575565b5060010190565b8082028115828204841417610b4c57610b4c613575565b6000826135d857634e487b7160e01b600052601260045260246000fd5b500490565b80820180821115610b4c57610b4c613575565b81810381811115610b4c57610b4c613575565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261363057600080fd5b83018035915067ffffffffffffffff82111561364b57600080fd5b602001915036819003821315612a7857600080fd5b60006020828403121561367257600080fd5b5051919050565b828152604060208201526000610cb26040830184612e40565b6000602082840312156136a457600080fd5b8151610bb481612bc9565b60ff8281168282160390811115610b4c57610b4c613575565b600082516136da818460208701612e1c565b9190910192915050565b604081016136f2828561348f565b826020830152939250505056fea2646970667358221220a9ddbdddd858108af8d511c517c1f0627d74c40e39ba1ef6b0d86b347e57592c64736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
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
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        anonymous?: undefined;
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
    static createInterface(): SmartAccount4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): SmartAccount4;
}