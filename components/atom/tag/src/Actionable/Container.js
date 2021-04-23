import PropTypes from 'prop-types'
import {LINK_TYPES} from '../constants'

/**
 * Component treated as an anchor when href is defined
 */
const ActionableTagContainer = ({
  Link,
  href,
  target,
  rel,
  disabled,
  children,
  ...props
}) => {
  return href && !disabled ? (
    <Link
      role="button"
      href={href}
      target={target}
      rel={rel}
      disabled={disabled}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <span role="button" {...props} disabled={disabled}>
      {children}
    </span>
  )
}

ActionableTagContainer.propTypes = {
  Link: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default ActionableTagContainer
