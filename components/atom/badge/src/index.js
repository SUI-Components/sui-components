import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class AtomBadge extends Component {
  /**
   * @type {String}
   */
  static TRANSPARENT = 'transparent'
  /**
   * @type {Object}
   */
  static TYPE = {
    ALERT: 'alert',
    ERROR: 'error',
    INFO: 'info',
    SUCCESS: 'success',
    DEFAULT: 'success'
  }

  /**
   * @type {Object}
   */
  static SIZE = {
    LARGE: 'large',
    SMALL: 'small',
    DEFAULT: 'small'
  }

  /**
   * Cuts off exceeded char limit
   * @param  {string} label
   * @return {string}
  */
  _truncate (label) {
    return label.length < AtomBadge.MAX_LABEL_LENGTH
      ? label
      : label.substr(0, AtomBadge.MAX_LABEL_LENGTH)
  }

  /**
   * @param  {boolean} options.success
   * @param  {boolean} options.alert
   * @param  {boolean} options.error
   * @param  {boolean} options.info
   * @return {string}
   */
  _type ({success, alert, error, info}) {
    return (error && AtomBadge.TYPE.ERROR) ||
      (alert && AtomBadge.TYPE.ALERT) ||
      (success && AtomBadge.TYPE.SUCCESS) ||
      (info && AtomBadge.TYPE.INFO) ||
      AtomBadge.TYPE.DEFAULT
  }

  /**
   * @param  {boolean=} options.small
   * @param  {boolean=} options.large
   * @return {string}
   */
  _size ({small, large}) {
    return (small && AtomBadge.SIZE.SMALL) ||
      (large && AtomBadge.SIZE.LARGE) ||
      AtomBadge.SIZE.DEFAULT
  }

  /**
   * @param  {string} options.className
   * @param  {string} options.size
   * @param  {boolean} options.transparent
   * @param  {string} options.type
   * @return {string}
   */
  _classNames ({className, size, transparent, type}) {
    const transparentClass = (transparent && `--${AtomBadge.TRANSPARENT}`) || ''

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
  _shouldRenderIcon ({icon, size, transparent}) {
    return icon && (size !== AtomBadge.SIZE.SMALL || transparent)
  }

  render () {
    const {icon, label} = this.props
    const size = this._size(this.props)
    const classNames = this._classNames({
      ...this.props,
      type: this._type(this.props),
      size
    })

    return (
      <div className={classNames}>
        {
          this._shouldRenderIcon(this.props) &&
            <span className='sui-AtomBadge-icon'>
              { icon }
            </span>
        }
        <span title={label}>
          {label}
        </span>
      </div>
    )
  }
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
