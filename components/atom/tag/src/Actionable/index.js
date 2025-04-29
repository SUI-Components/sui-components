import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import PrimitiveInjector from '@s-ui/react-primitive-injector'

import {LINK_TYPES} from '../constants.js'
import AtomTagActionableIcon from './AtomTagActionableIcon.js'
import ActionableTagContainer from './Container.js'
import {getClassNames, ICON_PLACEMENTS} from './settings.js'
import TagLink from './TagLink.js'

const ActionableTag = forwardRef(
  (
    {
      icon,
      href,
      iconPlacement,
      label,
      onClick,
      target,
      rel,
      linkFactory = TagLink,
      className,
      readOnly,
      disabled,
      title,
      as: As,
      value = null,
      pressed,
      defaultPressed,
      ...props
    },
    forwardedRef
  ) => {
    const isActionableTagContainer = As === undefined
    const Component = isActionableTagContainer ? ActionableTagContainer : As
    return (
      <PrimitiveInjector
        className={getClassNames({className})}
        href={href}
        target={target}
        rel={rel}
        pressed={pressed}
        defaultPressed={defaultPressed}
      >
        <Component
          link={linkFactory}
          ref={forwardedRef}
          onClick={onClick}
          readOnly={readOnly}
          disabled={disabled}
          value={value}
          label={label}
          {...props}
        >
          <AtomTagActionableIcon
            {...(iconPlacement === ICON_PLACEMENTS.LEFT && {icon})}
            iconPlacement={ICON_PLACEMENTS.LEFT}
          />
          {label ? (
            <span className="sui-AtomTag-label" title={title}>
              {label}
            </span>
          ) : null}
          <AtomTagActionableIcon
            {...(iconPlacement === ICON_PLACEMENTS.RIGHT && {icon})}
            iconPlacement={ICON_PLACEMENTS.RIGHT}
          />
        </Component>
      </PrimitiveInjector>
    )
  }
)

ActionableTag.displayName = 'ActionableTag'

ActionableTag.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  href: PropTypes.string,
  iconPlacement: PropTypes.oneOf(Object.values(ICON_PLACEMENTS)),
  onClick: PropTypes.func,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  linkFactory: PropTypes.elementType,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  as: PropTypes.elementType,
  pressed: PropTypes.bool,
  defaultPressed: PropTypes.bool
}

export default ActionableTag
