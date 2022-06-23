import {Component, createRef} from 'react'

import PropTypes from 'prop-types'

import AtomProgressBar from '../src/index.js'

class InputRangeProgressBar extends Component {
  constructor() {
    super()
    this.inputRangeRef = createRef()
    this.state = {
      percentage: 0
    }
  }

  handleInputRange = e => {
    const val = this.inputRangeRef.current.value
    this.setState({percentage: parseInt(val)})
  }

  setProgress = () => {
    const {percentage} = this.state
    let {step, topPercentage} = this.props
    if (!step) step = Math.ceil(Math.random() * (topPercentage - percentage))
    if (percentage < topPercentage) {
      this.setState({
        percentage: percentage + step
      })
    } else {
      clearInterval(this.intervalId)
    }
  }

  render() {
    const {percentage} = this.state
    const {step, type, ...props} = this.props
    return (
      <div style={{background: 'white', padding: '10px'}}>
        <input
          ref={this.inputRangeRef}
          style={{marginBottom: '10px', display: 'block'}}
          onChange={this.handleInputRange}
          type="range"
          min="0"
          max="100"
          value={this.state.percentage}
          step={step}
        />
        <AtomProgressBar percentage={percentage} type={type} {...props} />
      </div>
    )
  }
}

InputRangeProgressBar.displayName = 'InputRangeProgressBar'

InputRangeProgressBar.defaultProps = {
  topPercentage: 100,
  type: 'line'
}

InputRangeProgressBar.propTypes = {
  topPercentage: PropTypes.number,
  type: PropTypes.string,
  step: PropTypes.number
}

export default InputRangeProgressBar
