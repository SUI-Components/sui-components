import PropTypes from 'prop-types'
import cx from 'classnames'

const StandardTag = ({
  className,
  closeIcon,
  icon,
  label,
  onClose,
  value,
  disabled
}) => {
  const classNames = cx(className, closeIcon && 'sui-AtomTag-hasClose')
  const handleClick = ev => {
    if (!disabled) {
      onClose(ev, {value, label})
      ev.stopPropagation()
    }
  }

  return (
    <span className={classNames}>
      {icon && <span className="sui-AtomTag-icon">{icon}</span>}
      <span className="sui-AtomTag-label" title={label}>
        {label}
      </span>
      {closeIcon && !disabled && (
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
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  closeIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

StandardTag.propTypes = {
  onClose: () => {}
}

export default StandardTag
