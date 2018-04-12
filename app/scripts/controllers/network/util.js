const {
  ROPSTEN,
  RINKEBY,
  KOVAN,
  MAINNET,
  ROPSTEN_CODE,
  RINKEYBY_CODE,
  KOVAN_CODE,
  ROPSTEN_DISPLAY_NAME,
  RINKEBY_DISPLAY_NAME,
  KOVAN_DISPLAY_NAME,
  MAINNET_DISPLAY_NAME,
  MAINET_RPC_URL,
  ROPSTEN_RPC_URL,
  KOVAN_RPC_URL,
  RINKEBY_RPC_URL,
  LOCALHOST_RPC_URL,
  MAINET_RPC_URL_BETA,
  ROPSTEN_RPC_URL_BETA,
  KOVAN_RPC_URL_BETA,
  RINKEBY_RPC_URL_BETA,
  OLD_UI_NETWORK_TYPE,
  BETA_UI_NETWORK_TYPE,
} = require('./enums')

const networkToNameMap = {
  [ROPSTEN]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [ROPSTEN_CODE]: ROPSTEN_DISPLAY_NAME,
  [RINKEYBY_CODE]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CODE]: KOVAN_DISPLAY_NAME,
}

const networkEndpointsMap = {
  [OLD_UI_NETWORK_TYPE]: {
    localhost: LOCALHOST_RPC_URL,
    mainnet: MAINET_RPC_URL,
    ropsten: ROPSTEN_RPC_URL,
    kovan: KOVAN_RPC_URL,
    rinkeby: RINKEBY_RPC_URL,
  },
  [BETA_UI_NETWORK_TYPE]: {
    localhost: LOCALHOST_RPC_URL,
    mainnet: MAINET_RPC_URL_BETA,
    ropsten: ROPSTEN_RPC_URL_BETA,
    kovan: KOVAN_RPC_URL_BETA,
    rinkeby: RINKEBY_RPC_URL_BETA,
  },
}

const getNetworkDisplayName = key => networkToNameMap[key]

const getNetworkEndpoints = (networkType = OLD_UI_NETWORK_TYPE) => networkEndpointsMap[networkType]

module.exports = {
  getNetworkDisplayName,
  getNetworkEndpoints,
}
