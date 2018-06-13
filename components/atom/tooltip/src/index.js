import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import memoize from 'memoize-one'
import {Tooltip} from 'reactstrap'
import {DOMElement} from './utils'

const BASE_CLASS = 'sui-AtomTooltip'

class AtomTooltip extends Component {
  state = {
    isOpen: false
  }

  // Memoization solution as suggested at: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
  getClassNames = memoize(className => cx(BASE_CLASS, className))

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutsideElement)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutsideElement)
  }

  handleClickOutsideElement = event => {
    const {isOpen} = this.state
    const tooltipDom = document.querySelector(`.${BASE_CLASS}`)
    const isOutside = tooltipDom && !tooltipDom.contains(event.target)
    if (isOpen && isOutside) this.toggle()
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const classNames = this.getClassNames(this.props.className)
    return (
      <Tooltip
        {...this.props}
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        className={classNames}
        innerClassName={`${BASE_CLASS}-inner`}
        placementPrefix={`${BASE_CLASS}-`}
      />
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

AtomTooltip.propTypes = {
  className: PropTypes.string,

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
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ]),

  /** Custom modifiers that are passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers. Ex → { offset: { offset: 'auto 4px', enabled: true } } */
  modifiers: PropTypes.object,

  /** Custom offset that is passed to Popper.js, see https://popper.js.org/popper-documentation.html#modifiers..offset. Default → auto,4px */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

AtomTooltip.defaultProps = {
  offset: 'auto,4px'
}

export default AtomTooltip
