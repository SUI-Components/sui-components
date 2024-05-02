import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import {LINK_TYPES} from '../constants.js'
import AtomTagActionableIcon from './AtomTagActionableIcon.js'
import ActionableTagContainer from './Container.js'
import {getClassNames, ICON_PLACEMENTS, onHandler} from './settings.js'
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
      value = null
    },
    forwardedRef
  ) => {
    return (
      <ActionableTagContainer
        ref={forwardedRef}
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
        <AtomTagActionableIcon
          {...(iconPlacement === ICON_PLACEMENTS.LEFT && {icon})}
          iconPlacement={ICON_PLACEMENTS.LEFT}
        />
        {label ? (
          <span className="sui-AtomTag-label" title={title || label}>
            {label}
          </span>
        ) : null}
        <AtomTagActionableIcon
          {...(iconPlacement === ICON_PLACEMENTS.RIGHT && {icon})}
          iconPlacement={ICON_PLACEMENTS.RIGHT}
        />
      </ActionableTagContainer>
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
  linkFactory: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ActionableTag
