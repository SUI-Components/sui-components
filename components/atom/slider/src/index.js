import React, {lazy, useState, useEffect, useRef, Suspense} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import markerFactory from './markerFactory'

const BASE_CLASS = `sui-AtomSlider`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`
const CLASS_INVERSE = `${BASE_CLASS}--inverse`

const Range = lazy(() => import('rc-slider/lib/Range'))
const Slider = lazy(() => import('rc-slider/lib/Slider'))
const Tooltip = lazy(() => import('rc-tooltip'))
const Label = lazy(() => import('./Label'))

const createHandler = (
  refAtomSlider,
  handleComponent,
  hideTooltip
) => props => {
  const {value, index, dragging, ...restProps} = props // eslint-disable-line
  const {component: Handle} = handleComponent

  if (hideTooltip) {
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

const AtomSlider = ({
  onChange,
  onAfterChange,
  value,
  min,
  max,
  step,
  range,
  disabled,
  valueLabel,
  marks,
  valueLabelFormatter,
  hideTooltip,
  defaultValue,
  invertColors
}) => {
  const [ready, setReady] = useState(false)
  const [handleComponent, setHandle] = useState({component: null})
  const [labelValue, setLabelValue] = useState(value || min)
  const refAtomSlider = useRef()

  useEffect(() => {
    // import Handle here and set it in the state as tooltip need this to be loaded
    // before trying to be shown, otherwise, the reference is wrong
    // and the tooltip is not positioned correctly
    import('rc-slider/lib/Handle').then(({default: Handle}) => {
      setHandle({component: Handle})
      setReady(true)
    })
    setLabelValue(value || min)
  }, [min, value])

  const handleChange = value => {
    const e = {}
    setLabelValue(value)
    onChange(e, {value})
  }

  const handleAfterChange = value => {
    const e = {}
    onAfterChange(e, {value})
  }

  const customProps = {
    defaultValue: defaultValue || (range ? [min, max] : value),
    handle: createHandler(refAtomSlider, handleComponent, hideTooltip),
    onChange: handleChange,
    onAfterChange: handleAfterChange,
    disabled,
    marks: markerFactory({step, min, max, marks}),
    max,
    min,
    step,
    value
  }

  // Determine the type of the slider according to the range prop
  const Type = range ? Range : Slider
  return (
    <div
      ref={refAtomSlider}
      className={cx(
        BASE_CLASS,
        {[CLASS_DISABLED]: disabled},
        {[CLASS_INVERSE]: invertColors}
      )}
    >
      {ready && (
        <Suspense fallback={null}>
          {valueLabel ? (
            <>
              <Label value={labelValue} formatter={valueLabelFormatter} />
              <Type {...customProps} />
            </>
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

  /** defaultValue prop that set initial positions of handles */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),

  /* callback to be called with every update of the input value */
  onChange: PropTypes.func,

  /* callback to be called with when the ontouchend or onmouseup event is triggered */
  onAfterChange: PropTypes.func,

  /* only if range=false, shows a position fixed label with the current value instead of a tooltip */
  valueLabel: PropTypes.bool,
  /* Set your own mark labels */
  marks: PropTypes.array,
  /* callback to format the value shown as label */
  valueLabelFormatter: PropTypes.func,
  /* flag to hide tooltip if wanted */
  hideTooltip: PropTypes.bool,
  /* If true it will invert the colors for selected track and rail */
  invertColors: PropTypes.bool
}

AtomSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {},
  onAfterChange: () => {},
  hideTooltip: false
}

export default AtomSlider
