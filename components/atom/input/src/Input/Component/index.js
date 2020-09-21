import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput-input'

const SIZES = {
  MEDIUM: 'm',
  SMALL: 's',
  XSMALL: 'xs'
}

const INPUT_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

const DEFAULT_PROPS = {
  SIZE: SIZES.MEDIUM,
  ON_ENTER_KEY: 'Enter',
  TAB_INDEX: -1,
  ON_KEY_DOWN: () => {},
  ON_ENTER: () => {},
  ON_CHANGE: () => {}
}

const getClassNames = ({
  size,
  charsSize,
  hideInput,
  noBorder,
  readOnly,
  errorState,
  state
}) => {
  return cx(
    BASE_CLASS,
    `${BASE_CLASS}-${size}`,
    charsSize && `${BASE_CLASS}--size`,
    hideInput && `${BASE_CLASS}--hidden`,
    noBorder && `${BASE_CLASS}--noBorder`,
    readOnly && `${BASE_CLASS}--readOnly`,
    errorState && `${BASE_CLASS}--${INPUT_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${INPUT_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--${state}`
  )
}

const Input = ({
  disabled,
  readOnly,
  hideInput,
  noBorder,
  id,
  name,
  onBlur,
  onFocus,
  placeholder,
  reference,
  size = DEFAULT_PROPS.SIZE,
  errorState,
  state,
  type,
  value,
  charsSize,
  tabIndex = DEFAULT_PROPS.TAB_INDEX,
  maxLength,
  minLength,
  defaultValue,
  min,
  max,
  step,
  autoComplete,
  autoFocus,
  onChange = DEFAULT_PROPS.ON_CHANGE,
  onEnter = DEFAULT_PROPS.ON_ENTER,
  onEnterKey = DEFAULT_PROPS.ON_ENTER_KEY,
  onKeyDown = DEFAULT_PROPS.ON_KEY_DOWN,
  required,
  pattern,
  inputMode
}) => {
  const changeHandler = ev => {
    const {
      target: {value, name}
    } = ev
    onChange(ev, {value, name})
  }

  const handleKeyDown = ev => {
    const {
      target: {value, name}
    } = ev
    const {key} = ev
    onKeyDown(ev, {value, name})
    if (key === onEnterKey) onEnter(ev, {value, name})
  }

  const className = getClassNames({
    size,
    charsSize,
    hideInput,
    noBorder,
    readOnly,
    errorState,
    state
  })

  return (
    <input
      className={className}
      tabIndex={tabIndex}
      disabled={disabled || readOnly}
      readOnly={readOnly}
      id={id}
      name={name}
      onChange={changeHandler}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      ref={reference}
      type={type}
      value={value}
      size={charsSize}
      defaultValue={defaultValue}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      step={step}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required={required}
      pattern={pattern}
      inputMode={inputMode}
    />
  )
}

Input.propTypes = {
  /* This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  /* This Boolean attribute prevents the user from interacting with the input but without disabled styles */
  readOnly: PropTypes.bool,
  /* The DOM id global attribute. */
  id: PropTypes.string,
  /* sets the name property of an element in the DOM */
  name: PropTypes.string,
  /* onBlur callback */
  onBlur: PropTypes.func,
  /* onKeyDown callback */
  onKeyDown: PropTypes.func,
  /* onChange callback */
  onChange: PropTypes.func,
  /* onFocus callback */
  onFocus: PropTypes.func,
  /* onEnter callback */
  onEnter: PropTypes.func,
  /* key to provoke the onEnter callback. Valid any value defined here → https://www.w3.org/TR/uievents-key/#named-key-attribute-values */
  onEnterKey: PropTypes.string,
  /* A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. */
  placeholder: PropTypes.string,
  /* 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /* width of input based in number of characters (native "size" attribute) */
  charsSize: PropTypes.number,
  /* specifies the maximum number of characters (native "maxlength" attribute) */
  maxLength: PropTypes.number,
  /* specifies the minimum number of characters (native "minlength" attribute) */
  minLength: PropTypes.number,
  /* specifies the maximum number allowed (native "max" attribute) */
  max: PropTypes.number,
  /* specifies the minimum number allowed (native "min" attribute) */
  min: PropTypes.number,
  /** stepping interval to use when using up and down arrows to adjust the value, as well as for validation (native "step" attribute) */
  step: PropTypes.number,
  /** specifies whether or not an input field should have autocomplete enabled (on|off) */
  autoComplete: PropTypes.string,
  /** native autofocus attribute */
  autoFocus: PropTypes.bool,
  /* text, password, date or number */
  type: PropTypes.string,
  /* value of the control */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /* default value of the control */
  defaultValue: PropTypes.string,
  /* react ref to access DOM node */
  reference: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /** Wether to show the input or not */
  hideInput: PropTypes.bool,
  /* Will set a red/green border if set to true/false */
  errorState: PropTypes.bool,
  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  state: PropTypes.oneOf(Object.values(INPUT_STATES)),
  /** Wether to hide the input border or not */
  noBorder: PropTypes.bool,
  /** tabindex value */
  tabIndex: PropTypes.number,
  /** native required attribtue  */
  required: PropTypes.bool,
  /** native pattern attribute */
  pattern: PropTypes.string,
  /** To select input keyboard mode on mobile. It can be 'numeric', 'decimal', 'email', etc */
  inputMode: PropTypes.string
}

export default Input
export {SIZES as inputSizes, INPUT_STATES as inputStates}
