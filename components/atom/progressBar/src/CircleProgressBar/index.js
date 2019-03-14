import React from 'react'
import PropTypes from 'prop-types'
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
  const {percentage} = props // eslint-disable-line react/prop-types
  return (
    <span className="sui-AtomCircleProgressBar-text">
      <strong>{percentage}</strong>%
    </span>
  )
}

const CircleProgressBar = ({percentage, size}) => {
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
          percent={percentage}
          strokeWidth={circleWidth}
        />
        <Indicator percentage={percentage} indicatorTotal={false} />
      </div>
    </div>
  )
}

export default CircleProgressBar
