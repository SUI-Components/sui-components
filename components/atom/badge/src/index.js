import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  CLASS_ICON,
  CLASS_ICON_RIGHT,
  CLASS_TEXT,
  DESIGNS,
  getClassNames,
  shouldRenderIcon,
  SIZES,
  TYPES
} from './config.js'

const AtomBadge = ({
  icon,
  iconRight,
  label,
  size = SIZES.SMALL,
  type = TYPES.SUCCESS,
  design = DESIGNS.SOLID,
  className,
  title,
  ...props
}) => {
  const classNames = getClassNames({
    icon,
    label,
    size,
    type,
    design,
    className,
    ...props
  })

  return (
    <div className={classNames} {...props}>
      {shouldRenderIcon({icon, ...props}) && !iconRight && <span className={CLASS_ICON}>{icon}</span>}
      <span className={CLASS_TEXT} title={title}>
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
  label: PropTypes.oneOfType(PropTypes.string, PropTypes.node).isRequired,

  /** Custom svg icon to be shown */
  icon: PropTypes.node,

  /** Icon to the right (left by default) */
  iconRight: PropTypes.bool,

  /** Whether show a background color */
  transparent: PropTypes.bool,

  /** Determine the size of the badge */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Determine the type of the badge */
  type: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(TYPES)), // Better use one of defined types
    PropTypes.string // Can even custom your own type
  ]),

  /* Custom class name */
  className: PropTypes.string,

  /** Custom title attribute for the badge */
  title: PropTypes.string
}

export default AtomBadge

export {DESIGNS as atomBadgeDesigns, TYPES as atomBadgeTypes, SIZES as atomBadgeSizes}
