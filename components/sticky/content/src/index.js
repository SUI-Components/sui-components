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
    children: PropTypes.node,
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
     * Element which will be used as a references to calculate how many distance its content has been scrolled vertically.
     */
    scrollableElement: PropTypes.object,
    /**
     * Callback to execute when sticky=true and the wrapper position style attribute changes between "relative" and "fixed".
     */
    onDisplayChange: PropTypes.func
  }

  static defaultProps = {
    position: Object.keys(STICKY_CONTENT_POSITION_CLASSNAME)[0],
    onDisplayChange: NO_OP
  }

  _isStuck = false
  _elementOffset = null
  _DOMElement = null
  _scrollableElement = null

  _shouldStickContent = () => {
    const windowTop = this._scrollableElement.scrollTop
    const { top: elementTop } = this._DOMElement.getBoundingClientRect()

    if (!this._elementOffset) {
      this._elementOffset = elementTop
    }
    return windowTop >= this._elementOffset
  }

  _handleScroll = () => {
    const { onDisplayChange } = this.props

    if (!this._isStuck && this._shouldStickContent()) {
      this._isStuck = true
      this._DOMElement.classList.add('sui-StickyContent-fixed')
      onDisplayChange && onDisplayChange({ isStuck: true })
    }

    if (this._isStuck && !this._shouldStickContent()) {
      this._isStuck = false
      this._DOMElement.classList.remove('sui-StickyContent-fixed')
      onDisplayChange && onDisplayChange({ isStuck: false })
    }
  }

  componentDidMount () {
    const { sticky, scrollableElement = document.documentElement } = this.props

    if (sticky) {
      this._scrollableElement = scrollableElement
      window.addEventListener('scroll', this._handleScroll)
    }
  }

  componentWillUnmount () {
    const { sticky } = this.props

    if (sticky) {
      window.removeEventListener('scroll', this._handleScroll)
    }
  }

  render () {
    const { children, position, sticky, fixed, fullWidth } = this.props

    return (
      <div ref={ref => { this._DOMElement = ref }} className={cx(
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
