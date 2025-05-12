import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

import AtomSwitchSingle from './SwitchDesign/AtomSwitchSingle.js'
import AtomSwitchToggle from './SwitchDesign/AtomSwitchToggle.js'
import {COLORS, DESIGNS, SIZES} from './config.js'

const AtomSwitch = forwardRef(
  (
    {
      disabled,
      readOnly,
      checked,
      defaultChecked = false,
      className,
      labelLeft,
      labelRight,
      id,
      name,
      color = COLORS.PRIMARY,
      size = SIZES.DEFAULT,
      design = DESIGNS.TOGGLE,
      onToggle: onToggleCallback,
      value,
      ...props
    },
    ref
  ) => {
    const [innerChecked, setInnedChecked] = useControlledState(checked, defaultChecked)

    const toggleHandler =
      ({checked}) =>
      event => {
        if (readOnly || disabled) return null
        setInnedChecked(checked)
        typeof onToggleCallback === 'function' && onToggleCallback(event, {value, checked})
      }

    const Component = design === DESIGNS.SINGLE ? AtomSwitchSingle : AtomSwitchToggle

    return (
      <Component
        id={id}
        name={name}
        className={className}
        color={color}
        ref={ref}
        checked={innerChecked}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        labelLeft={labelLeft}
        labelRight={labelRight}
        size={size}
        design={design}
        toggleHandler={toggleHandler}
        {...props}
      />
    )
  }
)

AtomSwitch.displayName = 'AtomSwitch'

AtomSwitch.propTypes = {
  /** Id of the switch */
  id: PropTypes.string,

  /** Form element name */
  name: PropTypes.string,

  /** Whether switch is checked on init. Controlled state component */
  checked: PropTypes.bool,

  /** Whether switch is checked on init. Uncontrolled state component */
  defaultChecked: PropTypes.bool,

  /** Size of switch: 'default', 'large' */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Type of switch: 'toggle' (default), 'select', 'single' */
  design: PropTypes.oneOf(Object.values(DESIGNS)),

  /** Is Input disabled? */
  disabled: PropTypes.bool,

  /** Is Input readOnly? */
  readOnly: PropTypes.bool,

  /** Is the switch loading **/
  isLoading: PropTypes.bool,

  /** Left label to be printed */
  labelLeft: PropTypes.string,

  /** Right label to be printed */
  labelRight: PropTypes.string,

  /** The label itself. Proxy from label */
  label: PropTypes.string,

  /** The optional label text. Proxy from label */
  labelOptionalText: PropTypes.string,

  /** Callback to be called when switching. Flag whenever switch is active or not sent */
  onToggle: PropTypes.func,

  /** Color of the switch: 'primary', 'accent', 'success', 'alert', 'error', 'neutral', 'surface' */
  color: PropTypes.oneOf(Object.values(COLORS)),

  /** Callback fired when the element gets focused **/
  onFocus: PropTypes.func,

  /** Callback fired when the element loses its focus status **/
  onBlur: PropTypes.func,

  /** Whether switch is checked. Controlled state component. Don't combine with initialValue prop! */
  value: PropTypes.bool,

  /** element node which appears inside the switch circle when it's in left position **/
  iconLeft: PropTypes.node,

  /** element node which appears inside the switch circle when it's in right position **/
  iconRight: PropTypes.node,

  /** className to be added to the container **/
  className: PropTypes.string
}

export {SIZES as atomSwitchSizes}
export {DESIGNS as atomSwitchDesigns}
export {COLORS as atomSwitchColors}

export default AtomSwitch
