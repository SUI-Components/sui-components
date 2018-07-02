import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Tooltip} from 'reactstrap'
import {getTarget} from 'reactstrap/lib/utils'
import DOMElement from './customPropTypes/DOMElement'
import withIntersectionObserver from './hoc/withIntersectionObserver'

const BASE_CLASS = 'sui-AtomTooltip'
const CLASS_INNER = `${BASE_CLASS}-inner`
const PREFIX_PLACEMENT = `${BASE_CLASS}-`
const CLASS_TARGET = `${BASE_CLASS}-target`

const PLACEMENTS = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  TOP_RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
}

class AtomTooltip extends Component {
  state = {isOpen: false}
  preventNonTouchEvents = false
  hasTouchEnded = false
  refTooltip = React.createRef()

  static defaultProps = {
    isVisible: true
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.isVisible && prevState.isOpen) {
      return {isOpen: false}
    }
    return null
  }

  componentDidMount() {
    this._target = getTarget(this.props.target)
    document.addEventListener('click', this.handleClickOutsideElement)
    this._target.classList.add(CLASS_TARGET)
    this._target.addEventListener(
      'click',
      e => {
        e.stopPropagation()
        console.log('click stopped from tooltip... ')
      },
      true
    )
    this._target.addEventListener('touchend', this.toggle)
    this._target.oncontextmenu = function(event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutsideElement)
    this._target.removeEventListener('touchend', this.toggle)
  }

  handleClickOutsideElement = e => {
    const {isOpen} = this.state
    if (isOpen) {
      const {type} = e
      console.log('closing from handleClickOutsideElement → ', {type})
      const tooltipDom = this.refTooltip.current
      const isOutside = tooltipDom && !tooltipDom.contains(e.target)
      if (isOutside) this.toggle(e)
    }
  }

  handleTouchStart = e => {
    this.preventNonTouchEvents = true
    this.hasTouchEnded = false
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    clearInterval(this.touchTimer)
    this.touchTimer = setTimeout(() => {
      if (!this.hasTouchEnded) {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }
      this.preventNonTouchEvents = false
      this.hasTouchEnded = false
    }, 2500)
    return false
  }

  handleTouchEnd = () => {
    setTimeout(() => {
      this.hasTouchEnded = true
    }, 1000)
    clearInterval(this.touchTimer)
  }

  toggle = e => {
    const {type} = e
    const {preventNonTouchEvents, hasTouchEnded} = this
    console.log({type, preventNonTouchEvents, hasTouchEnded})

    if (e.type === 'touchstart') {
      this.handleTouchStart(e)
    }
    if (e.type === 'touchend') {
      this.handleTouchEnd()
    }

    if (!this.preventNonTouchEvents) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    } else {
      return false
    }
  }

  render() {
    const {hideArrow, target, delay, autohide, placement, children} = this.props // eslint-disable-line react/prop-types
    const restrictedProps = {
      hideArrow,
      target,
      delay,
      autohide,
      placement,
      children
    }
    return (
      <Tooltip
        {...restrictedProps}
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        className={BASE_CLASS}
        innerClassName={CLASS_INNER}
        placementPrefix={PREFIX_PLACEMENT}
        innerRef={this.refTooltip}
        offset="auto,4px"
      />
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

AtomTooltip.propTypes = {
  /** Wether to show arrow or not. */
  hideArrow: PropTypes.bool,

  /** target element or element ID, popover is attached to this element */
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement // instanceof Element (https://developer.mozilla.org/en-US/docs/Web/API/Element)
  ]).isRequired,

  /** Optionally override show/hide delays. Default  → { show: 0, hide: 250 } */
  delay: PropTypes.oneOfType([
    PropTypes.shape({
      show: PropTypes.number,
      hide: PropTypes.number
    }),
    PropTypes.number
  ]),

  /** optionally hide tooltip when hovering over tooltip content. Default → true */
  autohide: PropTypes.bool,

  /** Tooltip and arrow position */
  placement: PropTypes.oneOf(Object.values(PLACEMENTS)),

  /** True if the component is inside the viewport */
  isVisible: PropTypes.bool
}

export default withIntersectionObserver(0.5)(AtomTooltip)
export {PLACEMENTS as atomTooltipPlacements}
