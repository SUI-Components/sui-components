import PropTypes from 'prop-types'
import cx from 'classnames'
import ActionableTagContainer from './Container'
import {LINK_TYPES} from '../constants'

const RIGHT_ICON_PLACEMENT = 'right'
const LEFT_ICON_PLACEMENT = 'left'

const getClassNames = function({className, disabled}) {
  return cx(
    'sui-AtomTag-actionable',
    disabled && 'sui-AtomTag--disabled',
    className
  )
}

const getLinkTypesString = types => types && types.join(' ')

const ActionableTag = function({
  icon,
  href,
  iconPlacement,
  label,
  onClick = () => {},
  target,
  rel,
  linkFactory,
  className,
  disabled,
  value = null
}) {
  return (
    <ActionableTagContainer
      className={getClassNames({className, disabled})}
      Link={linkFactory}
      onClick={ev => {
        if (disabled) {
          return
        }
        onClick(ev, {value, label})
      }}
      href={href}
      target={target}
      rel={rel}
      disabled={disabled}
    >
      {icon && iconPlacement === LEFT_ICON_PLACEMENT && (
        <span className="sui-AtomTag-icon">{icon}</span>
      )}
      <span className="sui-AtomTag-label" title={label}>
        {label}
      </span>
      {icon && iconPlacement === RIGHT_ICON_PLACEMENT && (
        <span className="sui-AtomTag-secondary-icon">{icon}</span>
      )}
    </ActionableTagContainer>
  )
}

ActionableTag.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  href: PropTypes.string,
  iconPlacement: PropTypes.oneOf([LEFT_ICON_PLACEMENT, RIGHT_ICON_PLACEMENT]),
  onClick: PropTypes.func,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  linkFactory: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

ActionableTag.defaultProps = {
  // eslint-disable-next-line react/prop-types
  linkFactory: ({href, target, rel, className, role, children} = {}) => {
    const optionalProps = {
      ...(rel && {rel: getLinkTypesString(rel)})
    }
    return (
      <a
        href={href}
        target={target}
        className={className}
        role={role}
        {...optionalProps}
      >
        {children}
      </a>
    )
  }
}

export default ActionableTag
