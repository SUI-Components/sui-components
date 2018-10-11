import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {getTarget} from './utils'

const BASE_CLASS = 'sui-AtomBackToTop'
const CLASS_ICON = 'sui-AtomBackToTop-icon'
const CLASS_TEXT = 'sui-AtomBackToTop-text'
const CLASS_SHOW = 'sui-AtomBackToTop--show'
const CLASS_HIDE = 'sui-AtomBackToTop--hide'
const CLASS_HOVER = 'sui-AtomBackToTop--hover'
const CLASS_READY = 'sui-AtomBackToTop--ready'

const STYLES = {
  DARK: 'dark',
  LIGHT: 'light'
}

class AtomBackToTop extends PureComponent {
  state = {
    show: null,
    hover: false
  }

  intervalId = 0
  container = null

  scrollStep = () => {
    const {scrollTop} = this.container
    const {scrollSteps} = this.props
    const {intervalId} = this

    if (scrollTop === 0) clearInterval(intervalId)
    this.container.scrollTop = scrollTop - scrollSteps
  }

  scrollToTop = () => {
    const {scrollStep} = this
    const {scrollIntervalTime} = this.props
    this.intervalId = setInterval(scrollStep, scrollIntervalTime)
  }

  handleScroll = halfHeight => {
    const {scrollTop} = this.container
    const {show} = this.state

    if (scrollTop > halfHeight) {
      if (!show) this.setState({show: true})
    } else {
      if (show) this.setState({show: false})
    }
  }

  hoverButton = e => {
    this.setState({hover: true})
  }

  unhoverButton = e => {
    this.setState({hover: false})
  }

  componentDidMount() {
    this.container = getTarget(this.props.refContainer)

    const {handleScroll} = this
    const {scrollHeight, clientHeight} = this.container
    const halfHeight = Math.floor((scrollHeight - clientHeight) / 2)

    this.container.addEventListener(
      'scroll',
      handleScroll.bind(this, halfHeight)
    )
  }

  componentWillUnmount() {
    const {handleScroll, intervalId} = this
    clearInterval(intervalId)
    this.container.removeEventListener('scroll', handleScroll)
  }

  render() {
    const {scrollToTop, hoverButton, unhoverButton} = this
    const {iconTop: IconTop, textTop, style} = this.props
    const {show, hover} = this.state
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
