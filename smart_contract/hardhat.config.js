require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity : "0.8.0",
  networks: {
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/VqAZFma4LktM231DpRhrqlgJnqSj9GmU',
      accounts: ['e2c2b9bc056aade3c6e242f2b1fbbe0efee96966f14d65060098bf4ad2c141e0']
    }
   }
}