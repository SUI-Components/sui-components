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
        this.setState({Slider})
      },
      'rc-slider'
    )
  }

  render() {
    const {Slider} = this.state
    const {min, max, step} = this.props
    return (
      <div className={BASE_CLASS}>
        {Slider && <Slider min={min} max={max} step={step} />}
      </div>
    )
  }
}

// = ({min, max, step}) => {
//   // const numTicks = Math.round((max - min) / step) + 1
//   // const steps = Array.from(Array(numTicks), (x, index) => index * step)

//   const [Slider, setSlider] = useState(null)

//   // const createSliderWithTooltip = Slider && Slider.createSliderWithTooltip
//   // const Range =
//   //   Slider && createSliderWithTooltip && createSliderWithTooltip(Slider.Range)
//   // const Handle = Slider && Slider.Handle

//   // const handle = props => {
//   //   const {value, dragging, index, ...restProps} = props
//   //   return (
//   //     Handle && (
//   //       <div
//   //         prefixCls="rc-slider-tooltip"
//   //         overlay={value}
//   //         visible={dragging}
//   //         placement="top"
//   //         key={index}
//   //       >
//   //         <Handle value={value} {...restProps} />
//   //       </div>
//   //     )
//   //   )
//   // }

//   useEffect(() => {
//     require.ensure(
//       [],
//       require => {
//         const _Slider = require('rc-slider').default
//         setSlider(_Slider)
//         console.log(_Slider)
//       },
//       'rc-slider'
//     )
//   })

//   // const onChangeRange = e => {
//   //   const {value} = e.target
//   //   console.log(value)
//   // }

//   console.log('----')
//   console.log(Slider)

//   // onforminput="value = foo.valueAsNumber;"
//   return (
//     <div className={BASE_CLASS}>
//       {Slider && <Slider min={min} max={max} step={step} />}
//       {/*
//         <input
//           type="range"
//           min={min}
//           max={max}
//           step={step}
//           name="foo"
//           onChange={onChangeRange}
//         />
//         <output htmlFor="foo" value={30} />
//         <ul>{steps.map((step, index) => <li key={index}>{step}</li>)}</ul>

//         */}
//     </div>
//   )
// }

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
  step: 25
}

export default AtomSlider
