import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const renderErrorMessage = error => (
  <div className='sui-FormTextInput-errorMessage'>
    <span className='sui-FormTextInput-errorMessageLabel'>{error}</span>
  </div>
)

const FormTextInput = ({className, errorMessage, onChange, placeholder, value}) => (
  <div className={cx('sui-FormTextInput', className)}>
    <input
      className='sui-FormTextInput-value'
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
    {errorMessage && renderErrorMessage(errorMessage)}
  </div>
)

FormTextInput.displayName = 'FormTextInput'

FormTextInput.propTypes = {
  /**
   * CSS classname to apply to component's container.
   */
  className: PropTypes.string,
  /**
   * Error message text to show below the input.
   */
  errorMessage: PropTypes.string,
  /**
   * Custom callback function to execute when the value of the text input has changed.
   */
  onChange: PropTypes.func,
  /**
   * Specifies a short hint that describes the expected value of the text input (when it is empty).
   */
  placeholder: PropTypes.string,
  /**
   * Inner text value of the text input component.
   */
  value: PropTypes.string
}

FormTextInput.defaultProps = {
  placeholder: '',
  value: ''
}

export default FormTextInput
