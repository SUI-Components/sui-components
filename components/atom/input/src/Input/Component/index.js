import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASS = 'sui-AtomInput-input'
const SIZES = {
  MEDIUM: 'm',
  SMALL: 's'
}

const ERROR_STATES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

class Input extends Component {
  changeHandler(ev, onChange) {
    onChange && onChange({value: ev.target.value, ev})
  }

  getErrorStateClass(errorState) {
    if (errorState) return `${CLASS}--${ERROR_STATES.ERROR}`
    if (errorState === false) return `${CLASS}--${ERROR_STATES.SUCCESS}`
    return ''
  }

  getClassNames({size, hideInput, errorState}) {
    return cx(
      CLASS,
      `${CLASS}-${size}`,
      hideInput && `${CLASS}--hidden`,
      this.getErrorStateClass(errorState)
    )
  }

  render() {
    const {
      checked,
      disabled,
      hideInput,
      id,
      name,
      onBlur,
      onChange,
      placeholder,
      reference,
      size,
      errorState,
      type,
      value
    } = this.props

    return (
      <input
        className={this.getClassNames({size, hideInput, errorState})}
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={ev => this.changeHandler(ev, onChange)}
        onBlur={onBlur}
        placeholder={placeholder}
        ref={reference}
        type={type}
        value={value}
      />
    )
  }
}

Input.propTypes = {
  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  /* Mark the input as selected */
  checked: PropTypes.bool,
  /* The DOM id global attribute. */
  id: PropTypes.string,
  /* sets the name property of an element in the DOM */
  name: PropTypes.string,
  /* onBlur callback */
  onBlur: PropTypes.func,
  /* onChange callback */
  onChange: PropTypes.func,
  /* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. */
  placeholder: PropTypes.string,
  /* 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /* text, password, date or number */
  type: PropTypes.string,
  /* value of the control */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /* react ref to access DOM node */
  reference: PropTypes.func,
  /** Wether to show the input or not */
  hideInput: PropTypes.bool,
  /* Will set a red/green border if set to true/false */
  errorState: PropTypes.bool
}

Input.defaultProps = {
  size: SIZES.MEDIUM
}

export default Input
export {SIZES as inputSizes}
