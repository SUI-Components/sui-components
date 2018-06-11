/**
 * This component is used as prop filter for the native input
 */
import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  className,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  onSelect,
  placeholder,
  reference,
  type,
  value
}) =>
  <input
    className={className}
    disabled={disabled}
    id={id}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onSelect={onSelect}
    placeholder={placeholder}
    ref={reference}
    type={type}
    value={value}
  />

Input.displayName = 'Input'

Input.propTypes = {
  /**
   * Allows to style the native input depending on the type we want to implement
   */
  className: PropTypes.string,
  /**
   * Native input atribute.
   * This Boolean attribute indicates that the form control is not available for interaction
   */
  disabled: PropTypes.bool,
  /**
   * html id
   */
  id: PropTypes.string,
  /**
   * html name
   */
  name: PropTypes.string,
  /**
   * Event launched when an object loses focus
   */
  onBlur: PropTypes.func,
  /**
   * Event launched on any object change
   */
  onChange: PropTypes.func,
  /**
   * Event launched when the object is selected
   */
  onSelect: PropTypes.func,
  /**
   * Native input atribute.
   * A hint to the user of what can be entered in the control
   */
  placeholder: PropTypes.string,
  /**
   * react ref to access DOM node
   */
  reference: PropTypes.func,
  /**
   * Native input atribute.
   * The type of control to render
   */
  type: PropTypes.string,
  /**
   * The initial value of the control
   */
  value: PropTypes.string
}

export default Input
