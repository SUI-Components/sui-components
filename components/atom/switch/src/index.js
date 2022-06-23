import {forwardRef, useState} from 'react'

import PropTypes from 'prop-types'

import {SingleSwitchTypeRender} from './SwitchType/single.js'
import {ToggleSwitchTypeRender} from './SwitchType/toggle.js'
import {LABELS, SIZES, TYPES} from './config.js'

const AtomSwitch = forwardRef((props, ref) => {
  const {initialValue, onToggle: onToggleCallback, type, value} = props
  const [isToggle, setIsToggle] = useState(initialValue)
  const isChecked = value !== undefined ? value : isToggle

  const onToggle = forcedValue => event => {
    let newIsToggle = forcedValue !== undefined ? forcedValue : !isToggle
    if (props.value === undefined) {
      // if its uncontrolled component
      setIsToggle(newIsToggle)
    } else {
      newIsToggle = !props.value
    }
    typeof onToggleCallback === 'function' && onToggleCallback(newIsToggle)
  }

  const commonProps = {
    ...props,
    isToggle,
    isChecked,
    onToggle,
    value
  }

  return type === TYPES.SINGLE ? (
    <SingleSwitchTypeRender ref={ref} {...commonProps} />
  ) : (
    <ToggleSwitchTypeRender ref={ref} {...commonProps} />
  )
})

AtomSwitch.displayName = 'AtomSwitch'

AtomSwitch.propTypes = {
  /** Whether switch is checked on init. Uncontrolled state component */
  initialValue: PropTypes.bool,

  /** Size of switch: 'default', 'large' */
  size: PropTypes.oneOf([SIZES.DEFAULT, SIZES.LARGE]),

  /** Type of switch: 'toggle' (default), 'select', 'single' */
  type: PropTypes.oneOf([TYPES.TOGGLE, TYPES.SELECT, TYPES.SINGLE]),

  /** Is Input disabled? */
  disabled: PropTypes.bool,

  /** The padding of the container is set to 0 */
  isFitted: PropTypes.bool,

  /** Left label to be printed */
  labelLeft: PropTypes.string,

  /** Right label to be printed */
  labelRight: PropTypes.string,

  /** Form element name */
  name: PropTypes.string.isRequired,

  /** The label itself. Proxy from label */
  label: PropTypes.string,

  /** The optional label text. Proxy from label */
  labelOptionalText: PropTypes.string,

  /** Callback to be called when switch. Flag whenever switch is active or not sent */
  onToggle: PropTypes.func,

  /** Callback fired when teh element gets focused **/
  onFocus: PropTypes.func,

  /** Callback fired when teh element loose its focus status **/
  onBlur: PropTypes.func,

  /** Whether switch is checked. Controlled state component. Don't combine with initialValue prop! */
  value: PropTypes.bool,
  /** element node which appears inside the switch circle when it's in left position **/
  iconLeft: PropTypes.node,
  /** element node which appears inside the switch circle when it's in right position **/
  iconRight: PropTypes.node
}

AtomSwitch.defaultProps = {
  disabled: false,
  isFitted: false,
  initialValue: false,
  labelLeft: LABELS.LEFT,
  labelRight: LABELS.RIGHT,
  size: SIZES.DEFAULT,
  type: TYPES.TOGGLE
}

export {SIZES as atomSwitchSizes}
export {TYPES as atomSwitchTypes}

export default AtomSwitch
