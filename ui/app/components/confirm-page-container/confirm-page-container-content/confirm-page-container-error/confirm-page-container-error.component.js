import React from 'react'
import PropTypes from 'prop-types'

const ConfirmPageContainerError = props => {
  return (
    <div className="confirm-page-container-error">
      {/* <img
        src="/images/alert.svg"
      /> */}
      { `ALERT: ${props.error}` }
    </div>
  )
}

ConfirmPageContainerError.propTypes = {
  error: PropTypes.string,
}

export default ConfirmPageContainerError
