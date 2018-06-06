import React, {Component} from 'react'

const BASE_CLASS = 'sui-AtomTooltip'

class AtomTooltip extends Component {
  render () {
    return (
      <div className={BASE_CLASS}>
        <h1>AtomTooltip</h1>
      </div>
    )
  }
}

AtomTooltip.displayName = 'AtomTooltip'

export default AtomTooltip
