import React from 'react'
import PropTypes from 'prop-types'

class Input extends React.Component {
  render () {
    const {
      className,
      disabled,
      id,
      label,
      onBlur,
      onChange,
      onSelect,
      placeholder,
      reference,
      type,
      value
    } = this.props

    return (
      <input
        className={className}
        disabled={disabled}
        id={id}
        label={label}
        onBlur={onBlur}
        onChange={onChange}
        onSelect={onSelect}
        placeholder={placeholder}
        ref={reference}
        type={type}
        value={value}
      />
    )
  }
}

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  reference: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
}

export default Input
