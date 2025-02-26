import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import PrimitiveInjector from '@s-ui/react-primitive-injector' // import PropTypes from 'prop-types'

import {BASE_CLASS_NAME} from './settings.js'

const PrimitiveLinkBoxLink = forwardRef(({children, as: Component = PrimitiveInjector, className, ...props}) => {
  return (
    <Component className={cx(`${BASE_CLASS_NAME}Link`, className)} {...props}>
      {children}
    </Component>
  )
})

PrimitiveLinkBoxLink.displayName = 'PrimitiveLinkBox.Link'
PrimitiveLinkBoxLink.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
}

export default PrimitiveLinkBoxLink
