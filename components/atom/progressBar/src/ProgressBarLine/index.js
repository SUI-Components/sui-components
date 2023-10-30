import cx from 'classnames'
import PropTypes from 'prop-types'

import {SIZES, STATUS} from '../settings.js'
import Line from './Line.js'
import {
  BASE_CLASS,
  BASE_CLASS_LINE,
  BASE_CLASS_LINE_DOUBLE,
  BASE_CLASS_LINE_SIMPLE,
  CLASS_CONTAINER_BAR
} from './settings.js'
import useIndicator from './useIndicator.js'
import usePercentage from './usePercentage.js'

const ProgressBarLine = ({
  hideIndicator,
  indicatorBottom,
  indicatorTotal,
  isAnimatedOnChange,
  percentage,
  mainBarPercentage,
  extraBarPercentage,
  status,
  size = SIZES.MEDIUM
}) => {
  const percentageArray = usePercentage({
    percentage,
    mainBarPercentage,
    extraBarPercentage
  })
  const [indicatorTopElement, indicatorBottomElement] = useIndicator({
    hideIndicator,
    indicatorBottom,
    percentage: percentageArray[0],
    indicatorTotal
  })

  return (
    <div className={BASE_CLASS}>
      {!hideIndicator && !indicatorBottom && indicatorTopElement}
      <div
        className={cx(CLASS_CONTAINER_BAR, {
          [`${CLASS_CONTAINER_BAR}--size-${size}`]: size,
          [`${CLASS_CONTAINER_BAR}--success`]: status === STATUS.SUCCESS,
          [`${CLASS_CONTAINER_BAR}--error`]: status === STATUS.ERROR,
          [`${CLASS_CONTAINER_BAR}--loading`]: status === STATUS.LOADING
        })}
      >
        {percentageArray.map((percentageValue, currentIndex, array) => {
          const index = array.length - 1 - currentIndex
          const isExtra = array.length === 2 && currentIndex === 0
          return (
            <Line
              key={index}
              className={cx({
                [BASE_CLASS_LINE_SIMPLE]: array.length === 1,
                [BASE_CLASS_LINE_DOUBLE]: array.length === 2,
                [`${BASE_CLASS_LINE}--status-${status}`]: status
              })}
              isAnimatedOnChange={isAnimatedOnChange}
              percentage={array[index]}
              isExtra={isExtra}
            />
          )
        })}
      </div>
      {!hideIndicator && indicatorBottom && indicatorBottomElement}
    </div>
  )
}

ProgressBarLine.displayName = 'ProgressBarLine'

ProgressBarLine.propTypes = {
  percentage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Hide the indicator */
  hideIndicator: PropTypes.bool,
  /** If the indicator should be placed below the bar */
  indicatorBottom: PropTypes.bool,
  /** If the indicator should be displayed with the pattern → {percentage}/100 ({percentage}% as default) */
  indicatorTotal: PropTypes.bool,
  /** If the bar "value" (width) should be displayed with animation */
  isAnimatedOnChange: PropTypes.bool,
  /** Percentage value to be displayed in main bar as number and as bar width  */
  mainBarPercentage: PropTypes.number,
  /** Percentage value to be displayed in extra bar as number  */
  extraBarPercentage: PropTypes.number,
  /** Current status of the progress [progress, loading, error]  */
  status: PropTypes.oneOf(Object.values(STATUS)),
  /** The size of the circle, it can be "small" or "large"  */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default ProgressBarLine
