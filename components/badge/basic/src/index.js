import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class BadgesBasic extends Component {
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
   * @param  {boolean} options.success
   * @param  {boolean} options.warning
   * @param  {boolean} options.error
   * @param  {boolean} options.info
   * @return {string}
   */
  _type ({success, warning, error, info}) {
    return (error && BadgesBasic.TYPE.ERROR) ||
      (warning && BadgesBasic.TYPE.WARNING) ||
      (success && BadgesBasic.TYPE.SUCCESS) ||
      (info && BadgesBasic.TYPE.INFO) ||
      BadgesBasic.TYPE.DEFAULT
  }

  /**
   * @param  {boolean=} options.small
   * @param  {boolean=} options.large
   * @return {string}
   */
  _size ({small, large}) {
    return (small && BadgesBasic.SIZE.SMALL) ||
      (large && BadgesBasic.SIZE.LARGE) ||
      BadgesBasic.SIZE.DEFAULT
  }

  /**
   * @param  {string} options.className
   * @param  {string} options.size
   * @param  {boolean} options.transparent
   * @param  {[type]} options.type
   * @return {[type]}
   */
  _classNames ({className, size, transparent, type}) {
    const transparentClass = (transparent && `--${BadgesBasic.TRANSPARENT}`) || ''

    return cx(
      'sui-BadgesBasic',
      `sui-BadgesBasic-${size}`,
      `sui-BadgesBasic-${type}${transparentClass}`,
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
    return Icon && (size !== BadgesBasic.SIZE.SMALL || transparent)
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
              <Icon svgClass='sui-BadgesBasic-icon' />
            </span>
        }
        <span title={label}>
          {label}
        </span>
      </div>
    )
  }
}

BadgesBasic.displayName = 'BadgesBasic'

BadgesBasic.propTypes = {
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

BadgesBasic.defaultProps = {
  error: false,
  info: false,
  large: false,
  small: false,
  success: false,
  transparent: false,
  warning: false
}

export default BadgesBasic
