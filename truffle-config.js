require('dotenv').config()
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKeys = [process.env.PRIV_KEY]; // private keys
const providerStored = new HDWalletProvider(privKeys, "https://rinkeby.infura.io/v3/" + process.env.INURA_KEY);

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
        provider: providerStored,
        from: process.env.PUBLIC_KEY,
        network_id: '4', // eslint-disable-line camelcase
        gasPrice: 16950000000,
        gas: 4898551
    }
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.11",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       }
      }
    }
  }
}
