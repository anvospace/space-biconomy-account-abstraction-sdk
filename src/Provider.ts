import { JsonRpcProvider } from '@ethersproject/providers'

import { EntryPoint__factory, SimpleAccountFactory__factory } from './typechain'

import { ClientConfig } from './ClientConfig'
import { SimpleAccountAPI } from './SimpleAccountAPI'
import { ERC4337EthersProvider } from './ERC4337EthersProvider'
import { HttpRpcClient } from './HttpRpcClient'
import { DeterministicDeployer } from './DeterministicDeployer'
import { Signer } from '@ethersproject/abstract-signer'
import Debug from 'debug'

const debug = Debug('aa.wrapProvider')

/**
 * wrap an existing provider to tunnel requests through Account Abstraction.
 * @param originalProvider the normal provider
 * @param config see ClientConfig for more info
 * @param originalSigner use this signer as the owner. of this wallet. By default, use the provider's signer
 */
export async function wrapProvider (
  originalProvider: JsonRpcProvider,
  config: ClientConfig,
  originalSigner: Signer = originalProvider.getSigner()
): Promise<ERC4337EthersProvider> {
  const entryPoint = EntryPoint__factory.connect(config.entryPointAddress, originalProvider)
  // Initial SimpleAccount instance is not deployed and exists just for the interface
  const detDeployer = new DeterministicDeployer(originalProvider)
  // Assuming detDeployer is an instance of DeterministicDeployer
const SimpleAccountFactoryFactory = new SimpleAccountFactory__factory(originalSigner);
const salt = 0;  // Define your salt value
const params: any[] | undefined = [];  // Define your constructor parameters if any

const SimpleAccountFactory = await detDeployer.deterministicDeploy(
  SimpleAccountFactoryFactory,
  salt,
  params
);

  
    const smartAccountAPI = new SimpleAccountAPI({
    provider: originalProvider,
    entryPointAddress: entryPoint.address,
    owner: originalSigner,
    factoryAddress: SimpleAccountFactory,
    paymasterAPI: config.paymasterAPI
  })
  debug('config=', config)
  const chainId = await originalProvider.getNetwork().then(net => net.chainId)
  const httpRpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPointAddress, chainId)
  return await new ERC4337EthersProvider(
    chainId,
    config,
    originalSigner,
    originalProvider,
    httpRpcClient,
    entryPoint,
    smartAccountAPI
  ).init()
}
