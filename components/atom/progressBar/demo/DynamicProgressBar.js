import {Component} from 'react'
import PropTypes from 'prop-types'

import AtomProgressBar from '../src/index.js'

class DynamicProgressBar extends Component {
  static defaultProps = {
    topPercentage: 100,
    type: 'line'
  }

  constructor() {
    super()
    this.state = {
      percentage: 0
    }
    this.intervalId = null
  }

  handleClick = () => {
    const {intervalTime} = this.props
    const {setProgress} = this
    this.setState(
      {
        percentage: 0
      },
      () => {
        this.intervalId = setInterval(setProgress, intervalTime)
      }
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
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
    const {intervalTime, step, type, ...props} = this.props
    return (
      <div style={{background: 'white', padding: '10px'}}>
        <button
          style={{marginBottom: '10px', display: 'block'}}
          onClick={this.handleClick}
        >
          Start Progress
        </button>
        <AtomProgressBar percentage={percentage} type={type} {...props} />
      </div>
    )
  }
}

DynamicProgressBar.defaultProps = {
  topPercentage: 100,
  type: 'line'
}

DynamicProgressBar.propTypes = {
  topPercentage: PropTypes.number,
  type: PropTypes.string,
  step: PropTypes.number,
  intervalTime: PropTypes.number
}

DynamicProgressBar.displayName = 'DynamicProgressBar'

export default DynamicProgressBar
