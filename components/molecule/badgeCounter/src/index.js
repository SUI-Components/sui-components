import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeBadgeCounter`
const CLASS_WITH_CHILDREN = `${BASE_CLASS}--with-children`

const CLASS_BULLET = `${BASE_CLASS}-bullet`
const CLASS_SMALL = `${CLASS_BULLET}-small`
const CLASS_MEDIUM = `${CLASS_BULLET}-medium`
const CLASS_MEDIUM_ONE_CHAR = `${CLASS_MEDIUM}-one-character`
const CLASS_MEDIUM_TWO_CHARS = `${CLASS_MEDIUM}-two-characters`
const CLASS_MEDIUM_THREE_CHARS = `${CLASS_MEDIUM}-three-characters`

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
}

const VARIANTS = {
  DOT: 'dot',
  EXCLAMATION: 'exclamation'
}

const getClassLengthLabel = label => {
  const lengthLabel = label.length

  switch (lengthLabel) {
    case 1:
      return CLASS_MEDIUM_ONE_CHAR
    case 2:
      return CLASS_MEDIUM_TWO_CHARS
    default:
      return CLASS_MEDIUM_THREE_CHARS
  }
}
const MoleculeBadgeCounter = ({children, label, size, variant}) => {
  const hasLabel = Boolean(label)
  const hasChildren = Boolean(children)

  const CLASS_SIZE =
    size === SIZES.MEDIUM || hasLabel ? CLASS_MEDIUM : CLASS_SMALL
  const CLASS_LENGTH_LABEL = hasLabel ? getClassLengthLabel(label) : ''
  const CLASS_VARIANT = variant ? `${CLASS_SIZE}-${variant}` : ''

  const className = cx(BASE_CLASS, {
    [CLASS_WITH_CHILDREN]: hasChildren
  })

  const classNameBullet = cx(
    CLASS_BULLET,
    CLASS_SIZE,
    CLASS_VARIANT,
    CLASS_LENGTH_LABEL,
    {
      [CLASS_WITH_CHILDREN]: Boolean(children)
    }
  )
  return (
    <span className={className}>
      <span className={classNameBullet}>{label}</span>
      <span>{children}</span>
    </span>
  )
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
  size: PropTypes.any,

  /** variant */
  variant: PropTypes.any
}

export default MoleculeBadgeCounter
export {
  SIZES as moleculeBadgeCounterSizes,
  VARIANTS as moleculeBadgeCounterVariants
}
