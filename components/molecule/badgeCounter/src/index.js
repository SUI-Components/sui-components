import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeBadgeCounter`
const CLASS_WITH_CHILDREN = `${BASE_CLASS}-with-children`

const MoleculeBadgeCounter = ({children, label}) => {
  const className = cx(BASE_CLASS, {[CLASS_WITH_CHILDREN]: Boolean(children)})
  return <div className={className}>{label}</div>
}

MoleculeBadgeCounter.displayName = 'MoleculeBadgeCounter'

// Remove these comments if you need
// MoleculeBadgeCounter.contextTypes = {i18n: PropTypes.object}
MoleculeBadgeCounter.propTypes = {
  /** children */
  children: PropTypes.any,

  /** label */
  label: PropTypes.any
}
// MoleculeBadgeCounter.defaultProps = {}

export default MoleculeBadgeCounter
