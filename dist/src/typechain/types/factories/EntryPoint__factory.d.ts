import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EntryPoint, EntryPointInterface } from "../EntryPoint";
export declare class EntryPoint__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<EntryPoint>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): EntryPoint;
    connect(signer: Signer): EntryPoint__factory;
    static readonly bytecode = "0x60a0604052604051620000129062000055565b604051809103906000f0801580156200002f573d6000803e3d6000fd5b506001600160a01b03166080523480156200004957600080fd5b50600160025562000063565b61022080620041ed83390190565b608051614167620000866000396000818161131f0152612f8901526141676000f3fe6080604052600436106101635760003560e01c80638f41ec5a116100c0578063bb9fe6bf11610074578063d6383f9411610059578063d6383f94146104af578063ee219423146104cf578063fc7e286d146104ef57600080fd5b8063bb9fe6bf1461047a578063c23a5cea1461048f57600080fd5b80639b249f69116100a55780639b249f6914610427578063a619353114610447578063b760faf91461046757600080fd5b80638f41ec5a146103f2578063957122ab1461040757600080fd5b8063205c2878116101175780634b1d7cf5116100fc5780634b1d7cf5146102765780635287ce121461029657806370a08231146103b357600080fd5b8063205c28781461023657806335567e1a1461025657600080fd5b80631b2e01b8116101485780631b2e01b8146101ab5780631d732756146101f65780631fad948c1461021657600080fd5b80630396cb60146101785780630bd28e3b1461018b57600080fd5b3661017357610171336105a4565b005b600080fd5b61017161018636600461325c565b61060b565b34801561019757600080fd5b506101716101a636600461329e565b6108c9565b3480156101b757600080fd5b506101e36101c63660046132d9565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b34801561020257600080fd5b506101e36102113660046134d8565b610900565b34801561022257600080fd5b506101716102313660046135e3565b610a73565b34801561024257600080fd5b5061017161025136600461363a565b610bf0565b34801561026257600080fd5b506101e36102713660046132d9565b610d7e565b34801561028257600080fd5b506101716102913660046135e3565b610dc4565b3480156102a257600080fd5b5061035b6102b1366004613666565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152506001600160a01b031660009081526020818152604091829020825160a08101845281546001600160701b038082168352600160701b820460ff16151594830194909452600160781b90049092169282019290925260019091015463ffffffff81166060830152640100000000900465ffffffffffff16608082015290565b6040805182516001600160701b03908116825260208085015115159083015283830151169181019190915260608083015163ffffffff169082015260809182015165ffffffffffff169181019190915260a0016101ed565b3480156103bf57600080fd5b506101e36103ce366004613666565b6001600160a01b03166000908152602081905260409020546001600160701b031690565b3480156103fe57600080fd5b506101e3600181565b34801561041357600080fd5b50610171610422366004613683565b611208565b34801561043357600080fd5b50610171610442366004613708565b611305565b34801561045357600080fd5b506101e3610462366004613763565b6113c0565b610171610475366004613666565b6105a4565b34801561048657600080fd5b50610171611402565b34801561049b57600080fd5b506101716104aa366004613666565b611555565b3480156104bb57600080fd5b506101716104ca366004613798565b6117ab565b3480156104db57600080fd5b506101716104ea366004613763565b6118a6565b3480156104fb57600080fd5b5061055e61050a366004613666565b600060208190529081526040902080546001909101546001600160701b0380831692600160701b810460ff1692600160781b9091049091169063ffffffff811690640100000000900465ffffffffffff1685565b604080516001600160701b0396871681529415156020860152929094169183019190915263ffffffff16606082015265ffffffffffff909116608082015260a0016101ed565b6105ae8134611b48565b6001600160a01b03811660008181526020818152604091829020805492516001600160701b03909316835292917f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c491015b60405180910390a25050565b33600090815260208190526040902063ffffffff82166106725760405162461bcd60e51b815260206004820152601a60248201527f6d757374207370656369667920756e7374616b652064656c617900000000000060448201526064015b60405180910390fd5b600181015463ffffffff90811690831610156106d05760405162461bcd60e51b815260206004820152601c60248201527f63616e6e6f7420646563726561736520756e7374616b652074696d65000000006044820152606401610669565b80546000906106f0903490600160781b90046001600160701b0316613810565b9050600081116107425760405162461bcd60e51b815260206004820152601260248201527f6e6f207374616b652073706563696669656400000000000000000000000000006044820152606401610669565b6001600160701b038111156107995760405162461bcd60e51b815260206004820152600e60248201527f7374616b65206f766572666c6f770000000000000000000000000000000000006044820152606401610669565b6040805160a08101825283546001600160701b0390811682526001602080840182815286841685870190815263ffffffff808b16606088019081526000608089018181523380835296829052908a902098518954955194518916600160781b027fffffff0000000000000000000000000000ffffffffffffffffffffffffffffff951515600160701b026effffffffffffffffffffffffffffff199097169190991617949094179290921695909517865551949092018054925165ffffffffffff166401000000000269ffffffffffffffffffff19909316949093169390931717905590517fa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01906108bc908490879091825263ffffffff16602082015260400190565b60405180910390a2505050565b3360009081526001602090815260408083206001600160c01b038516845290915281208054916108f883613823565b919050555050565b6000805a90503330146109555760405162461bcd60e51b815260206004820152601760248201527f4141393220696e7465726e616c2063616c6c206f6e6c790000000000000000006044820152606401610669565b8451604081015160608201518101611388015a101561097f5763deaddead60e01b60005260206000fd5b875160009015610a1357600061099c846000015160008c86611bf8565b905080610a115760006109b0610800611c10565b805190915015610a0b5784600001516001600160a01b03168a602001517f1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a201876020015184604051610a0292919061388c565b60405180910390a35b60019250505b505b600088608001515a8603019050610a656000838b8b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250889250611c3c915050565b9a9950505050505050505050565b610a7b611f3e565b8160008167ffffffffffffffff811115610a9757610a9761330e565b604051908082528060200260200182016040528015610ad057816020015b610abd6131d2565b815260200190600190039081610ab55790505b50905060005b82811015610b49576000828281518110610af257610af26138a5565b60200260200101519050600080610b2d848a8a87818110610b1557610b156138a5565b9050602002810190610b2791906138bb565b85611f95565b91509150610b3e8483836000612180565b505050600101610ad6565b506040516000907fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972908290a160005b83811015610bd357610bc781888884818110610b9657610b966138a5565b9050602002810190610ba891906138bb565b858481518110610bba57610bba6138a5565b602002602001015161232e565b90910190600101610b78565b50610bde8482612463565b505050610beb6001600255565b505050565b33600090815260208190526040902080546001600160701b0316821115610c595760405162461bcd60e51b815260206004820152601960248201527f576974686472617720616d6f756e7420746f6f206c61726765000000000000006044820152606401610669565b8054610c6f9083906001600160701b03166138dc565b81546dffffffffffffffffffffffffffff19166001600160701b0391909116178155604080516001600160a01b03851681526020810184905233917fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb910160405180910390a26000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114610d22576040519150601f19603f3d011682016040523d82523d6000602084013e610d27565b606091505b5050905080610d785760405162461bcd60e51b815260206004820152601260248201527f6661696c656420746f20776974686472617700000000000000000000000000006044820152606401610669565b50505050565b6001600160a01b03821660009081526001602090815260408083206001600160c01b038516845290915290819020549082901b67ffffffffffffffff1916175b92915050565b610dcc611f3e565b816000805b82811015610f405736868683818110610dec57610dec6138a5565b9050602002810190610dfe91906138ef565b9050366000610e0d8380613905565b90925090506000610e246040850160208601613666565b90506000196001600160a01b03821601610e805760405162461bcd60e51b815260206004820152601760248201527f4141393620696e76616c69642061676772656761746f720000000000000000006044820152606401610669565b6001600160a01b03811615610f1d576001600160a01b03811663e3563a4f8484610ead604089018961394f565b6040518563ffffffff1660e01b8152600401610ecc9493929190613afc565b60006040518083038186803b158015610ee457600080fd5b505afa925050508015610ef5575060015b610f1d5760405163086a9f7560e41b81526001600160a01b0382166004820152602401610669565b610f278287613810565b9550505050508080610f3890613823565b915050610dd1565b5060008167ffffffffffffffff811115610f5c57610f5c61330e565b604051908082528060200260200182016040528015610f9557816020015b610f826131d2565b815260200190600190039081610f7a5790505b506040519091507fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f97290600090a16000805b848110156110aa5736888883818110610fe157610fe16138a5565b9050602002810190610ff391906138ef565b90503660006110028380613905565b909250905060006110196040850160208601613666565b90508160005b8181101561109157600089898151811061103b5761103b6138a5565b6020026020010151905060008061105e8b898987818110610b1557610b156138a5565b9150915061106e84838389612180565b8a61107881613823565b9b5050505050808061108990613823565b91505061101f565b50505050505080806110a290613823565b915050610fc6565b50600080915060005b858110156111c357368989838181106110ce576110ce6138a5565b90506020028101906110e091906138ef565b90506110f26040820160208301613666565b6001600160a01b03167f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d60405160405180910390a23660006111348380613905565b90925090508060005b818110156111ab5761117f8885858481811061115b5761115b6138a5565b905060200281019061116d91906138bb565b8b8b81518110610bba57610bba6138a5565b6111899088613810565b96508761119581613823565b98505080806111a390613823565b91505061113d565b505050505080806111bb90613823565b9150506110b3565b506040516000907f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d908290a26111f98682612463565b5050505050610beb6001600255565b8315801561121e57506001600160a01b0383163b155b1561126b5760405162461bcd60e51b815260206004820152601960248201527f41413230206163636f756e74206e6f74206465706c6f796564000000000000006044820152606401610669565b601481106112e35760006112826014828486613b79565b61128b91613ba3565b60601c9050803b6000036112e15760405162461bcd60e51b815260206004820152601b60248201527f41413330207061796d6173746572206e6f74206465706c6f79656400000000006044820152606401610669565b505b60405162461bcd60e51b81526020600482015260006024820152604401610669565b604051632b870d1b60e11b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063570e1a36906113569086908690600401613bd8565b6020604051808303816000875af1158015611375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113999190613bec565b604051633653dc0360e11b81526001600160a01b0382166004820152909150602401610669565b60006113cb8261255c565b6040805160208101929092523090820152466060820152608001604051602081830303815290604052805190602001209050919050565b3360009081526020819052604081206001810154909163ffffffff909116900361146e5760405162461bcd60e51b815260206004820152600a60248201527f6e6f74207374616b6564000000000000000000000000000000000000000000006044820152606401610669565b8054600160701b900460ff166114c65760405162461bcd60e51b815260206004820152601160248201527f616c726561647920756e7374616b696e670000000000000000000000000000006044820152606401610669565b60018101546000906114de9063ffffffff1642613c09565b60018301805469ffffffffffff00000000191664010000000065ffffffffffff84169081029190911790915583546eff00000000000000000000000000001916845560405190815290915033907ffa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a906020016105ff565b3360009081526020819052604090208054600160781b90046001600160701b0316806115c35760405162461bcd60e51b815260206004820152601460248201527f4e6f207374616b6520746f2077697468647261770000000000000000000000006044820152606401610669565b6001820154640100000000900465ffffffffffff166116245760405162461bcd60e51b815260206004820152601d60248201527f6d7573742063616c6c20756e6c6f636b5374616b6528292066697273740000006044820152606401610669565b60018201544264010000000090910465ffffffffffff1611156116895760405162461bcd60e51b815260206004820152601b60248201527f5374616b65207769746864726177616c206973206e6f742064756500000000006044820152606401610669565b60018201805469ffffffffffffffffffff1916905581547fffffff0000000000000000000000000000ffffffffffffffffffffffffffffff168255604080516001600160a01b03851681526020810183905233917fb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda3910160405180910390a26000836001600160a01b03168260405160006040518083038185875af1925050503d8060008114611755576040519150601f19603f3d011682016040523d82523d6000602084013e61175a565b606091505b5050905080610d785760405162461bcd60e51b815260206004820152601860248201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152606401610669565b6117b36131d2565b6117bc85612575565b6000806117cb60008885611f95565b9150915060006117db838361264f565b90506117e643600052565b60006117f460008a8761232e565b90506117ff43600052565b600060606001600160a01b038a161561187557896001600160a01b0316898960405161182c929190613c2f565b6000604051808303816000865af19150503d8060008114611869576040519150601f19603f3d011682016040523d82523d6000602084013e61186e565b606091505b5090925090505b866080015183856020015186604001518585604051630116f59360e71b815260040161066996959493929190613c3f565b6118ae6131d2565b6118b782612575565b6000806118c660008585611f95565b845160a00151604080518082018252600080825260208083018281526001600160a01b03958616835282825284832080546001600160701b03600160781b918290048116875260019283015463ffffffff9081169094528d51518851808a018a5287815280870188815291909a1687528686528887208054939093049091168952910154909116905283518085019094528184528301529395509193509036600061197460408a018a61394f565b90925090506000601482101561198b5760006119a6565b611999601460008486613b79565b6119a291613ba3565b60601c5b604080518082018252600080825260208083018281526001600160a01b0386168352908290529290208054600160781b90046001600160701b031682526001015463ffffffff1690915290915093505050506000611a04868661264f565b9050600081600001519050600060016001600160a01b0316826001600160a01b031614905060006040518060c001604052808b6080015181526020018b6040015181526020018315158152602001856020015165ffffffffffff168152602001856040015165ffffffffffff168152602001611a818c6060015190565b905290506001600160a01b03831615801590611aa757506001600160a01b038316600114155b15611b27576040805180820182526001600160a01b0385168082528251808401845260008082526020808301828152938252818152908590208054600160781b90046001600160701b031683526001015463ffffffff16909252908201529051633ebb2d3960e21b8152610669908390899089908c908690600401613ce1565b8086868960405163e0cff05f60e01b81526004016106699493929190613d61565b6001600160a01b03821660009081526020819052604081208054909190611b799084906001600160701b0316613810565b90506001600160701b03811115611bd25760405162461bcd60e51b815260206004820152601060248201527f6465706f736974206f766572666c6f77000000000000000000000000000000006044820152606401610669565b81546dffffffffffffffffffffffffffff19166001600160701b03919091161790555050565b6000806000845160208601878987f195945050505050565b60603d82811115611c1e5750815b604051602082018101604052818152816000602083013e9392505050565b6000805a855190915060009081611c528261271b565b60a08301519091506001600160a01b038116611c715782519350611e23565b809350600088511115611e2357868202955060028a6002811115611c9757611c97613db8565b14611d0957606083015160405163a9a2340960e01b81526001600160a01b0383169163a9a2340991611cd1908e908d908c90600401613dce565b600060405180830381600088803b158015611ceb57600080fd5b5087f1158015611cff573d6000803e3d6000fd5b5050505050611e23565b606083015160405163a9a2340960e01b81526001600160a01b0383169163a9a2340991611d3e908e908d908c90600401613dce565b600060405180830381600088803b158015611d5857600080fd5b5087f193505050508015611d6a575060015b611e2357611d76613e15565b806308c379a003611dcf5750611d8a613e31565b80611d955750611dd1565b8b81604051602001611da79190613ebb565b60408051601f1981840301815290829052631101335b60e11b8252610669929160040161388c565b505b8a604051631101335b60e11b81526004016106699181526040602082018190526012908201527f4141353020706f73744f70207265766572740000000000000000000000000000606082015260800190565b5a85038701965081870295508589604001511015611e8c578a604051631101335b60e11b815260040161066991815260406020808301829052908201527f414135312070726566756e642062656c6f772061637475616c476173436f7374606082015260800190565b6040890151869003611e9e8582611b48565b6000808c6002811115611eb357611eb3613db8565b1490508460a001516001600160a01b031685600001516001600160a01b03168c602001517f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f8860200151858d8f604051611f26949392919093845291151560208401526040830152606082015260800190565b60405180910390a45050505050505095945050505050565b6002805403611f8f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610669565b60028055565b60008060005a8451909150611faa868261274b565b611fb3866113c0565b6020860152604081015160608201516080830151171760e087013517610100870135176effffffffffffffffffffffffffffff8111156120355760405162461bcd60e51b815260206004820152601860248201527f41413934206761732076616c756573206f766572666c6f7700000000000000006044820152606401610669565b60008061204184612844565b905061204f8a8a8a84612891565b855160208701519199509193506120669190612ad7565b6120bc5789604051631101335b60e11b8152600401610669918152604060208201819052601a908201527f4141323520696e76616c6964206163636f756e74206e6f6e6365000000000000606082015260800190565b6120c543600052565b60a08401516060906001600160a01b0316156120ed576120e88b8b8b8587612b25565b975090505b60005a87039050808b60a001351015612152578b604051631101335b60e11b8152600401610669918152604060208201819052601e908201527f41413430206f76657220766572696669636174696f6e4761734c696d69740000606082015260800190565b60408a018390528160608b015260c08b01355a8803018a608001818152505050505050505050935093915050565b60008061218c85612d4f565b91509150816001600160a01b0316836001600160a01b0316146121fb5785604051631101335b60e11b81526004016106699181526040602082018190526014908201527f41413234207369676e6174757265206572726f72000000000000000000000000606082015260800190565b80156122535785604051631101335b60e11b81526004016106699181526040602082018190526017908201527f414132322065787069726564206f72206e6f7420647565000000000000000000606082015260800190565b600061225e85612d4f565b925090506001600160a01b038116156122c35786604051631101335b60e11b81526004016106699181526040602082018190526014908201527f41413334207369676e6174757265206572726f72000000000000000000000000606082015260800190565b81156123255786604051631101335b60e11b81526004016106699181526040602082018190526021908201527f41413332207061796d61737465722065787069726564206f72206e6f742064756060820152606560f81b608082015260a00190565b50505050505050565b6000805a90506000612341846060015190565b905030631d732756612356606088018861394f565b87856040518563ffffffff1660e01b81526004016123779493929190613f00565b6020604051808303816000875af19250505080156123b2575060408051601f3d908101601f191682019092526123af91810190613fb4565b60015b61245757600060206000803e50600051632152215360e01b81016124225786604051631101335b60e11b8152600401610669918152604060208201819052600f908201527f41413935206f7574206f66206761730000000000000000000000000000000000606082015260800190565b600085608001515a61243490866138dc565b61243e9190613810565b905061244e886002888685611c3c565b9450505061245a565b92505b50509392505050565b6001600160a01b0382166124b95760405162461bcd60e51b815260206004820152601860248201527f4141393020696e76616c69642062656e656669636961727900000000000000006044820152606401610669565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114612506576040519150601f19603f3d011682016040523d82523d6000602084013e61250b565b606091505b5050905080610beb5760405162461bcd60e51b815260206004820152601f60248201527f41413931206661696c65642073656e6420746f2062656e6566696369617279006044820152606401610669565b600061256782612da2565b805190602001209050919050565b3063957122ab612588604084018461394f565b6125956020860186613666565b6125a361012087018761394f565b6040518663ffffffff1660e01b81526004016125c3959493929190613fcd565b60006040518083038186803b1580156125db57600080fd5b505afa9250505080156125ec575060015b61264c576125f8613e15565b806308c379a003612640575061260c613e31565b806126175750612642565b80511561263c57600081604051631101335b60e11b815260040161066992919061388c565b5050565b505b3d6000803e3d6000fd5b50565b604080516060810182526000808252602082018190529181018290529061267584612e75565b9050600061268284612e75565b82519091506001600160a01b038116612699575080515b602080840151604080860151928501519085015191929165ffffffffffff80831690851610156126c7578193505b8065ffffffffffff168365ffffffffffff1611156126e3578092505b5050604080516060810182526001600160a01b03909416845265ffffffffffff92831660208501529116908201529250505092915050565b60c081015160e082015160009190808203612737575092915050565b61274382488301612ee6565b949350505050565b6127586020830183613666565b6001600160a01b0316815260208083013590820152608080830135604083015260a0830135606083015260c0808401359183019190915260e08084013591830191909152610100830135908201523660006127b761012085018561394f565b909250905080156128375760148110156128135760405162461bcd60e51b815260206004820152601d60248201527f4141393320696e76616c6964207061796d6173746572416e64446174610000006044820152606401610669565b612821601460008385613b79565b61282a91613ba3565b60601c60a0840152610d78565b600060a084015250505050565b60a081015160009081906001600160a01b0316612862576001612865565b60035b60ff16905060008360800151828560600151028560400151010190508360c00151810292505050919050565b60008060005a85518051919250906128b689886128b160408c018c61394f565b612efe565b60a08201516128c443600052565b60006001600160a01b03821661290c576001600160a01b0383166000908152602081905260409020546001600160701b031688811161290557808903612908565b60005b9150505b606084015160208a0151604051633a871cdd60e01b81526001600160a01b03861692633a871cdd929091612946918f918790600401614003565b60206040518083038160008887f193505050508015612982575060408051601f3d908101601f1916820190925261297f91810190613fb4565b60015b612a135761298e613e15565b806308c379a0036129bf57506129a2613e31565b806129ad57506129c1565b8b81604051602001611da79190614028565b505b8a604051631101335b60e11b81526004016106699181526040602082018190526016908201527f4141323320726576657274656420286f72204f4f472900000000000000000000606082015260800190565b95506001600160a01b038216612ac4576001600160a01b038316600090815260208190526040902080546001600160701b0316808a1115612aa0578c604051631101335b60e11b81526004016106699181526040602082018190526017908201527f41413231206469646e2774207061792070726566756e64000000000000000000606082015260800190565b81546dffffffffffffffffffffffffffff1916908a90036001600160701b03161790555b5a85039650505050505094509492505050565b6001600160a01b038216600090815260016020908152604080832084821c808552925282208054849167ffffffffffffffff8316919085612b1783613823565b909155501495945050505050565b82516060818101519091600091848111612b815760405162461bcd60e51b815260206004820152601f60248201527f4141343120746f6f206c6974746c6520766572696669636174696f6e476173006044820152606401610669565b60a08201516001600160a01b038116600090815260208190526040902080548784039291906001600160701b031689811015612c09578c604051631101335b60e11b8152600401610669918152604060208201819052601e908201527f41413331207061796d6173746572206465706f73697420746f6f206c6f770000606082015260800190565b8981038260000160006101000a8154816001600160701b0302191690836001600160701b03160217905550826001600160a01b031663f465c77e858e8e602001518e6040518563ffffffff1660e01b8152600401612c6993929190614003565b60006040518083038160008887f193505050508015612caa57506040513d6000823e601f3d908101601f19168201604052612ca7919081019061406d565b60015b612d3b57612cb6613e15565b806308c379a003612ce75750612cca613e31565b80612cd55750612ce9565b8d81604051602001611da791906140f9565b505b8c604051631101335b60e11b81526004016106699181526040602082018190526016908201527f4141333320726576657274656420286f72204f4f472900000000000000000000606082015260800190565b909e909d509b505050505050505050505050565b60008082600003612d6557506000928392509050565b6000612d7084612e75565b9050806040015165ffffffffffff16421180612d975750806020015165ffffffffffff1642105b905194909350915050565b6060813560208301356000612dc2612dbd604087018761394f565b6131bf565b90506000612dd6612dbd606088018861394f565b9050608086013560a087013560c088013560e08901356101008a01356000612e05612dbd6101208e018e61394f565b604080516001600160a01b039c909c1660208d01528b81019a909a5260608b019890985250608089019590955260a088019390935260c087019190915260e08601526101008501526101208401526101408084019190915281518084039091018152610160909201905292915050565b60408051606081018252600080825260208201819052918101919091528160a081901c65ffffffffffff8116600003612eb1575065ffffffffffff5b604080516060810182526001600160a01b03909316835260d09490941c602083015265ffffffffffff16928101929092525090565b6000818310612ef55781612ef7565b825b9392505050565b8015610d78578251516001600160a01b0381163b15612f695784604051631101335b60e11b8152600401610669918152604060208201819052601f908201527f414131302073656e64657220616c726561647920636f6e737472756374656400606082015260800190565b835160600151604051632b870d1b60e11b81526000916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163570e1a369190612fc19088908890600401613bd8565b60206040518083038160008887f1158015612fe0573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906130059190613bec565b90506001600160a01b0381166130675785604051631101335b60e11b8152600401610669918152604060208201819052601b908201527f4141313320696e6974436f6465206661696c6564206f72204f4f470000000000606082015260800190565b816001600160a01b0316816001600160a01b0316146130d15785604051631101335b60e11b815260040161066991815260406020808301829052908201527f4141313420696e6974436f6465206d7573742072657475726e2073656e646572606082015260800190565b806001600160a01b03163b6000036131345785604051631101335b60e11b815260040161066991815260406020808301829052908201527f4141313520696e6974436f6465206d757374206372656174652073656e646572606082015260800190565b60006131436014828688613b79565b61314c91613ba3565b60601c9050826001600160a01b031686602001517fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d83896000015160a001516040516131ae9291906001600160a01b0392831681529116602082015260400190565b60405180910390a350505050505050565b6000604051828085833790209392505050565b6040518060a0016040528061323760405180610100016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8152602001600080191681526020016000815260200160008152602001600081525090565b60006020828403121561326e57600080fd5b813563ffffffff81168114612ef757600080fd5b80356001600160c01b038116811461329957600080fd5b919050565b6000602082840312156132b057600080fd5b612ef782613282565b6001600160a01b038116811461264c57600080fd5b8035613299816132b9565b600080604083850312156132ec57600080fd5b82356132f7816132b9565b915061330560208401613282565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b60a0810181811067ffffffffffffffff821117156133445761334461330e565b60405250565b610100810181811067ffffffffffffffff821117156133445761334461330e565b601f8201601f1916810167ffffffffffffffff811182821017156133915761339161330e565b6040525050565b600067ffffffffffffffff8211156133b2576133b261330e565b50601f01601f191660200190565b60008183036101808112156133d457600080fd5b6040516133e081613324565b809250610100808312156133f357600080fd5b60405192506134018361334a565b61340a856132ce565b83526020850135602084015260408501356040840152606085013560608401526080850135608084015261344060a086016132ce565b60a084015260c085013560c084015260e085013560e084015282825280850135602083015250610120840135604082015261014084013560608201526101608401356080820152505092915050565b60008083601f8401126134a157600080fd5b50813567ffffffffffffffff8111156134b957600080fd5b6020830191508360208285010111156134d157600080fd5b9250929050565b6000806000806101c085870312156134ef57600080fd5b843567ffffffffffffffff8082111561350757600080fd5b818701915087601f83011261351b57600080fd5b813561352681613398565b604051613533828261336b565b8281528a602084870101111561354857600080fd5b8260208601602083013760006020848301015280985050505061356e88602089016133c0565b94506101a087013591508082111561358557600080fd5b506135928782880161348f565b95989497509550505050565b60008083601f8401126135b057600080fd5b50813567ffffffffffffffff8111156135c857600080fd5b6020830191508360208260051b85010111156134d157600080fd5b6000806000604084860312156135f857600080fd5b833567ffffffffffffffff81111561360f57600080fd5b61361b8682870161359e565b909450925050602084013561362f816132b9565b809150509250925092565b6000806040838503121561364d57600080fd5b8235613658816132b9565b946020939093013593505050565b60006020828403121561367857600080fd5b8135612ef7816132b9565b60008060008060006060868803121561369b57600080fd5b853567ffffffffffffffff808211156136b357600080fd5b6136bf89838a0161348f565b9097509550602088013591506136d4826132b9565b909350604087013590808211156136ea57600080fd5b506136f78882890161348f565b969995985093965092949392505050565b6000806020838503121561371b57600080fd5b823567ffffffffffffffff81111561373257600080fd5b61373e8582860161348f565b90969095509350505050565b6000610160828403121561375d57600080fd5b50919050565b60006020828403121561377557600080fd5b813567ffffffffffffffff81111561378c57600080fd5b6127438482850161374a565b600080600080606085870312156137ae57600080fd5b843567ffffffffffffffff808211156137c657600080fd5b6137d28883890161374a565b9550602087013591506137e4826132b9565b9093506040860135908082111561358557600080fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610dbe57610dbe6137fa565b600060018201613835576138356137fa565b5060010190565b60005b8381101561385757818101518382015260200161383f565b50506000910152565b6000815180845261387881602086016020860161383c565b601f01601f19169290920160200192915050565b8281526040602082015260006127436040830184613860565b634e487b7160e01b600052603260045260246000fd5b6000823561015e198336030181126138d257600080fd5b9190910192915050565b81810381811115610dbe57610dbe6137fa565b60008235605e198336030181126138d257600080fd5b6000808335601e1984360301811261391c57600080fd5b83018035915067ffffffffffffffff82111561393757600080fd5b6020019150600581901b36038213156134d157600080fd5b6000808335601e1984360301811261396657600080fd5b83018035915067ffffffffffffffff82111561398157600080fd5b6020019150368190038213156134d157600080fd5b6000808335601e198436030181126139ad57600080fd5b830160208101925035905067ffffffffffffffff8111156139cd57600080fd5b8036038213156134d157600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000610160613a2484613a17856132ce565b6001600160a01b03169052565b60208301356020850152613a3b6040840184613996565b826040870152613a4e83870182846139dc565b92505050613a5f6060840184613996565b8583036060870152613a728382846139dc565b925050506080830135608085015260a083013560a085015260c083013560c085015260e083013560e0850152610100808401358186015250610120613ab981850185613996565b86840383880152613acb8482846139dc565b9350505050610140613adf81850185613996565b86840383880152613af18482846139dc565b979650505050505050565b6040808252810184905260006060600586901b830181019083018783805b89811015613b6257868503605f190184528235368c900361015e19018112613b40578283fd5b613b4c868d8301613a05565b9550506020938401939290920191600101613b1a565b505050508281036020840152613af18185876139dc565b60008085851115613b8957600080fd5b83861115613b9657600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff198135818116916014851015613bd05780818660140360031b1b83161692505b505092915050565b6020815260006127436020830184866139dc565b600060208284031215613bfe57600080fd5b8151612ef7816132b9565b65ffffffffffff818116838216019080821115613c2857613c286137fa565b5092915050565b8183823760009101908152919050565b868152856020820152600065ffffffffffff8087166040840152808616606084015250831515608083015260c060a0830152613c7e60c0830184613860565b98975050505050505050565b80518252602081015160208301526040810151151560408301526000606082015165ffffffffffff8082166060860152806080850151166080860152505060a082015160c060a085015261274360c0850182613860565b6000610140808352613cf581840189613c8a565b915050613d0f602083018780518252602090810151910152565b845160608301526020948501516080830152835160a08301529284015160c082015281516001600160a01b031660e0820152908301518051610100830152909201516101209092019190915292915050565b60e081526000613d7460e0830187613c8a565b9050613d8d602083018680518252602090810151910152565b8351606083015260208401516080830152825160a0830152602083015160c083015295945050505050565b634e487b7160e01b600052602160045260246000fd5b600060038510613dee57634e487b7160e01b600052602160045260246000fd5b84825260606020830152613e056060830185613860565b9050826040830152949350505050565b600060033d1115613e2e5760046000803e5060005160e01c5b90565b600060443d1015613e3f5790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715613e6f57505050505090565b8285019150815181811115613e875750505050505090565b843d8701016020828501011115613ea15750505050505090565b613eb06020828601018761336b565b509095945050505050565b7f4141353020706f73744f702072657665727465643a2000000000000000000000815260008251613ef381601685016020870161383c565b9190910160160192915050565b60006101c0808352613f1581840187896139dc565b905084516001600160a01b03808251166020860152602082015160408601526040820151606086015260608201516080860152608082015160a08601528060a08301511660c08601525060c081015160e085015260e08101516101008501525060208501516101208401526040850151610140840152606085015161016084015260808501516101808401528281036101a0840152613af18185613860565b600060208284031215613fc657600080fd5b5051919050565b606081526000613fe16060830187896139dc565b6001600160a01b03861660208401528281036040840152613c7e8185876139dc565b6060815260006140166060830186613a05565b60208301949094525060400152919050565b7f414132332072657665727465643a20000000000000000000000000000000000081526000825161406081600f85016020870161383c565b91909101600f0192915050565b6000806040838503121561408057600080fd5b825167ffffffffffffffff81111561409757600080fd5b8301601f810185136140a857600080fd5b80516140b381613398565b6040516140c0828261336b565b8281528760208486010111156140d557600080fd5b6140e683602083016020870161383c565b6020969096015195979596505050505050565b7f414133332072657665727465643a20000000000000000000000000000000000081526000825161406081600f85016020870161383c56fea2646970667358221220813f4757f4ef71961fa15092c87dd09e51d18a811071bfb5971b226da60db25c64736f6c63430008110033608060405234801561001057600080fd5b50610200806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063570e1a3614610030575b600080fd5b61004361003e3660046100f9565b61006c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60008061007c601482858761016b565b61008591610195565b60601c90506000610099846014818861016b565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525084519495509360209350849250905082850182875af190506000519350806100f057600093505b50505092915050565b6000806020838503121561010c57600080fd5b823567ffffffffffffffff8082111561012457600080fd5b818501915085601f83011261013857600080fd5b81358181111561014757600080fd5b86602082850101111561015957600080fd5b60209290920196919550909350505050565b6000808585111561017b57600080fd5b8386111561018857600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff1981358181169160148510156101c25780818660140360031b1b83161692505b50509291505056fea26469706673582212202c1dc86959db52cf1bd05cd33b6c1388373718a7a07d81888acd893914ef08e864736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: ({
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
            internalType: string;
            name: string;
            type: string;
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
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): EntryPointInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EntryPoint;
}
