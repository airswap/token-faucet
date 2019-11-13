require('dotenv').config()
const ERC20TokenFaucet = artifacts.require("ERC20TokenFaucet");

module.exports = function(deployer) {
  const  = "0xcc1cbd4f67cceb7c001bd4adf98451237a193ff8" // AST in Rinkeby
  const  = 50000000 // 5000 ast since decimal = 4
  deployer.deploy(ERC20TokenFaucet, maxWithdrawalAmount, erc20Address, {from : process.env.PUBLIC_KEY});
};
