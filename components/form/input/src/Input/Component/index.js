import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CLASS = 'sui-FormInput-input'
const SIZES = {
  MEDIUM: 'm',
  SMALL: 's'
}

class Input extends Component {
  changeHandler(ev, onChange) {
    onChange && onChange({value: ev.target.value, ev})
  }

  getClassNames({size, hideInput}) {
    return cx(CLASS, `${CLASS}-${size}`, hideInput && `${CLASS}--hidden`)
  }

  render() {
    const {
      disabled,
      id,
      name,
      onBlur,
      onChange,
      placeholder,
      reference,
      size,
      type,
      value,
      checked,
      hideInput
    } = this.props

    return (
      <input
        className={this.getClassNames({size, hideInput})}
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
  hideInput: PropTypes.bool
}

Input.defaultProps = {
  size: SIZES.MEDIUM
}

export default Input
export {SIZES as InputSizes}
