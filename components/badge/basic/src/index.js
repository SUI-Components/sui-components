import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class BadgeBasic extends Component {
  /**
   * @type {String}
   */
  static TRANSPARENT = 'transparent'
  /**
   * @type {Object}
   */
  static TYPE = {
    WARNING: 'warning',
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
    return label.length < BadgeBasic.MAX_LABEL_LENGTH
      ? label
      : label.substr(0, BadgeBasic.MAX_LABEL_LENGTH)
  }

  /**
   * @param  {boolean} options.success
   * @param  {boolean} options.warning
   * @param  {boolean} options.error
   * @param  {boolean} options.info
   * @return {string}
   */
  _type ({success, warning, error, info}) {
    return (error && BadgeBasic.TYPE.ERROR) ||
      (warning && BadgeBasic.TYPE.WARNING) ||
      (success && BadgeBasic.TYPE.SUCCESS) ||
      (info && BadgeBasic.TYPE.INFO) ||
      BadgeBasic.TYPE.DEFAULT
  }

  /**
   * @param  {boolean=} options.small
   * @param  {boolean=} options.large
   * @return {string}
   */
  _size ({small, large}) {
    return (small && BadgeBasic.SIZE.SMALL) ||
      (large && BadgeBasic.SIZE.LARGE) ||
      BadgeBasic.SIZE.DEFAULT
  }

  /**
   * @param  {string} options.className
   * @param  {string} options.size
   * @param  {boolean} options.transparent
   * @param  {string} options.type
   * @return {string}
   */
  _classNames ({className, size, transparent, type}) {
    const transparentClass = (transparent && `--${BadgeBasic.TRANSPARENT}`) || ''

    return cx(
      'sui-BadgeBasic',
      `sui-BadgeBasic-${size}`,
      `sui-BadgeBasic-${type}${transparentClass}`,
      className
    )
  }

  /**
   * Small badges with background can't have Icon
   * @param  {Object} options.Icon
   * @param  {string} options.size
   * @param  {boolean} options.transparent
   * @return {boolean}
   */
  _shouldRenderIcon ({Icon, size, transparent}) {
    return Icon && (size !== BadgeBasic.SIZE.SMALL || transparent)
  }

  render () {
    const {Icon, label, transparent} = this.props
    const size = this._size(this.props)
    const classNames = this._classNames({
      ...this.props,
      type: this._type(this.props),
      size
    })

    return (
      <div className={classNames}>
        {
          this._shouldRenderIcon({Icon, size, transparent}) &&
            <span>
              <Icon svgClass='sui-BadgeBasic-icon' />
            </span>
        }
        <span title={label}>
          {label}
        </span>
      </div>
    )
  }
}

BadgeBasic.displayName = 'BadgeBasic'

BadgeBasic.propTypes = {
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
  Icon: PropTypes.func,
  /**
   * Whether show a background color
   */
  transparent: PropTypes.bool,
  /**
   * Type option (error > warning > success > info, default: success)
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
  warning: PropTypes.bool,
  /**
   * Size option (small > large, default: small)
   */
  large: PropTypes.bool,
  /**
   * Size option
   * Small badges with background can't have Icon
   */
  small: PropTypes.bool
}

BadgeBasic.defaultProps = {
  error: false,
  info: false,
  large: false,
  small: false,
  success: false,
  transparent: false,
  warning: false
}

export default BadgeBasic
