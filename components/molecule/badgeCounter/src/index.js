import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS,
  CLASS_BULLET,
  CLASS_BULLET_WITH_CHILDREN,
  CLASS_WITH_CHILDREN,
  getClassLengthLabel,
  getClassSize,
  MAX_LABEL,
  SIZES,
  STATUS,
  VARIANTS
} from './config.js'

const MoleculeBadgeCounter = ({
  children,
  className: classNameProp,
  role = 'status',
  label = '',
  labelMax = MAX_LABEL,
  size = SIZES.MEDIUM,
  status = STATUS.DEFAULT,
  variant,
  ...props
}) => {
  const hasLabel = Boolean(label)
  const hasChildren = Boolean(children)

  const classNameWrapper = cx(BASE_CLASS, {
    [CLASS_WITH_CHILDREN]: hasChildren
  })

  const processedLabel = parseFloat(label) > parseFloat(labelMax) ? `+${labelMax}` : label

  const classNameBullet = cx(
    CLASS_BULLET,
    getClassSize({size, hasLabel}),
    `${CLASS_BULLET}--status-${status}`,
    variant ? `${CLASS_BULLET}-${variant}` : '',
    getClassLengthLabel({hasLabel, label, size}),
    {
      [CLASS_BULLET_WITH_CHILDREN]: Boolean(children)
    },
    classNameProp
  )

  return (
    <span className={classNameWrapper}>
      <span className={classNameBullet} role={role} {...props}>
        {processedLabel}
      </span>
      {children}
    </span>
  )
}

MoleculeBadgeCounter.displayName = 'MoleculeBadgeCounter'

MoleculeBadgeCounter.propTypes = {
  /** children */
  children: PropTypes.node,

  /** Number to be displayed inside the bullet */
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Maximum number to be displayed inside the bullet */
  labelMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Size (small, medium or large) */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Status (default, disabled or selected) */
  status: PropTypes.oneOf(Object.values(STATUS)),

  /** Variant (dot or exclamation) */
  variant: PropTypes.oneOf(Object.values(VARIANTS)),

  /** Additional classes */
  className: PropTypes.string,

  /** html Role */
  role: PropTypes.string
}

export default MoleculeBadgeCounter

export {
  SIZES as moleculeBadgeCounterSizes,
  STATUS as moleculeBadgeCounterStatus,
  VARIANTS as moleculeBadgeCounterVariants
}
