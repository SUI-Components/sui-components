import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component treated as an anchor when href is defined
 */
const ActionableTagContainer = ({Link, href, target, children, ...props}) => {
  return href ? (
    <Link href={href} target={target} {...props}>
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
  children: PropTypes.node.isRequired
}

export default ActionableTagContainer
