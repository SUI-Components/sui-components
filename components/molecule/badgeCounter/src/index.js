import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeBadgeCounter`
const CLASS_WITH_CHILDREN = `${BASE_CLASS}--withChildren`

const CLASS_BULLET = `${BASE_CLASS}-bullet`
const CLASS_SMALL = `${CLASS_BULLET}-small`
const CLASS_MEDIUM = `${CLASS_BULLET}-medium`
const CLASS_LARGE = `${CLASS_BULLET}-large`
const CLASS_DISABLED = 'is-disabled'
const CLASS_SELECTED = 'is-selected'

const CLASS_MEDIUM_THREE_CHARS = `${CLASS_MEDIUM}--threeCharacters`
const CLASS_LARGE_THREE_CHARS = `${CLASS_LARGE}--threeCharacters`

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const STATUS = {
  DEFAULT: 'default',
  DISABLED: 'disabled',
  SELECTED: 'selected'
}

const VARIANTS = {
  DOT: 'dot',
  EXCLAMATION: 'exclamation'
}

const MAX_LABEL = '+99'

const MoleculeBadgeCounter = ({
  children,
  label = '',
  size,
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

  const processedLabel = label.length >= 3 ? MAX_LABEL : label

  const classNameBullet = cx(
    CLASS_BULLET,
    CLASS_SIZE,
    CLASS_STATUS,
    CLASS_VARIANT,
    CLASS_LENGTH_LABEL,
    {
      [CLASS_WITH_CHILDREN]: Boolean(children)
    }
  )

  return (
    <span className={className}>
      <span className={classNameBullet}>{processedLabel}</span>
      <span>{children}</span>
    </span>
  )
}

const getClassSize = ({size, hasLabel}) => {
  if ((hasLabel && (size === SIZES.SMALL || !size)) || size === SIZES.MEDIUM) {
    return CLASS_MEDIUM
  } else if (size === SIZES.LARGE) {
    return CLASS_LARGE
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
