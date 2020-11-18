import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Circle from './Circle'

const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

const STATUS = {
  LOADING: 'loading',
  PROGRESS: 'progress',
  ERROR: 'error'
}

const SIZE_TO_WIDTH_LINE_MAP = {
  [SIZES.LARGE]: 4,
  [SIZES.MEDIUM]: 8,
  [SIZES.SMALL]: 8
}

const BASE_CLASS_NAME = 'sui-AtomCircleProgressBarV2'
const INDICATOR_CLASS_NAME = `${BASE_CLASS_NAME}-indicator`

const Indicator = ({percentage, status, errorIcon, size, children}) => {
  if (status === STATUS.LOADING) return null
  return (
    <span
      className={cx(
        INDICATOR_CLASS_NAME,
        `${INDICATOR_CLASS_NAME}--${status}`,
        `${INDICATOR_CLASS_NAME}--${size}`
      )}
    >
      {status === STATUS.PROGRESS && (children || `${percentage}%`)}
      {status === STATUS.ERROR && errorIcon}
    </span>
  )
}

Indicator.propTypes = {
  percentage: PropTypes.number.isRequired,
  status: PropTypes.oneOf(Object.values(STATUS)),
  errorIcon: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZES)),
  children: PropTypes.node
}

const CircleProgressBar = ({
  percentage,
  status,
  errorIcon,
  size,
  isAnimatedOnChange,
  hideIndicator,
  children
}) => {
  const circleWidth = SIZE_TO_WIDTH_LINE_MAP[size]

  return (
    <div
      className={cx(
        BASE_CLASS_NAME,
        `${BASE_CLASS_NAME}--${size}`,
        `${BASE_CLASS_NAME}--${status}`
      )}
    >
      <Circle
        baseClassName={BASE_CLASS_NAME}
        modifier={status}
        percentage={status === STATUS.PROGRESS ? percentage : 0}
        withAnimation={isAnimatedOnChange}
        strokeWidth={circleWidth}
        size={size}
      />
      {!hideIndicator && (
        <Indicator
          percentage={percentage}
          size={size}
          status={status}
          errorIcon={errorIcon}
        >
          {children}
        </Indicator>
      )}
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
  isAnimatedOnChange: PropTypes.bool,

  /** Hide the indicator */
  hideIndicator: PropTypes.bool,
  /** Component to render inside the circle instead of the current progress */
  children: PropTypes.node
}

CircleProgressBar.defaultProps = {
  isAnimatedOnChange: false,
  status: STATUS.PROGRESS,
  hideIndicator: false
}

export default CircleProgressBar
