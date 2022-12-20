import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'
import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {
  getClassNames,
  INPUT_SHAPES,
  INPUT_STATES,
  noop,
  SIZES
} from '../../config.js'
import isValidInputValue from '../../helpers/isValidInputValue.js'

const Input = forwardRef(
  (
    {
      as = 'input',
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
      size,
      errorState,
      state,
      type,
      value,
      charsSize,
      tabIndex,
      ariaLabel,
      maxLength,
      minLength,
      defaultValue,
      min,
      max,
      step,
      autoComplete,
      autoFocus,
      onChange = noop,
      onEnter = noop,
      onEnterKey = 'Enter',
      onKeyDown = noop,
      onKeyPress = noop,
      required,
      pattern,
      inputMode,
      shape,
      children
    },
    forwardedRef
  ) => {
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

      if (isValidInputValue(event, {type, onEnterKey})) {
        onKeyDown(ev, {value, name})
        if (typeof onEnterKey === 'string') {
          key === onEnterKey && onEnter(ev, {value, name})
        } else if (Array.isArray(onEnterKey)) {
          onEnterKey.includes(key) && onEnter(ev, {value, name})
        }
      }
    }

    const className = getClassNames({
      size,
      charsSize,
      hideInput,
      noBorder,
      readOnly,
      errorState,
      state,
      shape
    })

    return (
      <PolymorphicElement
        as={as}
        className={className}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        disabled={disabled}
        readOnly={readOnly}
        id={id}
        name={name}
        onChange={changeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        ref={useMergeRefs(...[reference, forwardedRef].filter(Boolean))}
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
        children={as === 'input' ? undefined : children}
      />
    )
  }
)

Input.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,
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
  /* onKeyPress callback */
  onKeyPress: PropTypes.func,
  /* onChange callback */
  onChange: PropTypes.func,
  /* onFocus callback */
  onFocus: PropTypes.func,
  /* onEnter callback */
  onEnter: PropTypes.func,
  /* key(s) to provoke the onEnter callback. Valid any value defined here → https://www.w3.org/TR/uievents-key/#named-key-attribute-values */
  onEnterKey: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ),
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
  /* Native aria-label attribute for a11y */
  ariaLabel: PropTypes.string,
  /** native required attribtue  */
  required: PropTypes.bool,
  /** native pattern attribute */
  pattern: PropTypes.string,
  /** To select input keyboard mode on mobile. It can be 'numeric', 'decimal', 'email', etc */
  inputMode: PropTypes.string,
  /** Sets the shape of the input field. It can be 'rounded', 'square' or 'circle' */
  shape: PropTypes.oneOf(Object.values(INPUT_SHAPES)),
  /** Nodes to be rendered inside the component */
  children: PropTypes.node
}

export default Input
export {SIZES as inputSizes, INPUT_STATES as inputStates}
