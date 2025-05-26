import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import PrimitiveInjector from '@s-ui/react-primitive-injector' // import PropTypes from 'prop-types'

import {BASE_CLASS_NAME} from './settings.js'

const PrimitiveLinkBoxRaised = forwardRef(({children, as, className, ...props}, forwardedRef) => {
  if (children === undefined) return null
  const Component = as === undefined && typeof children === 'string' ? 'span' : PrimitiveInjector
  return (
    <Component ref={forwardedRef} className={cx(`${BASE_CLASS_NAME}Raised`, className)} {...props}>
      {children}
    </Component>
  )
})

PrimitiveLinkBoxRaised.displayName = 'PrimitiveLinkBox.Raised'
PrimitiveLinkBoxRaised.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
}

export default PrimitiveLinkBoxRaised
