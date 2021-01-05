import {lazy, useState, useEffect, useRef, useCallback, Suspense} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import markerFactory from './markerFactory'
import createHandler from './createHandler'

const BASE_CLASS = `sui-AtomSlider`
const CLASS_DISABLED = `${BASE_CLASS}--disabled`
const CLASS_INVERSE = `${BASE_CLASS}--inverse`

const Range = lazy(() => import('rc-slider/lib/Range'))
const Slider = lazy(() => import('rc-slider/lib/Slider'))
const Label = lazy(() => import('./Label'))

const AtomSlider = ({
  onChange,
  onAfterChange,
  value,
  min = 0,
  max = 100,
  step = 1,
  range,
  disabled,
  valueLabel,
  marks,
  valueLabelFormatter,
  hideTooltip = false,
  defaultValue,
  invertColors
}) => {
  let initialStateValue
  const refAtomSlider = useRef()

  const numMax = Number(max)
  const numMin = Number(min)

  if (value !== undefined) {
    initialStateValue = range ? value.map(Number) : Number(value)
  } else if (defaultValue !== undefined) {
    initialStateValue = range ? defaultValue.map(Number) : Number(defaultValue)
  } else {
    initialStateValue = range
      ? [numMin, numMax]
      : Math.trunc((numMin + numMax - numMin) / 2)
  }

  const [internalValue, setInternalValue] = useState(initialStateValue)

  const createHandle = useCallback(createHandler, [refAtomSlider, hideTooltip])

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(range ? value.map(Number) : Number(value))
    }
  }, [value, range])

  const handleChange = newValue => {
    const e = {}
    if (value === undefined) {
      setInternalValue(newValue)
    }
    if (typeof onChange === 'function') {
      onChange(e, {value: newValue})
    }
  }

  const handleAfterChange = value => {
    if (typeof onAfterChange === 'function') {
      onAfterChange({}, {value})
    }
  }

  const customProps = {
    handle: createHandle(refAtomSlider, hideTooltip),
    onChange: handleChange,
    onAfterChange: handleAfterChange,
    disabled,
    marks: markerFactory({step, min, max, marks}),
    max,
    min,
    step,
    value: internalValue
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
      <Suspense fallback={null}>
        {valueLabel && customProps.handle ? (
          <>
            <Label
              value={internalValue.toString()}
              formatter={valueLabelFormatter}
              percentage={((internalValue - min) / (max - min)) * 100}
            />
            <Type {...customProps} />
          </>
        ) : (
          <Type {...customProps} />
        )}
      </Suspense>
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
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),

  /** defaultValue prop that set initial positions of handles */
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),

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

export default AtomSlider
