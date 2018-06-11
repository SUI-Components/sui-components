import React, { Component } from 'react'
import cx from 'classnames'
import { Tooltip } from 'reactstrap'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomTooltip'

class AtomTooltip extends Component {
  state = {
    isOpen: false
  }

  get classNames () {
    const { className, noarrow } = this.props
    return cx(BASE_CLASS, className, noarrow && `no-arrow`)
  }

  componentDidMount () {
    document.addEventListener('click', this.hideTooltip)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.hideTooltip)
  }

  hideTooltip = () => {
    const { isOpen } = this.state
    if (isOpen) this.toggle()
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <Tooltip
        {...this.props}
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        className={this.classNames}
        innerClassName={`${BASE_CLASS}-inner`}
        placementPrefix={`${BASE_CLASS}-`}
      />
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

AtomTooltip.propTypes = {
  className: PropTypes.string,

  /** Wether to show arrow or not */
  noarrow: PropTypes.bool,

  /** Offset applied to the tooltip according to https://popper.js.org/popper-documentation.html#modifiers..offset */
  offset: PropTypes.string
}

// AtomTooltip.defaultProps = {
//   modifiers: {
//     offset: {
//       offset: 'auto 4px',
//       enabled: true
//     }
//   }
// }

AtomTooltip.defaultProps = {
  offset: 'auto 4px'
}

export default AtomTooltip
