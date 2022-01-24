import PropTypes from 'prop-types'

import {IMG_ROLE} from './settings.js'

export default function AtomIcon({className, children, outerRef, title}) {
  const a11yAttributes = title
    ? {
        role: IMG_ROLE,
        ariaLabel: title
      }
    : {}

  return (
    <span
      className={className}
      title={title}
      ref={outerRef}
      {...a11yAttributes}
    >
      {children}
    </span>
  )
}

AtomIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  outerRef: PropTypes.func,
  title: PropTypes.string
}
