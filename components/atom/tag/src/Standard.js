import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class StandardTag extends Component {
  get _classNames() {
    const {className, closeIcon} = this.props
    return cx(className, closeIcon && 'sui-AtomTag-hasClose')
  }

  handleClick = ev => {
    const {onClose} = this.props
    onClose(ev)
    ev.stopPropagation()
  }

  render() {
    const {closeIcon, icon, label} = this.props
    const {handleClick} = this
    return (
      <span className={this._classNames}>
        {icon && <span className="sui-AtomTag-icon">{icon}</span>}
        <span className="sui-AtomTag-label" title={label}>
          {label}
        </span>
        {closeIcon && (
          <span
            className="sui-AtomTag-secondary-closeable sui-AtomTag-secondary-icon"
            onClick={handleClick}
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
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

StandardTag.propTypes = {
  onClose: () => {}
}

export default StandardTag
