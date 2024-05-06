import {forwardRef, useState} from 'react'

import PropTypes from 'prop-types'

import {SingleSwitchTypeRender} from './SwitchType/single.js'
import {ToggleSwitchTypeRender} from './SwitchType/toggle.js'
import {LABELS, SIZES, TYPES} from './config.js'

const AtomSwitch = forwardRef(
  (
    {
      disabled = false,
      isFitted = false,
      initialValue = false,
      labelLeft = LABELS.LEFT,
      labelRight = LABELS.RIGHT,
      size = SIZES.DEFAULT,
      type = TYPES.TOGGLE,
      onToggle: onToggleCallback,
      value,
      ...props
    },
    ref
  ) => {
    const [isToggle, setIsToggle] = useState(initialValue)
    const isChecked = value !== undefined ? value : isToggle

    const onToggle = forcedValue => event => {
      let newIsToggle = forcedValue !== undefined ? forcedValue : !isToggle
      if (value === undefined) {
        // if its uncontrolled component
        setIsToggle(newIsToggle)
      } else {
        newIsToggle = !value
      }
      typeof onToggleCallback === 'function' && onToggleCallback(newIsToggle)
    }

    const commonProps = {
      disabled,
      isFitted,
      initialValue,
      labelLeft,
      labelRight,
      size,
      type,
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
  }
)

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

  /** Is the switch loading **/
  isLoading: PropTypes.bool,

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

  /** Callback to be called when switching. Flag whenever switch is active or not sent */
  onToggle: PropTypes.func,

  /** Callback fired when the element gets focused **/
  onFocus: PropTypes.func,

  /** Callback fired when the element loses its focus status **/
  onBlur: PropTypes.func,

  /** Whether switch is checked. Controlled state component. Don't combine with initialValue prop! */
  value: PropTypes.bool,
  /** element node which appears inside the switch circle when it's in left position **/
  iconLeft: PropTypes.node,
  /** element node which appears inside the switch circle when it's in right position **/
  iconRight: PropTypes.node
}

export {SIZES as atomSwitchSizes}
export {TYPES as atomSwitchTypes}

export default AtomSwitch
