import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Circle from './Circle'

const SIZES = {
  LARGE: 'large',
  SMALL: 'small'
}

const STATUS = {
  LOADING: 'loading',
  PROGRESS: 'progress',
  ERROR: 'error'
}

const SIZE_TO_WIDTH_LINE_MAP = {
  [SIZES.LARGE]: 4,
  [SIZES.SMALL]: 8
}

const BASE_CLASS_NAME = 'sui-AtomCircleProgressBar'
const INDICATOR_CLASS_NAME = `${BASE_CLASS_NAME}-indicator`

const Indicator = props => {
  const {percentage, status, errorIcon, size} = props // eslint-disable-line react/prop-types
  if (status === STATUS.LOADING) return null
  return (
    <span
      className={cx(INDICATOR_CLASS_NAME, {
        [`${INDICATOR_CLASS_NAME}--small`]: size === SIZES.SMALL,
        [`${INDICATOR_CLASS_NAME}--inner`]:
          size === SIZES.LARGE || status === STATUS.ERROR,
        [`${INDICATOR_CLASS_NAME}--outer`]:
          size === SIZES.SMALL && status !== STATUS.ERROR,
        [`${INDICATOR_CLASS_NAME}--error`]: status === STATUS.ERROR
      })}
    >
      {status === STATUS.PROGRESS && <span>{percentage}%</span>}
      {status === STATUS.ERROR && errorIcon}
    </span>
  )
}

const CircleProgressBar = ({
  percentage,
  status,
  errorIcon,
  size,
  isAnimatedOnChange
}) => {
  const circleWidth = SIZE_TO_WIDTH_LINE_MAP[size]

  return (
    <div
      className={cx(BASE_CLASS_NAME, {
        [`${BASE_CLASS_NAME}--${size}`]: !!size && status !== STATUS.ERROR
      })}
    >
      <Circle
        baseClassName={BASE_CLASS_NAME}
        modifier={status}
        percentage={status === STATUS.PROGRESS ? percentage : 0}
        withAnimation={isAnimatedOnChange}
        strokeWidth={circleWidth}
        size={size}
      />
      <Indicator
        percentage={percentage}
        size={size}
        status={status}
        errorIcon={errorIcon}
      />
    </div>
  )
}

CircleProgressBar.displayName = 'LineProgressBar'

CircleProgressBar.propTypes = {
  /** Percentage value to be displayed as number and as bar width  */
  percentage: PropTypes.number.isRequired,

  /** Current status of the progress [progress, loading, error]  */
  status: PropTypes.oneOf(Object.values(STATUS)),

  /** Icon to be displayed if error  */
  errorIcon: PropTypes.node,

  /** The size of the circle, it can be "small" or "large"  */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** If the bar "value" (width) should be displayed with animation */
  isAnimatedOnChange: PropTypes.bool
}

CircleProgressBar.defaultProps = {
  isAnimatedOnChange: false,
  status: STATUS.PROGRESS
}

export default CircleProgressBar
