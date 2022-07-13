import cx from 'classnames'
import PropTypes from 'prop-types'

const StandardTag = ({
  className,
  closeIcon,
  icon,
  label,
  onClose,
  value,
  disabled,
  title
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
      <span className="sui-AtomTag-label" title={title || label}>
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

StandardTag.propTypes = {
  onClose: () => {}
}

export default StandardTag
