import React from 'react'
import PropTypes from 'prop-types'

const InputLabel = ({name, children}) => (
  <label htmlFor={name}>
    {children}
  </label>
)

InputLabel.displayName = 'InputLabel'

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default InputLabel
