import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS,
  CLASS_BULLET,
  CLASS_BULLET_WITH_CHILDREN,
  CLASS_DISABLED,
  CLASS_LARGE,
  CLASS_LARGE_THREE_CHARS,
  CLASS_MEDIUM,
  CLASS_MEDIUM_THREE_CHARS,
  CLASS_SELECTED,
  CLASS_SMALL,
  CLASS_WITH_CHILDREN,
  MAX_LABEL,
  SIZES,
  STATUS,
  VARIANTS
} from './config.js'

const MoleculeBadgeCounter = ({
  children,
  label = '',
  labelMax = MAX_LABEL,
  size = SIZES.MEDIUM,
  status,
  variant
}) => {
  const hasLabel = Boolean(label)
  const hasChildren = Boolean(children)

  const CLASS_SIZE = getClassSize({size, hasLabel})

  const CLASS_STATUS = getClassStatus({status})

  const CLASS_LENGTH_LABEL = getClassLengthLabel({hasLabel, label, size})

  const CLASS_VARIANT = variant ? `${CLASS_BULLET}-${variant}` : ''

  const className = cx(BASE_CLASS, {
    [CLASS_WITH_CHILDREN]: hasChildren
  })

  const processedLabel =
    parseFloat(label) > parseFloat(labelMax) ? `+${labelMax}` : label

  const classNameBullet = cx(
    CLASS_BULLET,
    CLASS_SIZE,
    CLASS_STATUS,
    CLASS_VARIANT,
    CLASS_LENGTH_LABEL,
    {
      [CLASS_BULLET_WITH_CHILDREN]: Boolean(children)
    }
  )

  return (
    <span className={className}>
      <span className={classNameBullet}>{processedLabel}</span>
      {children}
    </span>
  )
}

const getClassSize = ({size, hasLabel}) => {
  if (size !== SIZES.SMALL) {
    return {
      [SIZES.MEDIUM]: CLASS_MEDIUM,
      [SIZES.LARGE]: CLASS_LARGE
    }[size]
  } else if (hasLabel && size === SIZES.SMALL) {
    return CLASS_MEDIUM
  }
  return CLASS_SMALL
}

const getClassStatus = ({status}) => {
  if (status === STATUS.DISABLED) return CLASS_DISABLED
  if (status === STATUS.SELECTED) return CLASS_SELECTED

  return ''
}

const getClassLengthLabel = ({hasLabel, label, size}) => {
  if (!hasLabel || (label + '').length < 3) return ''

  if (size === SIZES.MEDIUM) return CLASS_MEDIUM_THREE_CHARS
  return CLASS_LARGE_THREE_CHARS
}

MoleculeBadgeCounter.displayName = 'MoleculeBadgeCounter'

MoleculeBadgeCounter.propTypes = {
  /** children */
  children: PropTypes.node,

  /** Number to be displayed inside the bullet */
  label: PropTypes.number,

  /** Maximum number to be displayed inside the bullet */
  labelMax: PropTypes.number,

  /** Size (small, medium or large) */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Status (default, disabled or selected) */
  status: PropTypes.oneOf(Object.values(STATUS)),

  /** Variant (dot or exclamation) */
  variant: PropTypes.oneOf(Object.values(VARIANTS))
}

export default MoleculeBadgeCounter

export {
  SIZES as moleculeBadgeCounterSizes,
  STATUS as moleculeBadgeCounterStatus,
  VARIANTS as moleculeBadgeCounterVariants
}
