import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class AtomTag extends Component {
  static MAX_LABEL_LENGTH = 100

  /**
   * @param  {string} options.className custom classname
   * @param {fn} options.onClick
   * @param {Object} icon
   * @param {Object} closeIcon
   * @return {string} all classnames joined by whitespace
   */
  _classNames ({className, onClick, icon, closeIcon}) {
    return cx(
      'sui-AtomTag',
      onClick && 'sui-AtomTag-actionable',
      className,
      icon && 'sui-AtomTag-hasIcon',
      closeIcon && 'sui-AtomTag-hasClose'
    )
  }

  /**
   * Cuts off exceeded char limit
   * @param  {string} label
   * @return {string}
   */
  _truncate (label) {
    return label.length < AtomTag.MAX_LABEL_LENGTH
      ? label
      : label.substr(0, AtomTag.MAX_LABEL_LENGTH)
  }

  /**
   * @param {Object} event
   */
  _stopEvent (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  /**
   * @param  {Object} event
   */
  onClose = (event) => {
    this._stopEvent()
    this.props.onClose()
  }

  /**
   * @param  {Object} event
   */
  onClick = (event) => {
    const onClick = this.props.onClick
    if (!onClick) return

    this._stopEvent(event)
    onClick()
  }

  render () {
    const {
      icon,
      onClose,
      closeIcon,
      onClick
    } = this.props

    const label = this._truncate(this.props.label)

    return (
      <div
        className={this._classNames(this.props)}
        onClick={this.onClick}>
        {
          icon &&
            <span className='sui-AtomTag-icon'>
              { icon }
            </span>
        }
        <span className='sui-AtomTag-label' title={label}>
          {label}
        </span>
        {
          !onClick && onClose &&
            <span className='sui-AtomTag-delete-icon'>
              { closeIcon }
            </span>
        }
      </div>
    )
  }
}

AtomTag.displayName = 'AtomTag'

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
  onClick: PropTypes.func
}

export default AtomTag
