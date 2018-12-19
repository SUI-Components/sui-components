import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class StandardTag extends Component {
  get _classNames() {
    const {className, closeIcon} = this.props
    return cx(className, closeIcon && 'sui-AtomTag-hasClose')
  }

  render() {
    const {closeIcon: CloseIcon, icon: Icon, label, onClose} = this.props

    return (
      <span className={this._classNames}>
        {Icon && (
          <span className="sui-AtomTag-icon">
            <Icon />
          </span>
        )}
        <span className="sui-AtomTag-label" title={label}>
          {label}
        </span>
        {onClose && (
          <span
            className="sui-AtomTag-secondary-closeable sui-AtomTag-secondary-icon"
            onClick={ev => onClose(ev)}
          >
            <CloseIcon />
          </span>
        )}
      </span>
    )
  }
}

StandardTag.propTypes = {
  onClose: PropTypes.func,
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default StandardTag
