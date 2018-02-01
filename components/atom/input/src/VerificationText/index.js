import React from 'react'
import PropTypes from 'prop-types'

const VERIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const getVerificationClass = ({sufixClass, verificationText, verificationType}) =>
  verificationType && (
    verificationType === VERIFICATION_TYPES.ERROR
      ? `${sufixClass}-error`
      : `${sufixClass}-success`
  )

const getVerificationTextClassName = ({type}) =>
  type && `sui-AtomInput-${type}-validation-text`

const VerificationText = ({text, type}) =>
  <span className={getVerificationTextClassName({type})}>
    {text}
  </span>

VerificationText.displayName = 'VerificationText'

VerificationText.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

export default VerificationText
export {
  getVerificationClass,
  VERIFICATION_TYPES
}
