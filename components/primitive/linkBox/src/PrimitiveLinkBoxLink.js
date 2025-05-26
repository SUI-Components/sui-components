import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import PrimitiveInjector from '@s-ui/react-primitive-injector' // import PropTypes from 'prop-types'

import {BASE_CLASS_NAME} from './settings.js'

const PrimitiveLinkBoxLink = forwardRef(({children, as, className, ...props}, forwardedRef) => {
  if (children === undefined) return null
  const Component = as === undefined && typeof children === 'string' ? 'a' : PrimitiveInjector
  return (
    <Component ref={forwardedRef} className={cx(`${BASE_CLASS_NAME}Link`, className)} {...props}>
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
