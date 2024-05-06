import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import {getLinkTypesString} from './settings.js'

// eslint-disable react/no-unused-prop-types
const TagLink = forwardRef(({href, target, rel, className, role, children, ...props}, forwardRef) => (
  <a
    ref={forwardRef}
    href={href}
    target={target}
    className={className}
    role={role}
    {...{...props, ...(rel && {rel: getLinkTypesString(rel)})}}
  >
    {children}
  </a>
))

TagLink.propTypes = {
  /**
   * URL to be added on the HTML link
   */
  href: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * Target to be added on the HTML link
   */
  target: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * Role to be added on the HTML link
   */
  role: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * Class name to be added on the HTML link
   */
  className: PropTypes.string // eslint-disable-line react/no-unused-prop-types
  /**
   * Content to be included in the link
   */
}

TagLink.displayName = 'TagLink'

export default TagLink
