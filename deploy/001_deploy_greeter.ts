import {HardhatRuntimeEnvironment} from 'hardhat/types'
import {DeployFunction} from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const [deployer] = await hre.ethers.getSigners()
  console.log('Deployer:', deployer.address)
  const balance = await deployer.getBalance()
  console.log('Deployer balance:', hre.ethers.utils.formatUnits(balance, 'ether'), 'ETH')

  const {deploy} = hre.deployments

  await deploy('Greeter', {
    from: deployer.address,
    args: ['Hello World!'],
    log: true
  })
}
export default func
