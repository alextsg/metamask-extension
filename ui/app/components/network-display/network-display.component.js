import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  MAINNET_CODE,
  ROPSTEN_CODE,
  RINKEYBY_CODE,
  KOVAN_CODE,
} from '../../../../app/scripts/controllers/network/enums'

// const networkToColorHash = {
//   1: '#038789',
//   3: '#e91550',
//   42: '#690496',
//   4: '#ebb33f',
// }

const networkToClassHash = {
  [MAINNET_CODE]: 'mainnet',
  [ROPSTEN_CODE]: 'ropsten',
  [RINKEYBY_CODE]: 'rinkeby',
  [KOVAN_CODE]: 'kovan',
}

export default class NetworkDisplay extends Component {
  static propTypes = {
    network: PropTypes.string,
    provider: PropTypes.object,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  renderNetworkIcon () {
    const { network } = this.props
    const networkClass = networkToClassHash[network]

    // return networkColor
    //   ? h(NetworkDropdownIcon, { backgroundColor: networkColor, diameter: '10' })
    //   : h('i.fa.fa-question-circle.fa-med', {
    //       style: {
    //         margin: '0 4px',
    //         color: 'rgb(125, 128, 130)',
    //       },
    //     })
    return networkClass
      ? <div className={`network-display__icon network-display__icon--${networkClass}`} />
      : <div
          className="i fa fa-question-circle fa-med"
          style={{
            margin: '0 4px',
            color: 'rgb(125, 128, 130)',
          }}
        />
  }

  render () {
    const { network, provider: { type } } = this.props
    const networkClass = networkToClassHash[network]

    return (
      <div className={classnames(
        'network-display__container',
        networkClass && ('network-display__container--' + networkClass)
      )}>
        {
          networkClass
            ? <div className={`network-display__icon network-display__icon--${networkClass}`} />
            : <div
                className="i fa fa-question-circle fa-med"
                style={{
                  margin: '0 4px',
                  color: 'rgb(125, 128, 130)',
                }}
              />
        }
        <div className="network-display__name">
          { this.context.t(type) }
        </div>
      </div>
    )
  }
}
