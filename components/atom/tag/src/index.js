import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ActionableTag from './Actionable'
import StandardTag from './Standard'

const SIZES = {
  MEDIUM: 'medium',
  SMALL: 'small'
}

class AtomTag extends Component {
  static MAX_LABEL_LENGTH = 100

  /**
   * @return {string}
   */
  get _classNames() {
    const {icon, size} = this.props
    return classnames(
      'sui-AtomTag',
      `sui-AtomTag-${size}`,
      icon && 'sui-AtomTag-hasIcon'
    )
  }

  get _isActionable() {
    return this.props.onClick || this.props.href
  }

  /**
   * returns key:value in obj except for those keys defined in props
   * @param {Object} obj
   * @param {Array.<string>} props
   * @return {Object}
   */
  _filterKeys(obj, props) {
    return Object.keys(obj).reduce((acc, key) => {
      if (props.indexOf(key) === -1) {
        acc[key] = obj[key]
      }
      return acc
    }, {})
  }

  /**
   * Cuts off exceeded char limit
   * @param  {string} label
   * @return {string}
   */
  _truncate(label) {
    return label.length < AtomTag.MAX_LABEL_LENGTH
      ? label
      : label.substr(0, AtomTag.MAX_LABEL_LENGTH)
  }

  /**
   * Removes all actionable tag props from the react props
   * @return {Object}
   */
  get _standardProps() {
    const ACTIONABLE_ONLY_PROPS = [
      'href',
      'iconPlacement',
      'target',
      'actionable',
      'linkFactory'
    ]
    return this._filterKeys(this.props, ACTIONABLE_ONLY_PROPS)
  }

  /**
   * Removes all standard tag props from the react props
   * @return {Object}
   */
  get _actionableProps() {
    const STANDARD_ONLY_PROPS = ['closeIcon', 'onClose']
    return this._filterKeys(this.props, STANDARD_ONLY_PROPS)
  }

  render() {
    return this._isActionable ? (
      <ActionableTag {...this._actionableProps} className={this._classNames} />
    ) : (
      <StandardTag {...this._standardProps} className={this._classNames} />
    )
  }
}

AtomTag.displayName = 'AtomTag'

AtomTag.defaultProps = {
  iconPlacement: 'left'
}

AtomTag.propTypes = {
  /**
   * Custom classes
   */
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClose: PropTypes.func,
  /**
   * Will only be shown if the onClose fn is defined
   */
  closeIcon: PropTypes.node,
  /**
   * If defined, onClose will be ignored
   */
  onClick: PropTypes.func,
  /**
   * generates type of link
   */
  linkFactory: PropTypes.func,
  /**
   * Actionable tags can be used as an anchor. Same as <a> href
   */
  href: PropTypes.string,
  /**
   * To be used if href is defined
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /**
   * Actionable tags can have iconPlacement='right'
   */
  iconPlacement: PropTypes.oneOf(['right', 'left']),
  /**
   * Tag size
   */
  size: PropTypes.oneOf(Object.values(SIZES))
}

AtomTag.defaultProps = {
  size: SIZES.MEDIUM
}

export default AtomTag
export {SIZES as atomTagSizes}
