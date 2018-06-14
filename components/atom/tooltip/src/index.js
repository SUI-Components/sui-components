import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Tooltip} from 'reactstrap'
import DOMElement from './customPropTypes/DOMElement'

const BASE_CLASS = 'sui-AtomTooltip'

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
  state = {
    isOpen: false
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutsideElement)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutsideElement)
  }

  handleClickOutsideElement = event => {
    const {isOpen} = this.state
    if (isOpen) {
      const tooltipDom = document.querySelector(`.${BASE_CLASS}`)
      const isOutside = tooltipDom && !tooltipDom.contains(event.target)
      if (isOutside) this.toggle()
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Tooltip
        {...this.props}
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        className={BASE_CLASS}
        innerClassName={`${BASE_CLASS}-inner`}
        placementPrefix={`${BASE_CLASS}-`}
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

  /** Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers. Ex → { offset: { offset: 'auto 4px', enabled: true } } */
  modifiers: PropTypes.object,

  /**
   * Custom offset that is passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers..offset.
   * Examples: Default → auto,4px  | Aligned to left → -100%,4px | Aligned to right → 100%,4px
   * */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

AtomTooltip.defaultProps = {
  offset: 'auto,4px'
}

export default AtomTooltip
export {PLACEMENTS as atomTooltipPlacements}
