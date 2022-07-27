import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {getAttributes} from './settings.js'

const AtomIcon = ({as, className, children, outerRef, title, ...props}) => {
  return (
    <Poly
      as={as}
      className={className}
      title={title}
      ref={outerRef}
      {...getAttributes(title)}
      {...props}
    >
      {children}
    </Poly>
  )
}

AtomIcon.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.element,
  outerRef: PropTypes.func,
  title: PropTypes.string
}

export default AtomIcon
