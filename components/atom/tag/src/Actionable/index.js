import PropTypes from 'prop-types'

import {LINK_TYPES} from '../constants.js'
import ActionableTagContainer from './Container.js'
import {
  getClassNames,
  getLinkTypesString,
  LEFT_ICON_PLACEMENT,
  onHandler,
  RIGHT_ICON_PLACEMENT
} from './settings.js'

const ActionableTag = function ({
  icon,
  href,
  iconPlacement,
  label,
  onClick,
  target,
  rel,
  linkFactory,
  className,
  readOnly,
  disabled,
  title,
  value = null
}) {
  return (
    <ActionableTagContainer
      className={getClassNames({className})}
      Link={linkFactory}
      onClick={onHandler({disabled, readOnly}, onClick, {
        value,
        label
      })}
      href={href}
      target={target}
      rel={rel}
      readOnly={readOnly}
      disabled={disabled}
    >
      {icon && iconPlacement === LEFT_ICON_PLACEMENT && (
        <span className="sui-AtomTag-icon">{icon}</span>
      )}
      {label ? (
        <span className="sui-AtomTag-label" title={title || label}>
          {label}
        </span>
      ) : null}
      {icon && iconPlacement === RIGHT_ICON_PLACEMENT && (
        <span className="sui-AtomTag-secondary-icon">{icon}</span>
      )}
    </ActionableTagContainer>
  )
}

ActionableTag.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  href: PropTypes.string,
  iconPlacement: PropTypes.oneOf([LEFT_ICON_PLACEMENT, RIGHT_ICON_PLACEMENT]),
  onClick: PropTypes.func,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  linkFactory: PropTypes.func,
  title: PropTypes.string,
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
