import PropTypes from 'prop-types'
import cx from 'classnames'

import {
  SIZES,
  TYPES,
  DESIGNS,
  CLASS_ICON,
  CLASS_ICON_RIGHT,
  CLASS_TEXT,
  truncateText,
  getClassNames,
  shouldRenderIcon
} from './config'

const AtomBadge = ({
  icon,
  iconRight,
  label,
  size = SIZES.SMALL,
  type = TYPES.SUCCESS,
  design = DESIGNS.SOLID,
  isFitted = false,
  ...props
}) => {
  const truncatedLabel = truncateText(label)
  const classNames = getClassNames({
    icon,
    iconRight,
    label,
    size,
    type,
    design,
    isFitted,
    ...props
  })

  return (
    <div className={classNames}>
      {shouldRenderIcon({icon, ...props}) && !iconRight && (
        <span className={CLASS_ICON}>{icon}</span>
      )}
      <span className={CLASS_TEXT} title={truncatedLabel}>
        {label}
      </span>
      {shouldRenderIcon({icon, ...props}) && iconRight && (
        <span className={cx(CLASS_ICON, CLASS_ICON_RIGHT)}>{icon}</span>
      )}
    </div>
  )
}

AtomBadge.displayName = 'AtomBadge'

AtomBadge.propTypes = {
  /**
   * Design style of button: 'solid' (default) or 'soft'
   */
  design: PropTypes.oneOf(Object.values(DESIGNS)),

  /** Badge text to be shown */
  label: PropTypes.string.isRequired,

  /** Custom svg icon to be shown */
  icon: PropTypes.node,

  /** Icon to the right (left by default) */
  iconRight: PropTypes.bool,

  /** element becomes border-margin-padding-less */
  isFitted: PropTypes.nool,

  /** Whether show a background color */
  transparent: PropTypes.bool,

  /** Determine the size of the badge */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Determine the type of the badge */
  type: PropTypes.oneOfType(
    PropTypes.oneOf(Object.values(TYPES)), // Better use one of defined types
    PropTypes.string // Can even custom your own type
  )
}

export default AtomBadge
