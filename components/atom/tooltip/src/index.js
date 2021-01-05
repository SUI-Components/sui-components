import {createRef, Component, lazy, Suspense} from 'react'
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

import AtomTooltipExtendedChildren from './AtomTooltipExtendedChildren'

const Tooltip = lazy(() => import('reactstrap/lib/Tooltip'))

const createClasses = (array, sufix = '') => {
  return array.reduce(
    (res, key) => ({...res, [key]: `${BASE_CLASS}--${key}${sufix}`}),
    {}
  )
}

const COLOR_CLASSES = createClasses(COLORS, 'Color')

class AtomTooltip extends Component {
  preventNonTouchEvents = false
  hasTouchEnded = false
  touchTimer = null
  onClickTarget = null
  title = null
  refTooltip = createRef()
  refTarget = createRef()

  extendChildren() {
    const {children} = this.props // eslint-disable-line react/prop-types

    const ref = this.refTarget
    const className = CLASS_TARGET
    const onTouchEnd = this.handleToggle

    return (
      <AtomTooltipExtendedChildren
        ref={ref}
        className={className}
        onTouchEnd={onTouchEnd}
        handleDragElement={this.handleDragElement}
        disableTitle={this.disableTitle}
        restoreTitle={this.restoreTitle}
        handleClickOutsideElement={this.handleClickOutsideElement}
        setter={({onClick, title}) => {
          this.onClickTarget = onClick
          this.title = title
        }}
      >
        {children}
      </AtomTooltipExtendedChildren>
    )
  }

  componentDidMount() {
    const target = this.refTarget.current
    target.oncontextmenu = this.handleContextMenu
  }

  componentWillUnmount() {
    clearTimeout(this.touchTimerCallback)
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

  handleDragElement = e => {
    this.handleToggle(e)
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

  touchTimerCallback = e => {
    const {onToggle} = this.props
    if (!this.hasTouchEnded) onToggle(e)
    this.preventNonTouchEvents = false
    this.hasTouchEnded = false
  }

  handleTouchStart = () => {
    const {longPressTime} = this.props
    this.preventNonTouchEvents = true
    this.hasTouchEnded = false
    clearTimeout(this.touchTimer)
    this.touchTimer = setTimeout(this.touchTimerCallback, longPressTime)
    return false
  }

  handleTouchEnd = e => {
    if (!this.preventNonTouchEvents) this.handleStopPropagation(e)
    this.hasTouchEnded = true
    clearTimeout(this.touchTimerCallback)
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
        {target && (
          <Suspense fallback={null}>
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
          </Suspense>
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
