import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomValidationText'
const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const getClassNames = type => cx(BASE_CLASS, `${BASE_CLASS}--${type}`)

const AtomValidationText = function({type, text}) {
  return <span className={getClassNames(type)}>{text}</span>
}

AtomValidationText.displayName = 'AtomValidationText'

AtomValidationText.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  text: PropTypes.string.isRequired
}

export default AtomValidationText
export {TYPES as AtomValidationTextTypes}
