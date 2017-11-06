import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ActionableTagContainer from './Container'

const RIGHT_ICON_PLACEMENT = 'right'
const LEFT_ICON_PLACEMENT = 'left'

const getClassNames = function ({className}) {
  return classnames(
    'sui-AtomTag-actionable',
    className
  )
}

const ActionableTag = function ({
  Icon,
  href,
  iconPlacement,
  label,
  onClick,
  target,
  linkFactory,
  className
}) {
  return (
    <ActionableTagContainer className={getClassNames({className})}
      Link={linkFactory}
      onClick={(ev) => onClick(ev)}
      href={href}
      target={target}
    >
      {
        Icon && iconPlacement === LEFT_ICON_PLACEMENT &&
          <span className='sui-AtomTag-icon'>
            <Icon />
          </span>
      }
      <span className='sui-AtomTag-label' title={label}>
        {label}
      </span>
      {
        Icon && iconPlacement === RIGHT_ICON_PLACEMENT &&
          <span className='sui-AtomTag-secondary-icon'>
            <Icon />
          </span>
      }
    </ActionableTagContainer>
  )
}

ActionableTag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func,
  href: PropTypes.string,
  iconPlacement: PropTypes.oneOf([LEFT_ICON_PLACEMENT, RIGHT_ICON_PLACEMENT]),
  onClick: PropTypes.func,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  linkFactory: PropTypes.func
}

ActionableTag.defaultProps = {
  linkFactory: ({href, target, className, children} = {}) =>
    <a href={href} target={target} className={className}>{children}</a>
}

export default ActionableTag
