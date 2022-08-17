import {forwardRef, Fragment, useMemo, useState, useEffect} from 'react'
import {createPortal} from 'react-dom'
import {isFragment} from 'react-is'

import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'
import Poly from '@s-ui/react-primitive-polymorphic-element'
import useMountedState from '@s-ui/react-hooks/lib/useMountedState'

import {BASE_CLASS, getContainer} from './settings.js'

const PrimitivePortal = forwardRef(
  ({target, as: AsProp = Fragment, children, ...props}, forwardedRef) => {
    const isMounted = useMountedState()
    const hasForwardRef = forwardedRef !== null
    const [container, setContainer] = useState('')

    useEffect(() => {
      if (isMounted()) {
        setContainer(() => getContainer(target), [target])
      }
    }, [target, setContainer, isMounted, getContainer])

    const As = useMemo(
      () => (isFragment(<AsProp />) && hasForwardRef ? 'div' : AsProp),
      [AsProp, hasForwardRef]
    )

    return container
      ? createPortal(
          <Poly
            as={As}
            {...(!isFragment(<AsProp /> || hasForwardRef) && {
              className: BASE_CLASS,
              ref: forwardedRef
            })}
          >
            <Injector {...props}>{children}</Injector>
          </Poly>,
          container
        )
      : null
  }
)

PrimitivePortal.displayName = 'PrimitivePortal'
PrimitivePortal.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,
  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target: PropTypes.object,
  /** inner virtual-dom elements **/
  children: PropTypes.node
}

export default PrimitivePortal
