import React from 'react'
import PropTypes from 'prop-types'

const AtomLabel = ({name, text, optional}) => (
  <label htmlFor={name} className='sui-AtomLabel'>
    {text}
    <span className='sui-AtomLabel-optional'>
      {optional}
    </span>
  </label>
)

AtomLabel.displayName = 'AtomLabel'

AtomLabel.defaultProps = {
  optional: '(optional)'
}

AtomLabel.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  text: PropTypes.string.isRequired,
  optional: PropTypes.string,
}

export default AtomLabel
