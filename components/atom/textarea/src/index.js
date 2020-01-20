import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomTextarea'
const SIZES = {
  SHORT: 'short',
  LONG: 'long'
}

const ERROR_STATES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

const getErrorStateClass = errorState => {
  if (errorState) return `${BASE_CLASS}--${ERROR_STATES.ERROR}`
  if (errorState === false) return `${BASE_CLASS}--${ERROR_STATES.SUCCESS}`
  return ''
}

const AtomTextarea = ({onChange, size, value, errorState, ...props}) => {
  const className = cx(
    BASE_CLASS,
    `${BASE_CLASS}--${size}`,
    getErrorStateClass(errorState)
  )

  const handleChange = ev => {
    const {value, name} = ev.target
    onChange(ev, {value, name})
  }

  return (
    <textarea
      {...props}
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

  /** Value (content) of the textarea */
  value: PropTypes.string,

  /** true = error, false = success, null = neutral */
  errorState: PropTypes.bool
}

AtomTextarea.defaultProps = {
  size: SIZES.SHORT,
  onChange: () => {}
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes}
