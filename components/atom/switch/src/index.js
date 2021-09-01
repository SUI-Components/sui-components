import {useState, forwardRef} from 'react'
import PropTypes from 'prop-types'
import {ToggleSwitchTypeRender} from './SwitchType/toggle'
import {SingleSwitchTypeRender} from './SwitchType/single'
import {LABELS, SIZES, SUPPORTED_KEYS, TYPES} from './config'

const AtomSwitch = forwardRef((props, ref) => {
  const {initialValue, disabled, onToggle: onToggleCallback, type} = props
  const [isToggle, setIsToggle] = useState(initialValue)
  const [isFocus, setIsFocus] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const onBlur = ev => {
    const {onBlur} = props
    setIsFocus(false)
    setIsClick(false)
    typeof onBlur === 'function' && onBlur(ev)
  }

  const onFocus = ev => {
    const {onFocus} = props
    setTimeout(() => {
      setIsFocus(true)
      typeof onFocus === 'function' && onFocus(ev)
    }, 150)
  }

  const onClick = () => {
    setIsClick(true)
  }

  const onToggle = forceValue => {
    if (disabled === true) return
    const newIsToggle = forceValue !== undefined ? forceValue : !isToggle
    setIsToggle(newIsToggle)
    typeof onToggleCallback === 'function' && onToggleCallback(newIsToggle)
  }

  const onKeyDown = ev => {
    if (disabled === true) return

    if (SUPPORTED_KEYS.includes(ev.key)) {
      if (props.value === undefined) {
        // if its uncontrolled component
        onToggle()
      }
      if (typeof onToggleCallback === 'function') {
        onToggleCallback()
      }
      ev.preventDefault()
    }
  }

  const commonProps = {
    ...props,
    isFocus,
    isClick,
    isToggle,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onToggle
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
  isDisabledPadding: PropTypes.bool,

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
  value: PropTypes.bool
}

AtomSwitch.defaultProps = {
  disabled: false,
  isDisabledPadding: false,
  initialValue: false,
  labelLeft: LABELS.LEFT,
  labelRight: LABELS.RIGHT,
  size: SIZES.DEFAULT,
  type: TYPES.TOGGLE
}

export {SIZES as atomSwitchSizes}
export {TYPES as atomSwitchTypes}

export default AtomSwitch
