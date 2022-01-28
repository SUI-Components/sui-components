import {Component} from 'react'
import PropTypes from 'prop-types'

import AtomProgressBar from '../src/index.js'

class StaticWithAnimation extends Component {
  constructor() {
    super()
    this.state = {
      percentage: 0,
      mainBarPercentage: undefined,
      extraBarPercentage: undefined
    }
    this.timeoutId = null
  }

  componentDidMount() {
    const {percentage, mainBarPercentage, extraBarPercentage} = this.props
    this.timeoutId = setTimeout(() => {
      if (mainBarPercentage) {
        this.setState({mainBarPercentage})
        this.setState({extraBarPercentage})
      } else {
        this.setState({percentage})
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  render() {
    const {percentage, mainBarPercentage, extraBarPercentage} = this.state
    const {type} = this.props
    return (
      <div style={{background: 'white', padding: '10px'}}>
        <AtomProgressBar
          {...this.props}
          type={type}
          percentage={percentage}
          mainBarPercentage={mainBarPercentage}
          extraBarPercentage={extraBarPercentage}
        />
      </div>
    )
  }
}

StaticWithAnimation.displayName = 'StaticWithAnimation'

StaticWithAnimation.propTypes = {
  topPercentage: PropTypes.number,
  type: PropTypes.string,
  percentage: PropTypes.number,
  mainBarPercentage: PropTypes.number,
  extraBarPercentage: PropTypes.number
}

StaticWithAnimation.defaultProps = {
  type: 'line'
}

export default StaticWithAnimation
