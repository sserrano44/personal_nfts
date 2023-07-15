require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require('@openzeppelin/hardhat-upgrades');

module.exports = {
  solidity: "0.8.4",
  networks: {
    ethereum: {
      url: process.env.ALCHEMY_ETHEREUM_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    polygon: {
      url: process.env.ALCHEMY_POLYGON_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};
