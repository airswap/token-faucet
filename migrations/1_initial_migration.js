require('dotenv').config()
const ERC20TokenFaucet = artifacts.require('ERC20TokenFaucet')

module.exports = (deployer) => {
  console.log('Trying to deploy')
  const ERC20_TOKEN_ADDRESS = 'INSERT ADDRESS HERE' // AST
  const maxWithdrawalAmount = 50000000 // 5000 ast since decimal = 4
  deployer.deploy(ERC20TokenFaucet, maxWithdrawalAmount, ERC20_TOKEN_ADDRESS)
}
