import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import InputContainer from './Container/InputContainer.js'
import getComponentAndProps from './helpers/getComponentAndProps.js'
import {inputSizes, inputStates} from './Input/index.js'
import {INPUT_SHAPES, TYPES} from './config.js'

const AtomInput = forwardRef(({type, shape, noBorder, ...props}, ref) => {
  const [Component, newProps] = getComponentAndProps({type, ...props})
  return (
    <InputContainer shape={shape} noBorder={noBorder}>
      <Component {...newProps} shape={shape} noBorder={noBorder} ref={ref} />
    </InputContainer>
  )
})

AtomInput.propTypes = {
  /** native types (text, date, ...), 'sui-password' */
  type: PropTypes.oneOf(Object.values(TYPES)),

  /** Left addon component, text,... */
  leftAddon: PropTypes.any,

  /** Right addon component, text,... */
  rightAddon: PropTypes.any,

  /** Left Icon */
  leftIcon: PropTypes.node,

  /** Left Icon */
  rightIcon: PropTypes.node,

  /** Left icon click callback */
  onClickLeftIcon: PropTypes.func,

  /** Right icon click callback */
  onClickRightIcon: PropTypes.func,

  /** Element to be shown to show the password on click */
  pwShowLabel: PropTypes.node,

  /** Element to be shown to hide the password on click */
  pwHideLabel: PropTypes.node,

  /** onBlur callback **/
  onBlur: PropTypes.func,

  /** onKeyDown callback **/
  onKeyDown: PropTypes.func,

  /** onChange callback **/
  onChange: PropTypes.func,

  /** onFocus callback **/
  onFocus: PropTypes.func,

  /** onEnter callback **/
  onEnter: PropTypes.func,

  /** key to provoke the onEnter callback. Valid any value defined here → https://www.w3.org/TR/uievents-key/#named-key-attribute-values **/
  onEnterKey: PropTypes.string,

  /** sets the name property of an element in the DOM */
  name: PropTypes.string,

  /** The DOM id global attribute. */
  id: PropTypes.string,

  /** A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. */
  placeholder: PropTypes.string,

  /** This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,

  /** 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(inputSizes)),

  /** width of input based in number of characters (native "size" attribute) */
  charsSize: PropTypes.number,

  /** specifies the maximum number of characters (native "maxlength" attribute) */
  maxLength: PropTypes.number,

  /** specifies the minimum number of characters (native "minlength" attribute) */
  minLength: PropTypes.number,

  /** specifies the maximum number allowed (native "max" attribute) */
  max: PropTypes.number,

  /** specifies the minimum number allowed (native "min" attribute) */
  min: PropTypes.number,

  /** stepping interval to use when using up and down arrows to adjust the value, as well as for validation (native "step" attribute) */
  step: PropTypes.number,

  /** specifies whether or not an input field should have autocomplete enabled (on|off) */
  autoComplete: PropTypes.string,

  /** native autofocus attribute */
  autoFocus: PropTypes.bool,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool,

  /** 'success', 'error' or 'alert' */
  state: PropTypes.oneOf(Object.values(inputStates)),

  /** value of the control */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** mask object, see https://unmanner.github.io/imaskjs/ */
  mask: PropTypes.object,

  /** a button to be added on the right side of the input */
  button: PropTypes.node,

  /** tabindex value */
  tabIndex: PropTypes.number,

  /** native required attribute  */
  required: PropTypes.bool,

  /** native pattern attribute */
  pattern: PropTypes.string,

  /** To select input keyboard mode on mobile. It can be 'numeric', 'decimal', 'email', etc */
  inputMode: PropTypes.string,

  /** Sets the shape of the input field. It can be 'rounded', 'square' or 'circle' */
  shape: PropTypes.string,
  /** Whether to hide the input border or not */
  noBorder: PropTypes.bool
}

AtomInput.displayName = 'AtomInput'

export default AtomInput

export {inputSizes, inputStates, TYPES as inputTypes, INPUT_SHAPES as inputShapes}
