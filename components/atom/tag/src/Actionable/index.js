import PropTypes from 'prop-types'
import cx from 'classnames'
import ActionableTagContainer from './Container'
import {linkTypes as LINK_TYPES} from '../index'

const RIGHT_ICON_PLACEMENT = 'right'
const LEFT_ICON_PLACEMENT = 'left'

const getClassNames = function({className}) {
  return cx('sui-AtomTag-actionable', className)
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
  className
}) {
  return (
    <ActionableTagContainer
      className={getClassNames({className})}
      Link={linkFactory}
      onClick={ev => onClick(ev)}
      href={href}
      target={target}
      rel={rel}
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
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  href: PropTypes.string,
  iconPlacement: PropTypes.oneOf([LEFT_ICON_PLACEMENT, RIGHT_ICON_PLACEMENT]),
  onClick: PropTypes.func,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  linkFactory: PropTypes.func
}

ActionableTag.defaultProps = {
  // eslint-disable-next-line react/prop-types
  linkFactory: ({href, target, rel, className, children} = {}) => {
    const optionalProps = {
      ...(rel && {rel: getLinkTypesString(rel)})
    }
    return (
      <a href={href} target={target} className={className} {...optionalProps}>
        {children}
      </a>
    )
  }
}

export default ActionableTag
