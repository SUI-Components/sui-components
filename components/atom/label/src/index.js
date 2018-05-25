import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASSNAME = 'sui-AtomLabel'

const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const getClass = ({type}) => cx(CLASSNAME, `${CLASSNAME}--${type}`)

const AtomLabel = ({name, text, optionalText, type}) => (
  <label htmlFor={name} className={getClass({type})}>
    {text}
    {optionalText && (
      <span className="sui-AtomLabel-optionalText">{optionalText}</span>
    )}
  </label>
)

AtomLabel.displayName = 'AtomLabel'

AtomLabel.propTypes = {
  /**
   * used as for attribute. Must be the same as the form element id
   */
  name: PropTypes.string.isRequired,
  /**
   * The label itself
   */
  text: PropTypes.string.isRequired,
  /**
   * The optional label text
   */
  optionalText: PropTypes.string,
  /**
   * Label type: 'success' or 'error', use AtomLabelTypes
   */
  type: PropTypes.oneOf(Object.values(TYPES))
}

export default AtomLabel
export {TYPES as AtomLabelTypes}
