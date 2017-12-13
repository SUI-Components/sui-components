import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from './Label'

const InputWrapper = (props) => {
  const {name, label, children} = props
  return (
    <div className='sui-AtomInput'>
      <InputLabel name={name}>
        {label}
      </InputLabel>
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
