import PropTypes from 'prop-types'
import cx from 'classnames'

const MAX_LABEL_LENGTH = 100
const TRANSPARENT = 'transparent'
const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  ALERT: 'alert',
  NEW: 'new',
  NEUTRAL: 'neutral',
  PRIMARY: 'primary'
}

export const DESIGNS = {
  SOLID: 'solid',
  SOFT: 'soft'
}

const BASE_CLASS = `sui-AtomBadge`
const CLASS_ICON = `${BASE_CLASS}-icon`
const CLASS_ICON_RIGHT = `${CLASS_ICON}--iconRight`
const CLASS_TEXT = `${CLASS_ICON}-text`

/**
 * Cuts off exceeded char limit
 * @param  {string} label
 * @return {string}
 */
const truncateText = function(label) {
  return label.length < MAX_LABEL_LENGTH
    ? label
    : label.substr(0, MAX_LABEL_LENGTH)
}

/**
 * @param  {object} options
 * @param  {string} options.size
 * @param  {boolean} options.transparent
 * @param  {object} options.iconRight
 * @param  {string} options.type
 * @return {string}
 */
const getClassNames = function({design, iconRight, size, transparent, type}) {
  const transparentClass = (transparent && `--${TRANSPARENT}`) || ''

  return cx(
    BASE_CLASS,
    `${BASE_CLASS}-${size}`,
    `${BASE_CLASS}-${type}${transparentClass}`,
    design && `${BASE_CLASS}-${type}--${design}`,
    {
      [CLASS_ICON_RIGHT]: iconRight
    }
  )
}

/**
 * Small badges with background can't have icon
 * @param  {Object} options
 * @param  {Object} options.icon
 * @param  {string} options.size
 * @param  {boolean} options.transparent
 * @return {boolean}
 */
const shouldRenderIcon = function({icon, size, transparent}) {
  return icon && (size !== SIZES.SMALL || transparent)
}

const AtomBadge = function({icon, iconRight, label, ...props}) {
  const truncatedLabel = truncateText(label)
  const classNames = getClassNames(props)

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

  /** Whether show a background color */
  transparent: PropTypes.bool,

  /** Determine the size of the badge */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Determine the type of the badge */
  type: PropTypes.oneOf(Object.values(TYPES))
}

AtomBadge.defaultProps = {
  size: SIZES.SMALL,
  type: TYPES.SUCCESS
}

export default AtomBadge
export {
  DESIGNS as atomBadgeDesigns,
  TYPES as atomBadgeTypes,
  SIZES as atomBadgeSizes
}
