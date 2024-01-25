import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import {LINK_TYPES} from '../constants.js'

/**
 * Component treated as an anchor when href is defined
 */
const ActionableTagContainer = forwardRef(
  ({Link, href, target, rel, readOnly, disabled, children, ...props}, forwardedRef) => {
    const Component = href !== undefined ? Link : 'span'
    return (
      <Component
        ref={forwardedRef}
        {...(href ? {href, target, rel} : {role: 'button'})}
        {...(disabled && {'aria-disabled': disabled})}
        {...(readOnly && !disabled && {'aria-readonly': readOnly})}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

ActionableTagContainer.propTypes = {
  Link: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default ActionableTagContainer
