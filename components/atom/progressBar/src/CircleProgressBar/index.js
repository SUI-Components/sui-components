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

const SIZE_TO_WIDTH_CIRCLE_MAP = {
  [SIZES.LARGE]: 48,
  [SIZES.SMALL]: 16
}

const SIZE_TO_WIDTH_LINE_MAP = {
  [SIZES.LARGE]: 6,
  [SIZES.SMALL]: 4
}

const Indicator = props => {
  const {percentage, status, errorIcon, size} = props // eslint-disable-line react/prop-types
  if (status === STATUS.LOADING) return null
  return (
    <span
      className={cx('sui-AtomCircleProgressBar-text', {
        'sui-AtomCircleProgressBar-text--inner':
          size === SIZES.LARGE || status === STATUS.ERROR,
        'sui-AtomCircleProgressBar-text--outer':
          size === SIZES.SMALL && status !== STATUS.ERROR,
        'sui-AtomCircleProgressBar-text--error sui-AtomCircleProgressBar-text--small':
          status === STATUS.ERROR
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
  const circleSize = SIZE_TO_WIDTH_CIRCLE_MAP[size]
  const circleStyle = {
    width: circleSize,
    height: circleSize
  }
  const circleWidth = SIZE_TO_WIDTH_LINE_MAP[size]

  return (
    <div className="sui-AtomCircleProgressBar">
      <div className="sui-AtomCircleProgressBar-inner">
        <Circle
          prefixCls="sui-AtomCircleProgressBar"
          modifier={status}
          percentage={status === STATUS.PROGRESS ? percentage : 0}
          withAnimation={isAnimatedOnChange}
          strokeWidth={circleWidth}
          style={circleStyle}
        />
        <Indicator
          percentage={percentage}
          size={size}
          status={status}
          errorIcon={errorIcon}
        />
      </div>
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
