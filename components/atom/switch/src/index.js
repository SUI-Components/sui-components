import {useState} from 'react'
import PropTypes from 'prop-types'
import {ToggleSwitchTypeRender} from './SwitchType/toggle'
import {SingleSwitchTypeRender} from './SwitchType/single'
import {SIZES, TYPES, SUPPORTED_KEYS} from './config'

const AtomSwitch = props => {
  const {initialValue, disabled, onToggle: onToggleCallback, type} = props
  const [isToggle, setIsToggle] = useState(initialValue)
  const [isFocus, setIsFocus] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const onBlur = () => {
    setIsFocus(false)
    setIsClick(false)
  }

  const onFocus = () => {
    setTimeout(() => {
      setIsFocus(true)
    }, 150)
  }

  const onClick = () => {
    setIsClick(true)
  }

  const onToggle = forceValue => {
    if (disabled === true) return

    const newIsToggle = forceValue !== undefined ? forceValue : !isToggle
    setIsToggle(newIsToggle)
    onToggleCallback(newIsToggle)
  }

  const onKeyDown = ev => {
    if (disabled === true) return

    if (SUPPORTED_KEYS.includes(ev.key)) {
      onToggleCallback()
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
    <SingleSwitchTypeRender {...commonProps} />
  ) : (
    <ToggleSwitchTypeRender {...commonProps} />
  )
}

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

  /** Left label to be printed */
  labelLeft: PropTypes.string,

  /** Right label to be printed */
  labelRight: PropTypes.string,

  /** Form element name */
  name: PropTypes.string.isRequired,

  /** The label itself. Proxy from label */
  label: PropTypes.string.isRequired,

  /** The optional label text. Proxy from label */
  labelOptionalText: PropTypes.string,

  /** Callback to be called when switch. Flag whenever switch is active or not sent */
  onToggle: PropTypes.func.isRequired,

  /** Whether switch is checked. Controlled state component. Don't combine with initialValue prop! */
  value: PropTypes.bool
}

AtomSwitch.defaultProps = {
  disabled: false,
  initialValue: false,
  labelLeft: 'Off',
  labelRight: 'On',
  size: SIZES.DEFAULT,
  type: TYPES.TOGGLE
}

export default AtomSwitch
