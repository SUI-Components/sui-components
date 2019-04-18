import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const StandardTag = ({className, closeIcon, icon, label, onClose}) => {
  const classNames = cx(className, closeIcon && 'sui-AtomTag-hasClose')

  const handleClick = ev => {
    onClose(ev)
    ev.stopPropagation()
  }

  return (
    <span className={classNames}>
      {icon && <span className="sui-AtomTag-icon">{icon}</span>}
      <span className="sui-AtomTag-label" title={label}>
        {label}
      </span>
      {closeIcon && (
        <span className="sui-AtomTag-closeable" onClick={handleClick}>
          <span className="sui-AtomTag-closeableIcon sui-AtomTag-secondary-icon">
            {closeIcon}
          </span>
        </span>
      )}
    </span>
  )
}

StandardTag.propTypes = {
  onClose: PropTypes.func,
  closeIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

StandardTag.propTypes = {
  onClose: () => {}
}

export default StandardTag
