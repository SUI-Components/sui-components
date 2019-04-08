import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = `sui-AtomSlider`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`

const AtomSlider = ({onChange, value, min, max, step, range, disabled}) => {
  const [Slider, setSlider] = useState(null)
  const [Range, setRange] = useState(null)
  const [Handle, setHandle] = useState(null)
  const [Tooltip, setTooltip] = useState(null)

  const refAtomSlider = React.createRef()

  let handle

  useEffect(() => {
    fetchRcComponents()

    async function fetchRcComponents() {
      const [
        {default: Slider},
        {default: Range},
        {default: Handle},
        {default: Tooltip}
      ] = await Promise.all([
        import('rc-slider/lib/Slider'),
        import('rc-slider/lib/Range'),
        import('rc-slider/lib/Handle'),
        require('rc-tooltip')
      ])

      console.log([Slider, Range, Handle, Tooltip])
      setSlider(Slider)
      setRange(Range)
      setHandle(Handle)
      setTooltip(Tooltip)
    }
  }, [])

  const handleChange = value => {
    const e = {}
    onChange(e, {value})
  }

  const numTicks = Math.round((max - min) / step) + 1
  const steps = Array.from(Array(numTicks), (x, index) => index * step)

  if (Slider) {
    handle = props => {
      const {value, index, ...restProps} = props // eslint-disable-line
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={value}
          placement="top"
          key={index}
          getTooltipContainer={() => refAtomSlider.current}
          visible
        >
          <Handle value={value} {...restProps} />
        </Tooltip>
      )
    }
  }

  const customProps = {}
  if (value) customProps.defaultValue = value
  if (disabled) customProps.disabled = true
  if (handle) customProps.handle = handle

  const marks =
    step === 1
      ? {[min]: min, [max]: max}
      : steps.reduce((marksConfig, step) => {
          marksConfig[step] = step
          return marksConfig
        }, {})

  return (
    <div
      ref={refAtomSlider}
      className={cx(BASE_CLASS, {[CLASS_DISABLED]: disabled})}
    >
      {!range &&
        Slider && (
          <Slider
            min={min}
            max={max}
            step={step}
            marks={marks}
            onChange={handleChange}
            {...customProps}
          />
        )}
      {range &&
        Range && (
          <Range
            min={min}
            max={max}
            step={step}
            marks={marks}
            onChange={handleChange}
            {...customProps}
            defaultValue={[min, max]}
          />
        )}
    </div>
  )
}

AtomSlider.displayName = 'AtomSlider'

AtomSlider.propTypes = {
  /** minimal value in range */
  min: PropTypes.number,

  /** minimal value in range */
  max: PropTypes.number,

  /** steps for range */
  step: PropTypes.number,

  /** range mode */
  range: PropTypes.bool,

  /** slider disabled */
  disabled: PropTypes.bool,

  /** value  */
  value: PropTypes.number,

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func
}

AtomSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {}
}

export default AtomSlider
