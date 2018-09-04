import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import withIntersectionObserver from './hoc/withIntersectionObserver'

const BASE_CLASS = 'sui-AtomTooltip'
const CLASS_INNER = `${BASE_CLASS}-inner`
const CLASS_ARROW = `${BASE_CLASS}-arrow`
const PREFIX_PLACEMENT = `${BASE_CLASS}-`
const CLASS_TARGET = `${BASE_CLASS}-target`

const PLACEMENTS = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
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
  state = {Tooltip: null, isOpen: false}
  preventNonTouchEvents = false
  hasTouchEnded = false
  touchTimer = null
  onClickTarget = null
  title = null
  refTooltip = React.createRef()
  refTarget = React.createRef()

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.isVisible && prevState.isOpen) {
      return {isOpen: false}
    }
    return null
  }

  loadAsyncReacstrap(e) {
    require.ensure(
      [],
      require => {
        const Tooltip = require('reactstrap/lib/Tooltip').default
        this.setState({Tooltip})
        this.handleToggle(e)
      },
      'reactstrap-Tooltip'
    )
  }

  extendChildren() {
    const {children} = this.props // eslint-disable-line react/prop-types

    const ref = this.refTarget
    const className = CLASS_TARGET
    const onTouchEnd = this.handleToggle

    const childrenOnly = React.Children.only(children)

    return React.Children.map(childrenOnly, child => {
      this.onClickTarget = child.props.onClick
      this.title = child.props.title
      return React.cloneElement(child, {
        ref,
        className,
        onTouchEnd
      })
    })
  }

  componentDidMount() {
    const target = this.refTarget.current
    this.props.innerRef(target)
    ;['touchstart', 'mouseover'].forEach(event =>
      target.addEventListener(event, e => {
        if (!this.state.Tooltip) this.loadAsyncReacstrap(e)
      })
    )
    ;['click', 'touchend'].forEach(event =>
      window.addEventListener(event, this.handleClickOutsideElement)
    )
    target.oncontextmenu = this.handleContextMenu
    target.addEventListener('mouseover', this.disableTitle)
    target.addEventListener('mouseout', this.restoreTitle)
  }

  componentWillUnmount() {
    const target = this.refTarget.current
    clearTimeout(this.touchTimer)
    ;['click', 'touchend'].forEach(event =>
      window.removeEventListener(event, this.handleClickOutsideElement)
    )
    target.removeEventListener('mouseover', this.disableTitle)
    target.removeEventListener('mouseout', this.restoreTitle)
  }

  disableTitle(e) {
    this.dataset.title = this.title
    this.title = ''
  }

  restoreTitle(e) {
    this.title = this.dataset.title
  }

  handleContextMenu = e => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  handleClickOutsideElement = e => {
    const {isOpen} = this.state
    const target = this.refTarget.current
    if (isOpen) {
      const tooltipDom = this.refTooltip.current
      const isOutside = tooltipDom && !tooltipDom.contains(e.target)
      const isNotTarget = target && !target.contains(e.target)
      if (isOutside && isNotTarget) this.toggle(false)
    }
  }

  handleTouchStart = e => {
    const {longPressTime} = this.props
    this.preventNonTouchEvents = true
    this.hasTouchEnded = false
    clearTimeout(this.touchTimer)
    this.touchTimer = setTimeout(() => {
      if (!this.hasTouchEnded) {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }
      this.preventNonTouchEvents = false
      this.hasTouchEnded = false
    }, longPressTime)
    return false
  }

  handleTouchEnd = e => {
    if (!this.preventNonTouchEvents) this.handleStopPropagation(e)
    this.hasTouchEnded = true
    clearTimeout(this.touchTimer)
  }

  handleStopPropagation = e => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  /**
   * This function is executed when target doesn't have an `onClick` prop (normal targets)
   * this logic assures that only the proper events triggers the tooltip
   */
  handleToggleOnNormalTarget = e => {
    const {type} = e
    const isValidTrigger = [
      'click',
      'focusin',
      'mouseover',
      'mouseout'
    ].includes(type)
    if (type === 'touchstart') this.hasTouchEnded = false
    if (type === 'touchend') this.hasTouchEnded = true
    if (this.hasTouchEnded && ['focusin', 'mouseover'].includes(type)) {
      this.handleStopPropagation(e)
    }
    if (isValidTrigger) this.toggle()
  }

  /**
   * This function is executed when target DOES have an `onClick` prop ('call-to-action' targets)
   * this logic assures that only the proper events triggers the tooltip
   */
  handleToggleOnCallToActionTarget = e => {
    const {type} = e
    if (type === 'touchstart') this.handleTouchStart(e)
    if (type === 'touchend') this.handleTouchEnd(e)
    if (!this.preventNonTouchEvents) this.toggle()
  }

  toggle = value => {
    const isOpen = value || !this.state.isOpen
    this.setState({isOpen})
  }

  handleToggle = e => {
    if (this.onClickTarget) this.handleToggleOnCallToActionTarget(e)
    else this.handleToggleOnNormalTarget(e)
  }

  render() {
    const {
      hideArrow,
      content: HtmlContent,
      delay,
      autohide,
      placement
    } = this.props // eslint-disable-line react/prop-types
    const {Tooltip} = this.state
    const target = this.refTarget.current
    const restrictedProps = {
      hideArrow,
      target,
      delay,
      autohide,
      placement
    }
    return (
      <Fragment>
        {this.extendChildren()}
        {target &&
          Tooltip && (
            <Tooltip
              {...restrictedProps}
              isOpen={this.state.isOpen}
              toggle={this.handleToggle}
              className={BASE_CLASS}
              innerClassName={CLASS_INNER}
              arrowClassName={CLASS_ARROW}
              placementPrefix={PREFIX_PLACEMENT}
              innerRef={this.refTooltip}
              offset="auto,4px"
            >
              {HtmlContent ? <HtmlContent /> : this.title}
            </Tooltip>
          )}
      </Fragment>
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

AtomTooltip.defaultProps = {
  isVisible: true,
  longPressTime: 1000
}

AtomTooltip.propTypes = {
  /** Wether to show arrow or not. */
  hideArrow: PropTypes.bool,

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

  /** True if the target is inside the viewport */
  isVisible: PropTypes.bool,

  /** HTML (component) to be displayed on the Tooltip */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Custom ref handler that will be assigned to the "target" element */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),

  /** Time in miliseconds for longpress duration */
  longPressTime: PropTypes.number
}

export default withIntersectionObserver(AtomTooltip)
export {PLACEMENTS as atomTooltipPlacements}
