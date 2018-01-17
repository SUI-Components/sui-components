import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const STICKY_CONTENT_POSITION_CLASSNAME = {
  top: 'sui-StickyContent--top',
  bottom: 'sui-StickyContent--bottom'
}

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
    position: Object.keys(STICKY_CONTENT_POSITION_CLASSNAME)[0],
    onDisplayChange: NO_OP
  }

  _DOMElement = null
  _elementTop = 0
  _isFixed = false
  _scrollableElement = null

  _shouldStickContent = () => {
    const windowTop = this._scrollableElement.scrollTop
    return windowTop >= this._elementTop
  }

  _toggleFixedStatus = () => {
    this._isFixed = !this._isFixed
    this._DOMElement.classList.toggle('sui-StickyContent-fixed')
    this.props.onDisplayChange({ isFixed: true })
  }

  _handleScroll = (e) => {
    e.stopPropagation()
    const shouldStickContent = this._shouldStickContent()

    if ((this._isFixed && !shouldStickContent) || (!this._isFixed && shouldStickContent)) {
      this._toggleFixedStatus()
    }
  }

  _saveDOMRef = ref => {
    const { top: elementTop } = ref.getBoundingClientRect()
    this._DOMElement = ref
    this._elementTop = elementTop
  }

  componentDidMount () {
    const { sticky, scrollableElementSelector } = this.props

    if (sticky) {
      this._scrollableElement = scrollableElementSelector ? document.querySelector(scrollableElementSelector) : document.documentElement
      window.addEventListener('scroll', this._handleScroll, {
        capture: true,
        passive: true
      })
    }
  }

  componentWillUnmount () {
    if (this.props.sticky) {
      window.removeEventListener('scroll', this._handleScroll)
    }
  }

  render () {
    const { children, position, sticky, fixed, fullWidth } = this.props

    return (
      <div ref={this._saveDOMRef} className={cx(
        'sui-StickyContent',
        STICKY_CONTENT_POSITION_CLASSNAME[position],
        { 'sui-StickyContent-sticky': sticky },
        { 'sui-StickyContent-fixed': fixed },
        { 'sui-StickyContent--fullWidth': fullWidth }
      )}>
        { children }
      </div>
    )
  }
}
