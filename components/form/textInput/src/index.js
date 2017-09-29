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
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

FormTextInput.defaultProps = {
  placeholder: '',
  value: ''
}

export default FormTextInput
