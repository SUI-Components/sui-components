import {useCallback, useEffect, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {getTarget} from '@s-ui/js/lib/react'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import calcBackToTopEngine, {isDocumentElement} from './calcBackToTopEngine'
import {SCROLL_BEHAVIOR, STYLES} from './settings'

const BASE_CLASS = 'sui-AtomBackToTop'
const CLASS_ICON = `${BASE_CLASS}-icon`
const CLASS_TEXT = `${BASE_CLASS}-text`
const CLASS_SHOW = `${BASE_CLASS}--show`
const CLASS_HIDE = `${BASE_CLASS}--hide`
const CLASS_READY = `${BASE_CLASS}--ready`

const AtomBackToTop = forwardRef(
  (
    {
      iconTop: IconTop,
      isVisible,
      minHeight,
      textTop,
      refContainer = window.document,
      scrollBehavior = SCROLL_BEHAVIOR.SMOOTH,
      style = STYLES.DARK
    },
    forwardedRef
  ) => {
    const [show, setShow] = useControlledState(isVisible)

    useEffect(() => {
      const container = getTarget(refContainer)
      const handleScroll = () => {
        const [show] = calcBackToTopEngine(refContainer, minHeight)

        setShow(show)
      }
      container.removeEventListener('scroll', handleScroll)
      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }, [minHeight, refContainer, show, setShow])

    const scrollToTop = useCallback(() => {
      const container = getTarget(refContainer)
      const isDocument = isDocumentElement(container)
      if (isDocument) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        container.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }, [refContainer])

    return (
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
      </button>
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

  /** Text to be displayed */
  textTop: PropTypes.string,

  /** Container to be scrolled. Can be a selector, or a React ref object */
  refContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /** scroll to top effect behavior */
  scrollBehavior: PropTypes.oneOf(Object.values(SCROLL_BEHAVIOR)),
  /**
   * Styles
   *  DARK → 'dark'
   *  LIGHT →'light'
   */
  style: PropTypes.oneOf(Object.values(STYLES))
}

export {STYLES as backToTopStyles}
export default AtomBackToTop
