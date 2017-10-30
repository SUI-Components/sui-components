import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ActionableTagContainer from './Container'

class ActionableTag extends Component {
  static RIGHT_ICON_PLACEMENT = 'right'

  get _classNames () {
    const {className} = this.props
    return classnames(
      'sui-AtomTag-actionable',
      className
    )
  }

  render () {
    const {
      Icon,
      href,
      iconPlacement,
      label,
      onClick,
      target,
      linkFactory
    } = this.props

    return (
      <ActionableTagContainer className={this._classNames}
        Link={linkFactory}
        onClick={(ev) => onClick(ev)}
        href={href}
        target={target}
      >
        {
          Icon && iconPlacement !== ActionableTag.RIGHT_ICON_PLACEMENT &&
            <span className='sui-AtomTag-icon'>
              <Icon />
            </span>
        }
        <span className='sui-AtomTag-label' title={label}>
          {label}
        </span>
        {
          Icon && iconPlacement === ActionableTag.RIGHT_ICON_PLACEMENT &&
            <span className='sui-AtomTag-secondary-icon'>
              <Icon />
            </span>
        }
      </ActionableTagContainer>
    )
  }
}

ActionableTag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func,
  href: PropTypes.string,
  iconPlacement: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  linkFactory: PropTypes.func
}

ActionableTag.defaultProps = {
  linkFactory: ({href, target, className, children} = {}) =>
    <a href={href} target={target} className={className}>{children}</a>
}

export default ActionableTag
