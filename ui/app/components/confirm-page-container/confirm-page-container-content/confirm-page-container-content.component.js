import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Tabs, Tab } from '../../tabs'
import { ConfirmPageContainerSummary, ConfirmPageContainerError } from './'

export default class ConfirmPageContainerContent extends Component {
  static propTypes = {
    action: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    titleComponent: PropTypes.func,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hideSubtitle: PropTypes.bool,
    errorMessage: PropTypes.string,
    summaryComponent: PropTypes.node,
    detailsComponent: PropTypes.node,
    dataComponent: PropTypes.node,
    identiconAddress: PropTypes.string,
    nonce: PropTypes.string,
  }

  renderContent () {
    const { detailsComponent, dataComponent } = this.props

    if (detailsComponent && dataComponent) {
      return this.renderTabs()
    } else {
      return detailsComponent || dataComponent
    }
  }

  renderTabs () {
    const { detailsComponent, dataComponent } = this.props

    return (
      <Tabs>
        <Tab name="Details">
          { detailsComponent }
        </Tab>
        <Tab name="Data">
          { dataComponent }
        </Tab>
      </Tabs>
    )
  }

  render () {
    const {
      action,
      title,
      subtitle,
      hideSubtitle,
      errorMessage,
      identiconAddress,
      nonce,
      summaryComponent,
      detailsComponent,
      dataComponent,
    } = this.props

    return (
      <div className="confirm-page-container-content">
        {
          summaryComponent || <ConfirmPageContainerSummary
            className={classnames(
              (detailsComponent && dataComponent) || 'confirm-page-container-summary--border-bottom',
            )}
            action={action}
            title={title}
            subtitle={subtitle}
            hideSubtitle={hideSubtitle}
            identiconAddress={identiconAddress}
            nonce={nonce}
          />
        }
        { this.renderContent() }
        {
          errorMessage &&
            <div className="confirm-page-container-content__error-container">
              <ConfirmPageContainerError error={errorMessage} />
            </div>
        }
      </div>
    )
  }
}
