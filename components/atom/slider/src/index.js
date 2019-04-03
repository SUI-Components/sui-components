import React, {Component} from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-AtomSlider`

class AtomSlider extends Component {
  state = {
    Slider: null
  }

  componentDidMount() {
    require.ensure(
      [],
      require => {
        const Slider = require('rc-slider').default
        const {createSliderWithTooltip} = Slider
        this.setState({Slider: createSliderWithTooltip(Slider)})
      },
      'rc-slider'
    )
  }

  render() {
    const {Slider} = this.state
    const {min, max, step} = this.props
    const numTicks = Math.round((max - min) / step) + 1
    const steps = Array.from(Array(numTicks), (x, index) => index * step)

    const marks =
      step === 1
        ? {[min]: min, [max]: max}
        : steps.reduce((marksConfig, step) => {
            marksConfig[step] = step
            return marksConfig
          }, {})
    return (
      <div className={BASE_CLASS}>
        {Slider && <Slider min={min} max={max} step={step} marks={marks} />}
        {/*
          <output htmlFor="foo" value={30}>20</output>
          <ul>{steps.map((step, index) => <li key={index}>{step}</li>)}</ul>
          */}
      </div>
    )
  }
}

AtomSlider.displayName = 'AtomSlider'

// Remove these comments if you need
// AtomSlider.contextTypes = {i18n: PropTypes.object}
AtomSlider.propTypes = {
  /** minimal value in range */
  min: PropTypes.number,

  /** minimal value in range */
  max: PropTypes.number,

  /** steps for range */
  step: PropTypes.number
}
AtomSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
}

export default AtomSlider
