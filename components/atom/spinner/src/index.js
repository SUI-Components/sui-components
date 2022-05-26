import {forwardRef, useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import DefaultSpinner from './DefaultSpinner.js'
import SUILoader from './SUILoader/index.js'

import {
  addParentClass,
  DELAY,
  getParentClassName,
  OVERLAY_TYPES,
  removeParentClass,
  TYPES
} from './settings.js'

const AtomSpinner = forwardRef(
  (
    {
      children = <DefaultSpinner />,
      delayed: delayedFromProps = false,
      loader = <SUILoader />,
      overlayType = OVERLAY_TYPES.LIGHT,
      type = TYPES.SECTION
    },
    forwardedRef
  ) => {
    const [delayed, setDelayed] = useState(delayedFromProps)
    const refSpinner = useRef()

    useEffect(() => {
      const parentClassName = getParentClassName({
        overlayType,
        type
      })
      const parentNodeClassList = refSpinner.current.parentNode.classList

      if (!delayed) addParentClass(parentNodeClassList)(parentClassName)

      const timer = setTimeout(() => {
        setDelayed(false)
        addParentClass(parentNodeClassList)(parentClassName)
      }, DELAY)

      return () => {
        clearTimeout(timer)
        removeParentClass(parentNodeClassList)(parentClassName)
      }
    }, [delayed, overlayType, type])

    return (
      <div ref={refSpinner} className="sui-AtomSpinner-content">
        <Injector
          delayed={delayed}
          loader={loader}
          overlayType={overlayType}
          ref={forwardedRef}
          type={type}
        >
          {children}
        </Injector>
      </div>
    )
  }
)

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  /** Children with injected props */
  children: PropTypes.elementType,

  /** Makes the spinner appear after 500 ms */
  delayed: PropTypes.bool,

  /** Loader to be shown in the middle of the container */
  loader: PropTypes.elementType,

  /**
   * Possible options:
   * 'ACCENT'
   * 'DARK'
   * 'LIGHT'
   * 'PRIMARY'
   * 'TRANSPARENT'
   */
  overlayType: PropTypes.oneOf(Object.values(OVERLAY_TYPES)),

  /**
   * Possible options:
   * 'FULL': The spinner fits the whole page container
   * 'SECTION': The spinner fits a specific site component
   */
  type: PropTypes.oneOf(Object.values(TYPES))
}

export {OVERLAY_TYPES as atomSpinnerOverlayTypes, TYPES as atomSpinnerTypes}

export default AtomSpinner
