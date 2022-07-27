import PropTypes from 'prop-types'

import {LINK_TYPES} from '../constants.js'

/**
 * Component treated as an anchor when href is defined
 */
const ActionableTagContainer = ({
  Link,
  href,
  target,
  rel,
  readOnly,
  disabled,
  children,
  ...props
}) => {
  return href && !(disabled || readOnly) ? (
    <Link role="button" href={href} target={target} rel={rel} {...props}>
      {children}
    </Link>
  ) : (
    <span
      role="button"
      {...props}
      {...(disabled && {'aria-disabled': disabled})}
      {...(readOnly && !disabled && {'aria-readonly': readOnly})}
    >
      {children}
    </span>
  )
}

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
