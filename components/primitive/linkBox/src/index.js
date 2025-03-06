import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import PrimitiveInjector from '@s-ui/react-primitive-injector'

import PrimitiveLinkBoxLink from './PrimitiveLinkBoxLink.js'
import PrimitiveLinkBoxRaised from './PrimitiveLinkBoxRaised.js'
import {BASE_CLASS_NAME} from './settings.js'

const PrimitiveLinkBox = forwardRef(({children, as, className, ...props}) => {
  if (children === undefined) return null
  const Component = as === undefined && typeof children === 'string' ? 'div' : PrimitiveInjector
  return (
    <Component className={cx(BASE_CLASS_NAME, className)} {...props}>
      {children}
    </Component>
  )
})

PrimitiveLinkBox.displayName = 'PrimitiveLinkBox'
PrimitiveLinkBox.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string
}

export {PrimitiveLinkBoxRaised, PrimitiveLinkBoxLink}

export default PrimitiveLinkBox
