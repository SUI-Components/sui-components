import cx from 'classnames'
import PropTypes from 'prop-types'

import {onHandler} from './constants.js'

const StandardTag = ({
  className,
  closeIcon,
  icon,
  label,
  onClose,
  value,
  readOnly,
  disabled,
  title
}) => {
  const classNames = cx(className, closeIcon && 'sui-AtomTag-hasClose')
  return (
    <span
      className={classNames}
      {...(disabled && {'aria-disabled': disabled})}
      {...(readOnly && !disabled && {'aria-readonly': readOnly})}
    >
      {icon && <span className="sui-AtomTag-icon">{icon}</span>}
      <span className="sui-AtomTag-label" title={title || label}>
        {label}
      </span>
      {closeIcon && !(disabled || readOnly) && (
        <span
          className="sui-AtomTag-closeable"
          onClick={onHandler({disabled, readOnly}, onClose, {
            value,
            label
          })}
        >
          <span className="sui-AtomTag-closeableIcon sui-AtomTag-secondary-icon">
            {closeIcon}
          </span>
        </span>
      )}
    </span>
  )
}

StandardTag.propTypes = {
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  closeIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

StandardTag.propTypes = {
  onClose: () => {}
}

export default StandardTag
