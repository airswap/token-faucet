require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider-privkey')
const privKeys = [process.env.PRIV_KEY] // private keys

module.exports = {
  contracts_directory: './flatten',
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    rinkeby: {
      provider: new HDWalletProvider(
        privKeys,
        'https://rinkeby.infura.io/v3/' + process.env.INFURA_KEY
      ),
      from: process.env.PUBLIC_KEY,
      network_id: '4', // eslint-disable-line camelcase
      gasPrice: 1695000000,
      gas: 4898551,
    },
    goerli: {
      provider: new HDWalletProvider(
        privKeys,
        'https://goerli.infura.io/v3/' + process.env.INFURA_KEY
      ),
      network_id: '5',
      gas: 5898551,
      gasPrice: 1300000000, // CHECK THE CURRENT GASPRICE
    },
    kovan: {
      provider: new HDWalletProvider(
        privKeys,
        'https://kovan.infura.io/v3/' + process.env.INFURA_KEY
      ),
      network_id: '42',
      gas: 5898551,
      gasPrice: 1100000000, // CHECK THE CURRENT GASPRICE
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.5.12', // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
      },
    },
  },
  plugins: ['truffle-verify', 'truffle-flatten'],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
}
