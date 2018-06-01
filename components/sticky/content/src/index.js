import React, {Component} from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import cx from 'classnames'

const STICKY_CONTENT_POSITION_CLASSNAME = {
  top: 'sui-StickyContent--top',
  bottom: 'sui-StickyContent--bottom'
}

const SCROLL_EVENT_LISTENER_OPTIONS = {
  capture: true,
  passive: true
}

const THROTTLE_TIME = 250

const NO_OP = () => {}

export default class StickyContent extends Component {
  static displayName = 'StickyContent'

  static propTypes = {
    /**
     * Component's children node.
     */
    children: PropTypes.node.isRequired,
    /**
     * Flag to indicate that wrapped node will have "sticky" behavior: position relative until is out of view when scrolling, and then fixed to the defined position.
     */
    sticky: PropTypes.bool,
    /**
     * Flag to indicate that wrapped node will be directly "fixed" to the defined position.
     */
    fixed: PropTypes.bool,
    /**
     * Modifier: indicates where the component will be fixed ('top' or 'bottom').
     */
    position: PropTypes.oneOf(Object.keys(STICKY_CONTENT_POSITION_CLASSNAME)),
    /**
     * Modifier: full width (100%).
     */
    fullWidth: PropTypes.bool,
    /**
     * DOM Element SELECTOR that we will use to measure its scrollTop property to calculate the total scrolled distance in the page. Normally, we would use the document.documentElement always,
     * but in sui-studio, regarding to its layout position and overflow styling, we have to measure the document.body.scrollTop instead.
     */
    scrollableElementSelector: PropTypes.string,
    /**
     * Callback to execute when sticky=true and the wrapper position style attribute changes between "relative" and "fixed".
     */
    onDisplayChange: PropTypes.func
  }

  static defaultProps = {
    position: 'top',
    onDisplayChange: NO_OP
  }

  _DOMElement = null
  _elementTop = 0
  _isFixed = false
  _scrollableElement = null

  constructor(props) {
    super(props)
    this._handleScroll = throttle(this._handleScroll, THROTTLE_TIME)
  }

  _handleScroll = e => {
    e.stopPropagation()
    this._isFixed !== this._shouldStickContent() && this._toggleFixedStatus()
  }

  _setElementTop = () => {
    const {top: elementTop} = this._DOMElement.getBoundingClientRect()
    this._elementTop = elementTop + this._getCurrentWindowScrollTop()
  }

  _getCurrentWindowScrollTop() {
    return window.scrollY || document.documentElement.scrollTop
  }

  _shouldStickContent = () => {
    const windowTop = this._scrollableElement
      ? this._scrollableElement.scrollTop
      : this._getCurrentWindowScrollTop()

    if (!this._elementTop) {
      this._setElementTop()
    }
    return windowTop >= this._elementTop
  }

  _toggleFixedStatus = () => {
    this._isFixed = !this._isFixed
    this._DOMElement.classList.toggle('sui-StickyContent-fixed')
    this.props.onDisplayChange({isFixed: this._isFixed})
  }

  _saveDOMRef = ref => {
    this._DOMElement = ref
  }

  componentDidMount() {
    const {sticky, scrollableElementSelector} = this.props

    if (sticky) {
      this._scrollableElement =
        scrollableElementSelector &&
        document.querySelector(scrollableElementSelector)
      window.addEventListener(
        'scroll',
        this._handleScroll,
        SCROLL_EVENT_LISTENER_OPTIONS
      )
    }
  }

  componentWillUnmount() {
    if (this.props.sticky) {
      window.removeEventListener(
        'scroll',
        this._handleScroll,
        SCROLL_EVENT_LISTENER_OPTIONS
      )
    }
  }

  render() {
    const {children, position, sticky, fixed, fullWidth} = this.props

    return (
      <div
        ref={this._saveDOMRef}
        className={cx(
          'sui-StickyContent',
          STICKY_CONTENT_POSITION_CLASSNAME[position],
          {'sui-StickyContent-sticky': sticky},
          {'sui-StickyContent-fixed': fixed},
          {'sui-StickyContent--fullWidth': fullWidth}
        )}
      >
        {children}
      </div>
    )
  }
}
