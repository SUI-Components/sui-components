import {forwardRef, useCallback, useEffect} from 'react'
import {createPortal} from 'react-dom'

import PropTypes from 'prop-types'

import {getTarget} from '@s-ui/js/lib/react'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import BackToTopButton from './BackToTopButton.js'
import calcBackToTopEngine, {isDocumentElement} from './calcBackToTopEngine.js'
import {SCROLL_BEHAVIOR, STYLES} from './config.js'

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
        const [nextShow, properties] = calcBackToTopEngine(refContainer, minHeight)
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
      <BackToTopButton
        textTop={textTop}
        iconTop={IconTop && <IconTop />}
        show={show}
        scrollToTop={scrollToTop}
        style={style}
        ref={forwardedRef}
      />,
      refContainer === document ? refContainer.body : refContainer
    )
  }
)

AtomBackToTop.displayName = 'AtomBackToTop'

AtomBackToTop.propTypes = {
  /** Icon (component) to be displayed **/
  iconTop: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types
  /** controlled visible value **/
  isVisible: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  /** Minimum height (in pixels) to show button */
  minHeight: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  /** scroll event handler **/
  onScroll: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /** on isVisible inner state changes handler **/
  onIsVisibleToggle: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /** Container to be scrolled. Can be a selector, or a React ref object */
  refContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), // eslint-disable-line react/no-unused-prop-types
  /** scroll to top effect behavior */
  scrollBehavior: PropTypes.oneOf(Object.values(SCROLL_BEHAVIOR)), // eslint-disable-line react/no-unused-prop-types
  /**
   * Styles
   *  DARK → 'dark'
   *  LIGHT →'light'
   */
  style: PropTypes.oneOf(Object.values(STYLES)), // eslint-disable-line react/no-unused-prop-types
  /** Text to be displayed */
  textTop: PropTypes.string // eslint-disable-line react/no-unused-prop-types
}

export default AtomBackToTop

export {STYLES as backToTopStyles}
export {SCROLL_BEHAVIOR as backToTopScrollBehavior}
