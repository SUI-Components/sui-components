import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  BASE_CLASS,
  DEFAULT_PROPS,
  TEXTAREA_RESIZES,
  TEXTAREA_SIZES,
  TEXTAREA_STATES
} from './settings'

const AtomTextarea = ({
  errorState,
  onBlur = DEFAULT_PROPS.onBlur,
  onChange = DEFAULT_PROPS.onChange,
  resize,
  size = DEFAULT_PROPS.size,
  state,
  value,
  ...props
}) => {
  const className = cx(
    BASE_CLASS,
    `${BASE_CLASS}--${size}`,
    errorState && `${BASE_CLASS}--${TEXTAREA_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${TEXTAREA_STATES.SUCCESS}`,
    resize && `${BASE_CLASS}--resize-${resize}`,
    state && `${BASE_CLASS}--${state}`
  )

  const handleChange = ev => {
    const {value, name} = ev.target
    onChange(ev, {value, name})
  }

  return (
    <textarea
      {...props}
      onBlur={onBlur}
      onChange={handleChange}
      className={className}
      value={value}
    />
  )
}

AtomTextarea.displayName = 'AtomTextarea'

AtomTextarea.propTypes = {
  /** Size of textarea: 'short', 'long' */
  size: PropTypes.oneOf(Object.values(TEXTAREA_SIZES)),

  /** Handler triggered on change */
  onChange: PropTypes.func,

  /** Handler triggered when losses focus */
  onBlur: PropTypes.func,

  /** Value (content) of the textarea */
  value: PropTypes.string,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool,

  /* Will set one of all allowed resizes. */
  resize: PropTypes.oneOf(Object.values(TEXTAREA_RESIZES)),

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  state: PropTypes.oneOf(Object.values(TEXTAREA_STATES))
}

export default AtomTextarea
export {
  TEXTAREA_RESIZES as AtomTextareaResizes,
  TEXTAREA_SIZES as AtomTextareaSizes,
  TEXTAREA_STATES as AtomTextareaStates
}
