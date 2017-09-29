import React, {PropTypes} from 'react'
import cx from 'classnames'

const renderErrorMessage = error => (
  error && (
    <div className='sui-FormTextInput-errorMessage'>
      <span className='sui-FormTextInput-errorMessageLabel'>{error}</span>
    </div>
  )
)

const FormTextInput = ({className, errorMessage, name, onChange, placeholder, value}) => (
  <div className={cx('sui-FormTextInput', className)}>
    <input
      className='sui-FormTextInput-value'
      name={name}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
    {renderErrorMessage(errorMessage)}
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
   * Specifies a name for a text input.
   */
  name: PropTypes.string.isRequired,
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
