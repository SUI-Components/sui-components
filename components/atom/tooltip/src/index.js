import React, { Component } from 'react'
import { Tooltip } from 'reactstrap'
// import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomTooltip'

class AtomTooltip extends Component {
  state = {
    isOpen: false
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
        className={BASE_CLASS}
        innerClassName={`${BASE_CLASS}-inner`}
        placementPrefix={`${BASE_CLASS}-`}
      />
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

AtomTooltip.defaultProps = {
  delay: {
    show: 300,
    hide: 1500
  }
}

export default AtomTooltip
