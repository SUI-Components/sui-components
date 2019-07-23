import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {getTarget} from '@s-ui/js/lib/react'

const BASE_CLASS = 'sui-AtomBackToTop'
const CLASS_ICON = `${BASE_CLASS}-icon`
const CLASS_TEXT = `${BASE_CLASS}-text`
const CLASS_SHOW = `${BASE_CLASS}--show`
const CLASS_HIDE = `${BASE_CLASS}--hide`
const CLASS_HOVER = `${CLASS_SHOW}--hover`
const CLASS_READY = `${BASE_CLASS}--ready`

const STYLES = {
  DARK: 'dark',
  LIGHT: 'light'
}

const AtomBackToTop = ({
  iconTop: IconTop,
  textTop,
  scrollSteps,
  scrollIntervalTime,
  refContainer,
  style
}) => {
  const [show, setShow] = useState(false)
  const [hover, setHover] = useState(false)

  let intervalId = 0

  useEffect(
    () => {
      const container = getTarget(refContainer)
      const {scrollHeight, clientHeight} = container
      const halfHeight = Math.floor((scrollHeight - clientHeight) / 2)

      const handleScroll = () => {
        const {scrollTop} = container
        if (scrollTop > halfHeight) {
          if (!show) {
            setShow(true)
          }
        } else {
          if (show) {
            setShow(false)
            setHover(false)
          }
        }
      }

      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    },
    [refContainer, show]
  )

  const scrollStep = () => {
    const container = getTarget(refContainer)
    const {scrollTop} = container

    if (scrollTop === 0) clearInterval(intervalId)
    if (scrollTop) container.scrollTop = scrollTop - scrollSteps
  }

  const scrollToTop = () => {
    intervalId = setInterval(scrollStep, scrollIntervalTime)
  }

  const hoverButton = () => setHover(true)
  const unhoverButton = () => setHover(false)

  return (
    <button
      title="Back to top"
      className={cx(
        BASE_CLASS,
        `${BASE_CLASS}--${style}`,
        show !== null && CLASS_READY,
        show ? CLASS_SHOW : CLASS_HIDE,
        hover && CLASS_HOVER
      )}
      onMouseOver={hoverButton}
      onMouseOut={unhoverButton}
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

AtomBackToTop.displayName = 'AtomBackToTop'

AtomBackToTop.propTypes = {
  /** Icon (component) to be displayed */
  iconTop: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Text to be displayed */
  textTop: PropTypes.string,

  /** Number of pixels which will be scrolled on every step */
  scrollSteps: PropTypes.number,

  /** Time in ms which will be scrolled a step */
  scrollIntervalTime: PropTypes.number,

  /** Container to be scrolled. Can be a selector, or a React ref object */
  refContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Styles
   *  DARK → 'dark'
   *  LIGHT →'light'
   */
  style: PropTypes.oneOf(Object.values(STYLES))
}

AtomBackToTop.defaultProps = {
  refContainer: document.body,
  style: STYLES.DARK,
  scrollIntervalTime: 50,
  scrollSteps: 100
}

export {STYLES as backToTopStyles}
export default AtomBackToTop
