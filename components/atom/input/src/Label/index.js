import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const InputLabel = ({name, label, children}) => (
  <label htmlFor={name}>
    {children}
  </label>
)

InputLabel.displayName = 'InputLabel'

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node
}

export default InputLabel
