import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomTextarea'
const SIZES = {
  SHORT: 'short',
  LONG: 'long'
}

const TEXTAREA_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

const AtomTextarea = ({
  onChange,
  onBlur,
  size,
  value,
  errorState,
  state,
  ...props
}) => {
  const className = cx(
    BASE_CLASS,
    `${BASE_CLASS}--${size}`,
    errorState && `${BASE_CLASS}--${TEXTAREA_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${TEXTAREA_STATES.SUCCESS}`,
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
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Handler triggered on change */
  onChange: PropTypes.func,

  /** Handler triggered when losses focus */
  onBlur: PropTypes.func,

  /** Value (content) of the textarea */
  value: PropTypes.string,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool,

  /* Will set a red/green/orange border if set to 'error' / 'success' / 'alert' */
  state: PropTypes.oneOf(Object.values(TEXTAREA_STATES))
}

AtomTextarea.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  size: SIZES.SHORT
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes, TEXTAREA_STATES as AtomTextareaStates}
