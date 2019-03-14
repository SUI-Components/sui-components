import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Circle from './Circle'

const SIZES = {
  LARGE: 'large',
  SMALL: 'small'
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
  const {percentage, size} = props // eslint-disable-line react/prop-types
  return (
    <span
      className={cx('sui-AtomCircleProgressBar-text', {
        'sui-AtomCircleProgressBar-text--inner': size === SIZES.LARGE,
        'sui-AtomCircleProgressBar-text--outer': size === SIZES.SMALL
      })}
    >
      <strong>{percentage}</strong>%
    </span>
  )
}

const CircleProgressBar = ({percentage, size, isAnimatedOnChange}) => {
  const circleSize = SIZE_TO_WIDTH_CIRCLE_MAP[size]
  const circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6
  }
  const circleWidth = SIZE_TO_WIDTH_LINE_MAP[size]

  return (
    <div className="sui-AtomCircleProgressBar">
      <div className="sui-AtomCircleProgressBar-inner" style={circleStyle}>
        <Circle
          prefixCls="sui-AtomCircleProgressBar"
          percentage={percentage}
          withAnimation={isAnimatedOnChange}
          strokeWidth={circleWidth}
        />
        {size === SIZES.LARGE && (
          <Indicator percentage={percentage} size={size} />
        )}
      </div>
      {size === SIZES.SMALL && (
        <Indicator percentage={percentage} size={size} />
      )}
    </div>
  )
}

CircleProgressBar.displayName = 'LineProgressBar'

CircleProgressBar.propTypes = {
  /** Percentage value to be displayed as number and as bar width  */
  percentage: PropTypes.number.isRequired,

  /** The size of the circle, it can be "small" or "large"  */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** If the bar "value" (width) should be displayed with animation */
  isAnimatedOnChange: PropTypes.bool
}

CircleProgressBar.defaultProps = {
  isAnimatedOnChange: false
}

export default CircleProgressBar
