import { task } from 'hardhat/config'

export default async () => {
  task('balance', 'Prints an account\'s balance')
    .addPositionalParam('account', 'The account\'s address')
    .setAction(async (taskArgs, { ethers }) => {
      const account = ethers.utils.getAddress(taskArgs.account)
      const balance = await ethers.provider.getBalance(account)
      console.log(ethers.utils.formatUnits(balance, 'ether'), 'ETH')
    })
}
