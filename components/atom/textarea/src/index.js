import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomTextarea'
const SIZES = {
  SHORT: 'short',
  LONG: 'long'
}

const AtomTextarea = ({onChange, size, value, ...props}) => {
  const className = cx(BASE_CLASS, `${BASE_CLASS}--${size}`)

  const handleChange = ev => {
    const {value} = ev.target
    onChange(ev, {value})
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
  value: PropTypes.string
}

AtomTextarea.defaultProps = {
  size: SIZES.SHORT,
  onChange: () => {}
}

export default AtomTextarea
export {SIZES as AtomTextareaSizes}
