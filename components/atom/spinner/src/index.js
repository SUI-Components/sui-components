import {forwardRef, useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {useNearScreen} from '@s-ui/react-hooks'

import Injector from '@s-ui/react-primitive-injector'

import SUILoader from './SUILoader/index.js'
import DefaultSpinner from './DefaultSpinner.js'
import {addParentClass, DELAY, getParentClassName, OVERLAY_TYPES, removeParentClass, SIZES, TYPES} from './settings.js'

const AtomSpinner = forwardRef(
  (
    {
      children = <DefaultSpinner />,
      isDelayed: isDelayedFromProps = false,
      loader = <SUILoader />,
      overlayType = OVERLAY_TYPES.LIGHT,
      size = SIZES.MEDIUM,
      type = TYPES.SECTION,
      ariaLabel = 'Loading content',
      ariaLive = 'polite',
      speed = SPEEDS.DEFAULT,
      disableAnimation = false
    },
    forwardedRef
  ) => {
    const [isDelayed, setIsDelayed] = useState(isDelayedFromProps)
    const refSpinner = useRef()
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    useEffect(() => {
      const parentClassName = getParentClassName({
        overlayType,
        size,
        type
      })
      const parentNodeClassList = refSpinner.current.parentNode.classList

      if (!isDelayed) addParentClass(parentNodeClassList)(parentClassName)

      const timer = setTimeout(() => {
        setIsDelayed(false)
        addParentClass(parentNodeClassList)(parentClassName)
      }, DELAY)

      return () => {
        clearTimeout(timer)
        removeParentClass(parentNodeClassList)(parentClassName)
      }
    }, [isDelayed, overlayType, size, type])

    return (
      <div 
        ref={refSpinner} 
        className={cx('sui-AtomSpinner-content', {
          'sui-AtomSpinner--noAnimation': disableAnimation || prefersReducedMotion
        })}
        role="status"
        aria-live={ariaLive}
        aria-label={ariaLabel}
      >
        <span className="sui-AtomSpinner-visuallyHidden">
          {ariaLabel}
        </span>
        <Injector
          isDelayed={isDelayed}
          loader={loader}
          overlayType={overlayType}
          ref={forwardedRef}
          size={size}
          type={type}
          speed={speed}
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
  isDelayed: PropTypes.bool,

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
   * 'SMALL' and 'MEDIUM'
   */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /**
   * Possible options:
   * 'FULL': The spinner fits the whole page container
   * 'SECTION': The spinner fits a specific site component
   */
  type: PropTypes.oneOf(Object.values(TYPES)),

  /** Accessible label for the spinner */
  ariaLabel: PropTypes.string,

  /** ARIA live region announcement mode */
  ariaLive: PropTypes.oneOf(['polite', 'assertive', 'off']),

  /** Animation speed */
  speed: PropTypes.oneOf(Object.values(SPEEDS)),

  /** Disable animation regardless of user preferences */
  disableAnimation: PropTypes.bool
}

export {OVERLAY_TYPES as atomSpinnerOverlayTypes, TYPES as atomSpinnerTypes, SIZES as atomSpinnerSizes}

export default AtomSpinner
