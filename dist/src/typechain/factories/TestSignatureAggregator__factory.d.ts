import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestSignatureAggregator, TestSignatureAggregatorInterface } from "../TestSignatureAggregator";
export declare class TestSignatureAggregator__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestSignatureAggregator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestSignatureAggregator;
    connect(signer: Signer): TestSignatureAggregator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061060c806100206000396000f3fe60806040526004361061003f5760003560e01c8063275e2d7914610044578063451711591461007a57806364c530cd1461008f578063e3563a4f146100bd575b600080fd5b34801561005057600080fd5b5061006461005f36600461037f565b6100dd565b60405161007191906103c1565b60405180910390f35b61008d61008836600461040f565b610157565b005b34801561009b57600080fd5b506100646100aa36600461046a565b5060408051602081019091526000815290565b3480156100c957600080fd5b5061008d6100d83660046104ad565b6101c8565b60606000805b83811015610131578484828181106100fd576100fd610544565b905060200281019061010f919061055a565b61011d906020013583610591565b915080610129816105a4565b9150506100e3565b506040805160208101839052016040516020818303038152906040529150505b92915050565b604051621cb65b60e51b815263ffffffff8216600482015273ffffffffffffffffffffffffffffffffffffffff831690630396cb609034906024016000604051808303818588803b1580156101ab57600080fd5b505af11580156101bf573d6000803e3d6000fd5b50505050505050565b6000805b848110156102205760008686838181106101e8576101e8610544565b90506020028101906101fa919061055a565b60200135905061020a8184610591565b9250508080610218906105a4565b9150506101cc565b506020821461029c5760405162461bcd60e51b815260206004820152602860248201527f546573745369676e617475726556616c696461746f723a20736967206d75737460448201527f2062652075696e7400000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60006102aa838501856105bd565b905081811461032b5760405162461bcd60e51b815260206004820152604160248201527f546573745369676e617475726556616c696461746f723a20616767726567617460448201527f6564207369676e6174757265206d69736d6174636820286e6f6e63652073756d6064820152602960f81b608482015260a401610293565b505050505050565b60008083601f84011261034557600080fd5b50813567ffffffffffffffff81111561035d57600080fd5b6020830191508360208260051b850101111561037857600080fd5b9250929050565b6000806020838503121561039257600080fd5b823567ffffffffffffffff8111156103a957600080fd5b6103b585828601610333565b90969095509350505050565b600060208083528351808285015260005b818110156103ee578581018301518582016040015282016103d2565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561042257600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461044657600080fd5b9150602083013563ffffffff8116811461045f57600080fd5b809150509250929050565b60006020828403121561047c57600080fd5b813567ffffffffffffffff81111561049357600080fd5b820161016081850312156104a657600080fd5b9392505050565b600080600080604085870312156104c357600080fd5b843567ffffffffffffffff808211156104db57600080fd5b6104e788838901610333565b9096509450602087013591508082111561050057600080fd5b818701915087601f83011261051457600080fd5b81358181111561052357600080fd5b88602082850101111561053557600080fd5b95989497505060200194505050565b634e487b7160e01b600052603260045260246000fd5b6000823561015e1983360301811261057157600080fd5b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b808201808211156101515761015161057b565b6000600182016105b6576105b661057b565b5060010190565b6000602082840312156105cf57600080fd5b503591905056fea26469706673582212205df8d903fbdaae2bc14936b4efcb5f694042c921ed4753072ddaa790a523e01364736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TestSignatureAggregatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestSignatureAggregator;
}
