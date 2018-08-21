import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASS = 'sui-FormInput-input'
const SIZES = {
  MEDIUM: 'm',
  SMALL: 's'
}

const STATES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

class Input extends Component {
  changeHandler(ev, onChange) {
    onChange && onChange({value: ev.target.value, ev})
  }

  getClassNames({size, hideInput, state}) {
    return cx(
      CLASS,
      `${CLASS}-${size}`,
      hideInput && `${CLASS}--hidden`,
      state && `${CLASS}--${state}`
    )
  }

  render() {
    const {
      checked,
      disabled,
      hideInput,
      id,
      name,
      onChange,
      placeholder,
      reference,
      size,
      state,
      type,
      value
    } = this.props

    return (
      <input
        className={this.getClassNames({size, hideInput, state})}
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={ev => this.changeHandler(ev, onChange)}
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
  /* optional: 'success' or 'error' */
  state: PropTypes.oneOf(Object.values(STATES))
}

Input.defaultProps = {
  size: SIZES.MEDIUM
}

export default Input
export {SIZES as InputSizes, STATES as InputStates}
