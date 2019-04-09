import React, {lazy, useState, useEffect, Suspense} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = `sui-AtomSlider`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`

const Handle = lazy(() => import('rc-slider/lib/Handle'))
const Range = lazy(() => import('rc-slider/lib/Range'))
const Slider = lazy(() => import('rc-slider/lib/Slider'))
const Tooltip = lazy(() => import('rc-tooltip'))

const createHandler = refAtomSlider => props => {
  const {value, index, ...restProps} = props // eslint-disable-line
  return (
    <Tooltip
      getTooltipContainer={() => refAtomSlider.current}
      key={index}
      overlay={value}
      placement="top"
      prefixCls="rc-slider-tooltip"
      visible
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

const AtomSlider = ({onChange, value, min, max, step, range, disabled}) => {
  const [ready, setReady] = useState(false)
  const refAtomSlider = React.createRef()

  useEffect(() => {
    setReady(true)
  }, [])

  const handleChange = value => {
    const e = {}
    onChange(e, {value})
  }

  const numTicks = Math.round((max - min) / step) + 1
  const steps = Array.from(Array(numTicks), (x, index) => index * step)

  const marks =
    step === 1
      ? {[min]: min, [max]: max}
      : steps.reduce((marksConfig, step) => {
          marksConfig[step] = step
          return marksConfig
        }, {})

  const customProps = {
    defaultValue: range ? [min, max] : value,
    handle: createHandler(refAtomSlider),
    onChange: handleChange,
    disabled,
    min,
    max,
    step,
    marks
  }

  return (
    <div
      ref={refAtomSlider}
      className={cx(BASE_CLASS, {[CLASS_DISABLED]: disabled})}
    >
      {ready && (
        <Suspense fallback={null}>
          {!range && Slider && <Slider {...customProps} />}
          {range && Range && <Range {...customProps} />}
        </Suspense>
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
