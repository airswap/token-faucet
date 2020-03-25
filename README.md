## Token Faucet

This repository contains a ERC20TokenFaucet which allows anyone to use this to distribute ERC20 tokens for testing. The distributor of the tokens is hardcoded. 

The current deployed contracts is for AST Faucets which allows users to receive up to 5000 AST per address. The url is https://ast-faucet-ui.development.airswap.io/.

### Rinkeby:

| Contract Name   | Address                                   |
| :-------------- | :-------------------------------------------- |
| `Faucet Rinkeby Address`   | 0xD2006b3452Ff12ce48D018ff48E0Df76bCA6eE04   |
| `AST Rinkeby Address`    | 0xcc1cbd4f67cceb7c001bd4adf98451237a193ff8            |
| `AST Wallet Address`  | 0x7d74C75dA6cDfB171f84f6D5346D2e7269F0cc00       |

Max Withdrawal Amount = 5000 AST or uint256 50000000

### Goerli:
| Contract Name   | Address                                   |
| :-------------- | :-------------------------------------------- |
| `Faucet Rinkeby Address`   | 0x03ad175CE5256ed2c670C1E6D4B58Ed79E636A31   |
| `AST Rinkeby Address`    | 0x1a1ec25DC08e98e5E93F1104B5e5cdD298707d31            |
| `AST Wallet Address`  | 0x7d74C75dA6cDfB171f84f6D5346D2e7269F0cc00       |

Max Withdrawal Amount = 5000 AST or uint256 50000000

### Kovan 
| Contract Name   | Address                                   |
| :-------------- | :-------------------------------------------- |
| `Faucet Rinkeby Address`   | 0xc628A32BBD438908dCB5a7398B72F5C0e9e0D4e1   |
| `AST Rinkeby Address`    | 0x1a1ec25DC08e98e5E93F1104B5e5cdD298707d31            |
| `AST Wallet Address`  | 0x7d74C75dA6cDfB171f84f6D5346D2e7269F0cc00       |

Max Withdrawal Amount = 5000 AST or uint256 50000000

This is a truffle built project. To get started just run `yarn` or `npm`.

To do a migration, make sure to store any environment variables in `.env`.

### Common Issues if the faucet is not working:
* Check the user of the contract has less than 5000 AST.
* Check the AST balance of the AST Wallet Address has sufficient balance.
* Check the allowance of the AST Wallet Address for Faucet Contract Address.

### AirSwap Resources

- Docs → https://docs.airswap.io/
- Website → https://www.airswap.io/
- Blog → https://blog.airswap.io/
- Support → https://support.airswap.io/