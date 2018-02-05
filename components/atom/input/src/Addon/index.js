import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomInput-addon'

const TYPES = {
  LEFT: 'left',
  RIGHT: 'right'
}

const getClassName = ({type}) =>
  cx(
    BASE_CLASS,
    `${BASE_CLASS}-${type}` // maybe not being used
  )

const Addon = ({type, label}) =>
  <span className={getClassName({type})}>
    {label}
  </span>

Addon.displayName = 'Addon'

Addon.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  label: PropTypes.string
}

export default Addon
export {
  TYPES as AddonTypes
}
