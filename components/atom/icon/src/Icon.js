import PropTypes from 'prop-types'

import {IMG_ROLE} from './settings.js'

export default function AtomIcon({className, children, outerRef, title}) {
  const atrributes = title
    ? {
        role: IMG_ROLE,
        'aria-label': title
      }
    : {}

  return (
    <span className={className} title={title} ref={outerRef} {...atrributes}>
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
