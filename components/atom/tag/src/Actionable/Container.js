import PropTypes from 'prop-types'
import {linkTypes as LINK_TYPES} from '../index'

/**
 * Component treated as an anchor when href is defined
 */
const ActionableTagContainer = ({
  Link,
  href,
  target,
  rel,
  children,
  ...props
}) => {
  return href ? (
    <Link href={href} target={target} rel={rel} {...props}>
      {children}
    </Link>
  ) : (
    <span {...props}>{children}</span>
  )
}

ActionableTagContainer.propTypes = {
  Link: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  children: PropTypes.node.isRequired
}

export default ActionableTagContainer
