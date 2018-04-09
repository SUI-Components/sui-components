import React from 'react'
import PropTypes from 'prop-types'

const AtomLabel = ({name, text, optionalText}) => (
  <label htmlFor={name} className='sui-AtomLabel'>
    {text}
    <span className='sui-AtomLabel-optionalText'>
      {optionalText}
    </span>
  </label>
)

AtomLabel.displayName = 'AtomLabel'

AtomLabel.defaultProps = {
  optionalText: '(optional)'
}

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
}

export default AtomLabel
