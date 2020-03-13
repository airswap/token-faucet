## Token Faucet

Anyone can use this to distribute ERC20 tokens for testing.

Current deployed contract is for an AST Rinkeby Faucet which allows users to get up to 5000 AST. The url is https://ast-faucet-ui.development.airswap.io/.

Rinkeby:
Faucet Rinkeby Address: 0xD2006b3452Ff12ce48D018ff48E0Df76bCA6eE04
AST Rinkeby Address: 0xcc1cbd4f67cceb7c001bd4adf98451237a193ff8
AST Wallet Address: 0x7d74C75dA6cDfB171f84f6D5346D2e7269F0cc00
Max Withdrawal Amount = 5000 AST or uint256 50000000

Kovan:
Faucet Contract Address: 0xD2006b3452Ff12ce48D018ff48E0Df76bCA6eE04
AST Kovan Address: 0x3E0Bc0D9bF8d015DcEc159fB6ee8f22a9eB7a460
AST Wallet Address: 0x7d74C75dA6cDfB171f84f6D5346D2e7269F0cc00
Max Withdrawal Amount = 5000 AST or uint256 50000000

Goerli:
Faucet Contract Address: 0xD2006b3452Ff12ce48D018ff48E0Df76bCA6eE04
AST Goerli Address: 0x3E0Bc0D9bF8d015DcEc159fB6ee8f22a9eB7a460
AST Wallet Address: 0x7d74C75dA6cDfB171f84f6D5346D2e7269F0cc00
Max Withdrawal Amount = 5000 AST or uint256 50000000

This is a truffle built project. To get started just run `yarn`. 

To do a migration, make sure to store any environment variables in `.env`.

Common Issues if the faucet is not working:
* Check the user of the contract has less than 5000 AST.
* Check the AST Rinkeby balance of the AST Wallet Address
* Check the allowance of the AST Wallet Address for Faucet Contract Address.

