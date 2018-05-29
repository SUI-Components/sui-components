import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class StandardTag extends Component {
  get _classNames() {
    const {className, closeIcon} = this.props
    return cx(className, closeIcon && 'sui-AtomTag-hasClose')
  }

  render() {
    const {closeIcon, icon, label, onClose} = this.props

    return (
      <span className={this._classNames}>
        {icon && <span className="sui-AtomTag-icon">{icon}</span>}
        <span className="sui-AtomTag-label" title={label}>
          {label}
        </span>
        {onClose && (
          <span
            className="sui-AtomTag-secondary-closeable sui-AtomTag-secondary-icon"
            onClick={ev => onClose(ev)}
          >
            {closeIcon}
          </span>
        )}
      </span>
    )
  }
}

StandardTag.propTypes = {
  onClose: PropTypes.func,
  closeIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default StandardTag
