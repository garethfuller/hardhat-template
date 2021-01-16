import { task } from "hardhat/config"

export default async () => {
  task('send', 'Send ETH')
    .addParam('from', 'From address or account index')
    .addOptionalParam('to', 'To address or account index')
    .addOptionalParam('amount', 'Amount to send in ether')
    .addOptionalParam('data', 'Data included in transaction')
    .addOptionalParam('gasPrice', 'Price you are willing to pay in gwei')
    .addOptionalParam('gasLimit', 'Limit of how much gas to spend')
    .setAction(async (taskArgs, { network, ethers }) => {
      const fromSigner = await ethers.provider.getSigner(taskArgs.from)
      const amount = taskArgs.amount ? taskArgs.amount.toString() : '0'
      const gasPrice = taskArgs.gasPrice ? taskArgs.gasPrice : '1.001'
      const gasLimit = taskArgs.gasLimit ? taskArgs.gasLimit : 24000

      const params = {
        from: taskArgs.from,
        to: taskArgs.to,
        value: ethers.utils.parseUnits(amount, 'ether').toHexString(),
        nonce: await fromSigner.getTransactionCount(),
        gasPrice: ethers.utils.parseUnits(gasPrice, 'gwei').toHexString(),
        gasLimit,
        chainId: network.config.chainId,
        data: undefined
      }

      if (taskArgs.data !== undefined) {
        params.data = taskArgs.data
        console.log(`Adding data to payload: ${params.data}`)
      }

      try {
        const txHash = await fromSigner.sendTransaction(params)
        console.log('Tx Hash:', txHash)
        return txHash
      } catch (error) {
        console.error(error)
      }
    })
}
