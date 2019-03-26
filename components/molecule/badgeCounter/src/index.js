import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeBadgeCounter`
const CLASS_WITH_CHILDREN = `${BASE_CLASS}-with-children`
const CLASS_SMALL = `${BASE_CLASS}-small`
const CLASS_MEDIUM = `${BASE_CLASS}-medium`

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}
const MoleculeBadgeCounter = ({children, label, size}) => {
  const CLASS_SIZE =
    size === SIZES.MEDIUM || Boolean(label) ? CLASS_MEDIUM : CLASS_SMALL
  const className = cx(BASE_CLASS, CLASS_SIZE, {
    [CLASS_WITH_CHILDREN]: Boolean(children)
  })
  return <div className={className}>{label}</div>
}

MoleculeBadgeCounter.displayName = 'MoleculeBadgeCounter'

// Remove these comments if you need
// MoleculeBadgeCounter.contextTypes = {i18n: PropTypes.object}
MoleculeBadgeCounter.propTypes = {
  /** children */
  children: PropTypes.any,

  /** label */
  label: PropTypes.any,

  /** size */
  size: PropTypes.any
}

export default MoleculeBadgeCounter
