import React, {lazy, useState, useEffect, Suspense} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = `sui-AtomSlider`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`

const Range = lazy(() => import('rc-slider/lib/Range'))
const Slider = lazy(() => import('rc-slider/lib/Slider'))
const Tooltip = lazy(() => import('rc-tooltip'))

const createHandler = (refAtomSlider, handleComponent) => props => {
  const {value, index, dragging, ...restProps} = props // eslint-disable-line
  const {component: Handle} = handleComponent

  return (
    <Tooltip
      getTooltipContainer={() => refAtomSlider.current}
      key={index}
      overlay={value}
      placement="top"
      prefixCls="rc-slider-tooltip"
      visible
    >
      <Handle value={value} {...restProps} dragging={dragging.toString()} />
    </Tooltip>
  )
}

const AtomSlider = ({onChange, value, min, max, step, range, disabled}) => {
  const [ready, setReady] = useState(false)
  const [handleComponent, setHandle] = useState({component: null})
  const refAtomSlider = React.createRef()

  useEffect(() => {
    // import Handle here and set it in the state as tooltip need this to be loaded
    // before trying to be shown, otherwise, the reference is wrong
    // and the tooltip is not positioned correctly
    import('rc-slider/lib/Handle').then(({default: Handle}) => {
      setHandle({component: Handle})
      setReady(true)
    })
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
    handle: createHandler(refAtomSlider, handleComponent),
    onChange: handleChange,
    disabled,
    marks,
    max,
    min,
    step
  }

  // Determine the type of the slider according to the range prop
  const Type = range ? Range : Slider

  return (
    <div
      ref={refAtomSlider}
      className={cx(BASE_CLASS, {[CLASS_DISABLED]: disabled})}
    >
      {ready && (
        <Suspense fallback={null}>
          <Type {...customProps} />
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
