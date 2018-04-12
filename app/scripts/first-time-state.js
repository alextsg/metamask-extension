// test and development environment variables
const env = process.env.METAMASK_ENV
const METAMASK_DEBUG = process.env.METAMASK_DEBUG
const { DEFAULT_NETWORK, MAINNET } = require('./controllers/network/enums')

//
// The default state of MetaMask
//
module.exports = {
  config: {},
  NetworkController: {
    provider: {
      type: (METAMASK_DEBUG || env === 'test') ? DEFAULT_NETWORK : MAINNET,
    },
  },
}
