import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import markerFactory from './markerFactory.js'
import Handler from './Handler.js'
import {
  Slider,
  Range,
  Label,
  BASE_CLASS,
  CLASS_DISABLED,
  CLASS_INVERSE
} from './settings.js'

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
  hideMarks = false,
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
    handle: props => (
      <Handler
        refAtomSlider={refAtomSlider}
        hideTooltip={hideTooltip}
        {...props}
      />
    ),
    onChange: handleChange,
    onAfterChange: handleAfterChange,
    disabled,
    marks: hideMarks ? {} : markerFactory({step, min, max, marks}),
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

  /* flag to hide marks if wanted */
  hideMarks: PropTypes.bool,

  /* flag to hide tooltip if wanted */
  hideTooltip: PropTypes.bool,

  /* If true it will invert the colors for selected track and rail */
  invertColors: PropTypes.bool
}

export default AtomSlider
