import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MAX_LABEL_LENGTH = 100
const TRANSPARENT = 'transparent'
const SIZES = {
  LARGE: 'large',
  SMALL: 'small'
}

const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  ALERT: 'alert'
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
  return icon && (size !== SIZES.SMALL || transparent)
}

const AtomBadge = function (props) {
  const label = truncateText(props.label)
  const classNames = getClassNames({...props})

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
  size: PropTypes.oneOf(Object.values(SIZES)),
  type: PropTypes.oneOf(Object.values(TYPES))
}

AtomBadge.defaultProps = {
  size: SIZES.SMALL,
  type: TYPES.SUCCESS
}

export default AtomBadge
export {
  TYPES as atomBadgeTypes,
  SIZES as atomBadgeSizes
}
