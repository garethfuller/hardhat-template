import { task } from 'hardhat/config'

export default async () => { 
  task('accounts', 'Prints the list of accounts', async (_, { ethers }) => {
    const accounts = await ethers.getSigners()

    for (const account of accounts) {
      console.log(account.address)
    }
  })
}
