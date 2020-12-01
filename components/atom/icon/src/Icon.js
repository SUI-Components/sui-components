import PropTypes from 'prop-types'

const IMG_ROLE = 'img'

export default function AtomIcon({className, children, outerRef}) {
  return (
    <span className={className} role={IMG_ROLE} ref={outerRef}>
      {children}
    </span>
  )
}

AtomIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  outerRef: PropTypes.func
}
