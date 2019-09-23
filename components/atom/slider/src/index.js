import React, {lazy, useState, useEffect, Suspense} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import markerFactory from './markerFactory'

const BASE_CLASS = `sui-AtomSlider`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`

const Range = lazy(() => import('rc-slider/lib/Range'))
const Slider = lazy(() => import('rc-slider/lib/Slider'))
const Tooltip = lazy(() => import('rc-tooltip'))
const Label = lazy(() => import('./Label'))

const createHandler = (
  refAtomSlider,
  handleComponent,
  valueLabel,
  range
) => props => {
  const {value, index, dragging, ...restProps} = props // eslint-disable-line
  const {component: Handle} = handleComponent

  if (shouldHideTooltip(valueLabel, range)) {
    return (
      <Handle value={value} {...restProps} dragging={dragging.toString()} />
    )
  }
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

const shouldHideTooltip = (valueLabel, range) => valueLabel && !range

const AtomSlider = ({
  onChange,
  value,
  min,
  max,
  step,
  range,
  disabled,
  valueLabel,
  marks
}) => {
  const [ready, setReady] = useState(false)
  const [handleComponent, setHandle] = useState({component: null})
  const [labelValue, setLabelValue] = useState(value || min)
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
    setLabelValue(value)
    onChange(e, {value})
  }

  const customProps = {
    defaultValue: range ? [min, max] : value,
    handle: createHandler(refAtomSlider, handleComponent, valueLabel, range),
    onChange: handleChange,
    disabled,
    marks: markerFactory({step, min, max, marks}),
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
          {shouldHideTooltip(valueLabel, range) ? (
            <React.Fragment>
              <Label value={labelValue} />
              <Type {...customProps} />
            </React.Fragment>
          ) : (
            <Type {...customProps} />
          )}
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
  onChange: PropTypes.func,
  /* only if range=false, shows a position fixed label with the current value instead of a tooltip */
  valueLabel: PropTypes.bool,
  /* min and max will be ignored if used. Set your own mark labels */
  marks: PropTypes.array
}

AtomSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {}
}

export default AtomSlider
