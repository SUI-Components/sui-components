import {useEffect, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {COLORS} from '../../settings.js'
import {MAX_TRANSITION_TIME_IN_MS, MODIFIERS, SIZES} from './settings.js'

const Circle = ({
  baseClassName,
  modifier,
  percentage,
  size,
  withAnimation = true,
  mainStrokeWidth,
  progressStrokeWidth,
  strokeLineCap,
  color
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(percentage)
  const [transitionTime, setTransitionTime] = useState(0)

  useEffect(
    (currentPercentage, percentage) => {
      if (Math.abs(percentage - currentPercentage) < 5) {
        setCurrentPercentage(percentage)
        setTransitionTime(0)
      } else {
        setCurrentPercentage(percentage)
        setTransitionTime((MAX_TRANSITION_TIME_IN_MS * percentage) / 100 / 1000)
      }
    },
    [currentPercentage, percentage]
  )

  const getRadius = () => {
    return mainStrokeWidth === progressStrokeWidth
      ? 50 - mainStrokeWidth / 2
      : 50 - Math.max(...[progressStrokeWidth, mainStrokeWidth]) / 2
  }

  const getPathStyles = ({percentage, strokeWidth}) => {
    const radius = getRadius()
    const d = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`
    const len = Math.PI * 2 * radius
    const style = {
      strokeDasharray: `${len}px ${len}px`,
      strokeDashoffset: `${((100 - percentage) / 100) * len}px`,
      transition: withAnimation ? `stroke-dashoffset ${transitionTime}s ease 0s, stroke ${transitionTime}s ease` : ''
    }
    return {
      d,
      style
    }
  }

  return (
    <svg
      className={cx(`${baseClassName}-circle`, {
        [`${baseClassName}-circle--${modifier}`]: !!modifier,
        [`${baseClassName}-circle--${size}`]: !!size
      })}
      viewBox="0 0 100 100"
    >
      <path
        className={cx(`${baseClassName}-trail`, {
          [`${baseClassName}-trail--${modifier}`]: !!modifier
        })}
        {...getPathStyles({percentage: 100, strokeWidth: mainStrokeWidth})}
        strokeWidth={mainStrokeWidth}
        fillOpacity="0"
      />
      <path
        className={cx(`${baseClassName}-path`, {
          [`${baseClassName}-path--${modifier}`]: !!modifier,
          [`${baseClassName}-path--color-${color}`]: !!color
        })}
        {...getPathStyles({percentage, strokeWidth: progressStrokeWidth})}
        strokeLinecap={strokeLineCap}
        strokeWidth={progressStrokeWidth}
        fillOpacity="0"
      />
    </svg>
  )
}

Circle.propTypes = {
  /** Base className to be used in this component  */
  baseClassName: PropTypes.string.isRequired,
  /** CSS modifier for ERROR, LOADING variants  */
  modifier: PropTypes.oneOf(Object.values(MODIFIERS)),
  /** The percentage of the current progress */
  percentage: PropTypes.number.isRequired,
  /** width of the stroke  */
  strokeWidth: PropTypes.node.isRequired,
  /** boolean to activate/desactivate animations */
  withAnimation: PropTypes.bool,
  /** The size of the progress stroke, by default it is undefined, it can be "small", "medium" or "large" */
  progressStrokeWidth: PropTypes.literal,
  /** The size of the main stroke, by default it is undefined, it can be "small", "medium" or "large" */
  mainStrokeWidth: PropTypes.literal,
  /** The shape of the end of line, it can be "round" or "square" */
  strokeLineCap: PropTypes.string,
  /** size of the circle [small, large]  */
  size: PropTypes.oneOf(Object.values(SIZES)).isRequired,
  /** color of the circle */
  color: PropTypes.oneOf(Object.values(COLORS))
}

export default Circle
