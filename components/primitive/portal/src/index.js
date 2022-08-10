import {forwardRef, Fragment, useMemo} from 'react'
import {createPortal} from 'react-dom'
import {isFragment} from 'react-is'

import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'
import Poly from '@s-ui/react-primitive-polymorphic-element'
import {getTarget} from '@s-ui/js/lib/react/index.js'

const PrimitivePortal = forwardRef(
  (
    {
      container = globalThis?.document?.body,
      as: AsProp = Fragment,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const target = useMemo(() => getTarget(container), [container])
    const As = useMemo(
      () =>
        isFragment(<AsProp />) && forwardedRef !== undefined ? 'div' : AsProp,
      [AsProp, forwardedRef]
    )
    return target
      ? createPortal(
          <Poly
            as={As}
            {...(!isFragment(<AsProp />) ||
              (forwardedRef !== undefined && {
                className: 'sui-PrimitivePortal',
                ref: forwardedRef
              }))}
          >
            <Injector {...props}>{children}</Injector>
          </Poly>,
          target
        )
      : null
  }
)

PrimitivePortal.displayName = 'PrimitivePortal'
PrimitivePortal.propTypes = {
  as: PropTypes.elementType,
  container: PropTypes.object,
  children: PropTypes.node
}

export default PrimitivePortal
