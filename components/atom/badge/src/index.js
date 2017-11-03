import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MAX_LABEL_LENGTH = 100
const TRANSPARENT = 'transparent'
const TYPE = {
  ALERT: 'alert',
  ERROR: 'error',
  INFO: 'info',
  SUCCESS: 'success',
  DEFAULT: 'success'
}
const SIZE = {
  LARGE: 'large',
  SMALL: 'small',
  DEFAULT: 'small'
}

/**
 * Cuts off exceeded char limit
 * @param  {string} label
 * @return {string}
*/
const truncateText = function (label) {
  return label.length < MAX_LABEL_LENGTH
    ? label
    : label.substr(0, MAX_LABEL_LENGTH)
}

/**
 * @param  {boolean} options.success
 * @param  {boolean} options.alert
 * @param  {boolean} options.error
 * @param  {boolean} options.info
 * @return {string}
 */
const getType = function ({success, alert, error, info}) {
  return (error && TYPE.ERROR) ||
   (alert && TYPE.ALERT) ||
   (success && TYPE.SUCCESS) ||
   (info && TYPE.INFO) ||
   TYPE.DEFAULT
}

/**
 * @param  {boolean=} options.small
 * @param  {boolean=} options.large
 * @return {string}
 */
const getSize = function ({small, large}) {
  return (small && SIZE.SMALL) ||
    (large && SIZE.LARGE) ||
    SIZE.DEFAULT
}

/**
 * @param  {string} options.className
 * @param  {string} options.size
 * @param  {boolean} options.transparent
 * @param  {string} options.type
 * @return {string}
 */
const getClassNames = function ({className, size, transparent, type}) {
  const transparentClass = (transparent && `--${TRANSPARENT}`) || ''

  return cx(
   'sui-AtomBadge',
   `sui-AtomBadge-${size}`,
   `sui-AtomBadge-${type}${transparentClass}`,
   className
  )
}

/**
 * Small badges with background can't have icon
 * @param  {Object} options.icon
 * @param  {string} options.size
 * @param  {boolean} options.transparent
 * @return {boolean}
*/
const shouldRenderIcon = function ({icon, size, transparent}) {
  return icon && (size !== SIZE.SMALL || transparent)
}

const AtomBadge = function (props) {
  const label = truncateText(props.label)
  const size = getSize(props)
  const classNames = getClassNames({
    ...props,
    type: getType(props),
    size
  })

  return (
    <div className={classNames}>
      {
        shouldRenderIcon(props) &&
          <span className='sui-AtomBadge-icon'>
            { props.icon }
          </span>
      }
      <span className='sui-AtomBadge-text' title={label}>
        {label}
      </span>
    </div>
  )
}

AtomBadge.displayName = 'AtomBadge'

AtomBadge.propTypes = {
  /**
   * CSS Classes to be added to the component
   */
  className: PropTypes.string,
  /**
   * Badge text to be shown
   */
  label: PropTypes.string.isRequired,
  /**
   * Custom svg icon to be shown
   */
  icon: PropTypes.node,
  /**
   * Whether show a background color
   */
  transparent: PropTypes.bool,
  /**
   * Type option (error > alert > success > info, default: success)
   */
  error: PropTypes.bool,
  /**
   * Type option
   */
  info: PropTypes.bool,
  /**
   * Type option
   */
  success: PropTypes.bool,
  /**
   * Type option
   */
  alert: PropTypes.bool,
  /**
   * Size option (small > large, default: small)
   */
  large: PropTypes.bool,
  /**
   * Size option
   * Small badges with background can't have icon
   */
  small: PropTypes.bool
}

AtomBadge.defaultProps = {
  error: false,
  info: false,
  large: false,
  small: false,
  success: false,
  transparent: false,
  alert: false
}

export default AtomBadge
