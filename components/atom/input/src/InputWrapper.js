import React from 'react'
import PropTypes from 'prop-types'

const InputWrapper = (props) => {
  const {name, label, children} = props
  return (
    <div className='sui-AtomInput'>
      <label htmlFor={name}>{label}</label>
      { children }
    </div>
  )
}

InputWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default InputWrapper
