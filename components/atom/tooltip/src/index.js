import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {withIntersectionObserver, withOpenToggle} from '@s-ui/hoc'

import {
  BASE_CLASS,
  CLASS_ARROW,
  CLASS_INNER,
  CLASS_TARGET,
  COLORS,
  PREFIX_PLACEMENT,
  PLACEMENTS
} from './config'

const createClasses = (array, sufix = '') => {
  return array.reduce(
    (res, key) => ({...res, [key]: `${BASE_CLASS}--${key}${sufix}`}),
    {}
  )
}

const COLOR_CLASSES = createClasses(COLORS, 'Color')

class AtomTooltip extends Component {
  state = {Tooltip: null}

  preventNonTouchEvents = false

  hasTouchEnded = false

  touchTimer = null

  onClickTarget = null

  title = null

  refTooltip = React.createRef()

  refTarget = React.createRef()

  loadAsyncReacstrap() {
    import(
      /* webpackChunkName: "reactstrap-Tooltip" */
      'reactstrap/lib/Tooltip'
    )
      .then(module => module.default)
      .then(Tooltip => this.setState({Tooltip}))
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
        if (!this.state.Tooltip) {
          this.loadAsyncReacstrap()
          this.handleToggle(e)
        }
      })
    )
    ;['click', 'touchend'].forEach(event =>
      window.addEventListener(event, this.handleClickOutsideElement)
    )
    target.oncontextmenu = this.handleContextMenu
    target.addEventListener('mouseover', this.disableTitle)
    target.addEventListener('mouseout', this.restoreTitle)

    if (target && this.props.isOpen) {
      if (!this.state.Tooltip) {
        this.loadAsyncReacstrap()
      }
    }
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

  componentDidUpdate() {
    const {Tooltip} = this.state
    const {isOpen} = this.props
    if (!Tooltip && isOpen) {
      this.loadAsyncReacstrap()
    }
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
    const {isOpen, onToggle} = this.props
    const target = this.refTarget.current
    if (isOpen) {
      const tooltipDom = this.refTooltip.current
      const isOutside = tooltipDom && !tooltipDom.contains(e.target)
      const isNotTarget = target && !target.contains(e.target)
      if (isOutside && isNotTarget) onToggle(e, {isOpen: false})
    }
  }

  handleTouchStart = e => {
    const {longPressTime, onToggle} = this.props
    this.preventNonTouchEvents = true
    this.hasTouchEnded = false
    clearTimeout(this.touchTimer)
    this.touchTimer = setTimeout(() => {
      if (!this.hasTouchEnded) onToggle(e)
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
    const {onToggle} = this.props
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
    if (isValidTrigger) onToggle(e)
  }

  /**
   * This function is executed when target DOES have an `onClick` prop ('call-to-action' targets)
   * this logic assures that only the proper events triggers the tooltip
   */
  handleToggleOnCallToActionTarget = e => {
    const {type} = e
    const {onToggle} = this.props
    if (type === 'touchstart') this.handleTouchStart(e)
    if (type === 'touchend') this.handleTouchEnd(e)
    if (!this.preventNonTouchEvents) onToggle(e)
  }

  handleToggle = e => {
    if (this.onClickTarget) this.handleToggleOnCallToActionTarget(e)
    else this.handleToggleOnNormalTarget(e)
  }

  render() {
    const {
      autohide,
      color,
      content: HtmlContent,
      delay,
      hideArrow,
      placement
    } = this.props // eslint-disable-line react/prop-types

    const {Tooltip} = this.state
    const target = this.refTarget.current
    const restrictedProps = {
      autohide,
      delay,
      hideArrow,
      placement,
      target
    }
    let {isVisible, isOpen} = this.props // eslint-disable-line react/prop-types
    if (!isVisible && isOpen) isOpen = false

    const classNames = cx(BASE_CLASS, color && COLOR_CLASSES[color])

    return (
      <>
        {this.extendChildren()}
        {target && Tooltip && (
          <Tooltip
            {...restrictedProps}
            isOpen={isOpen}
            toggle={this.handleToggle} // eslint-disable-line
            className={classNames}
            innerClassName={CLASS_INNER}
            arrowClassName={CLASS_ARROW}
            placementPrefix={PREFIX_PLACEMENT}
            innerRef={this.refTooltip}
            offset="auto,4px"
          >
            {HtmlContent ? <HtmlContent /> : this.title}
          </Tooltip>
        )}
      </>
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

AtomTooltip.defaultProps = {
  innerRef: () => {},
  isVisible: true,
  longPressTime: 1000,
  onToggle: () => {}
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

  /** True if the tooltip is displayed or not */
  isOpen: PropTypes.bool,

  /** Handler to set the value of isOpen  */
  onToggle: PropTypes.func,

  /** HTML (component) to be displayed on the Tooltip */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** Custom ref handler that will be assigned to the "target" element */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),

  /** Time in miliseconds for longpress duration */
  longPressTime: PropTypes.number,

  /**
   * Color of tooltip:
   * 'primary',
   * 'accent',
   * 'neutral',
   * 'success',
   * 'alert',
   * 'error'
   */
  color: PropTypes.oneOf(COLORS)
}

const ExportedAtomTooltip = withIntersectionObserver(
  withOpenToggle(AtomTooltip)
)

ExportedAtomTooltip.COLORS = COLORS
ExportedAtomTooltip.PLACEMENTS = PLACEMENTS
ExportedAtomTooltip.displayName = AtomTooltip.displayName

AtomTooltip.COLORS = COLORS
AtomTooltip.PLACEMENTS = PLACEMENTS

export default ExportedAtomTooltip
export {AtomTooltip as AtomTooltipBase}
export {COLORS as atomTooltipColors}
export {PLACEMENTS as atomTooltipPlacements}
