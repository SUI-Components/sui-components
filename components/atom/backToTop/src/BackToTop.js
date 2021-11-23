import {forwardRef, useCallback, useEffect} from 'react'
import {getTarget} from '@s-ui/js/lib/react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import cx from 'classnames'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {
  BASE_CLASS,
  CLASS_HIDE,
  CLASS_ICON,
  CLASS_READY,
  CLASS_SHOW,
  CLASS_TEXT,
  SCROLL_BEHAVIOR,
  STYLES
} from './config'
import calcBackToTopEngine, {isDocumentElement} from './calcBackToTopEngine'

const AtomBackToTop = forwardRef(
  (
    {
      iconTop: IconTop,
      isVisible,
      minHeight,
      onScroll,
      onIsVisibleToggle,
      refContainer = window.document,
      scrollBehavior = SCROLL_BEHAVIOR.SMOOTH,
      style = STYLES.DARK,
      textTop
    },
    forwardedRef
  ) => {
    const [show, setShow] = useControlledState(isVisible)

    useEffect(() => {
      const container = getTarget(refContainer)
      const handleScroll = event => {
        const [nextShow, properties] = calcBackToTopEngine(
          refContainer,
          minHeight
        )
        setShow(nextShow)
        typeof onScroll === 'function' && onScroll(event, {...properties, show})
        if (typeof onIsVisibleToggle === 'function' && show !== nextShow) {
          onIsVisibleToggle(event, {...properties, show: nextShow})
        }
      }
      container.removeEventListener('scroll', handleScroll)
      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }, [minHeight, refContainer, show, setShow, onIsVisibleToggle, onScroll])

    const scrollToTop = useCallback(() => {
      const container = getTarget(refContainer)
      const isDocument = isDocumentElement(container)
      ;(isDocument ? window : container).scrollTo({
        top: 0,
        behavior: scrollBehavior
      })
    }, [refContainer, scrollBehavior])

    return createPortal(
      <button
        title="Back to top"
        className={cx(
          BASE_CLASS,
          `${BASE_CLASS}--${style}`,
          show !== null && CLASS_READY,
          show ? CLASS_SHOW : CLASS_HIDE
        )}
        ref={forwardedRef}
        onClick={scrollToTop}
      >
        {IconTop && (
          <span className={CLASS_ICON}>
            <IconTop />
          </span>
        )}
        {textTop && <span className={CLASS_TEXT}>{textTop}</span>}
      </button>,
      refContainer === document ? refContainer.body : refContainer
    )
  }
)

AtomBackToTop.displayName = 'AtomBackToTop'

AtomBackToTop.propTypes = {
  /** Icon (component) to be displayed */
  iconTop: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** controlled visible value **/
  isVisible: PropTypes.bool,

  /** Minimum height (in pixels) to show button */
  minHeight: PropTypes.number,

  /** scroll event handler **/
  onScroll: PropTypes.func,

  /** on isVisible inner state changes handler **/
  onIsVisibleToggle: PropTypes.func,

  /** Container to be scrolled. Can be a selector, or a React ref object */
  refContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /** scroll to top effect behavior */
  scrollBehavior: PropTypes.oneOf(Object.values(SCROLL_BEHAVIOR)),
  /**
   * Styles
   *  DARK → 'dark'
   *  LIGHT →'light'
   */
  style: PropTypes.oneOf(Object.values(STYLES)),

  /** Text to be displayed */
  textTop: PropTypes.string
}

export default AtomBackToTop
