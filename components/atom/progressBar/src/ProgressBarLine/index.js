import PropTypes from 'prop-types'
import cx from 'classnames'
import Line from './Line.js'

import {
  BASE_CLASS,
  CLASS_CONTAINER_BAR,
  BASE_CLASS_LINE_SIMPLE,
  BASE_CLASS_LINE_DOUBLE
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
  extraBarPercentage
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
      <div className={CLASS_CONTAINER_BAR}>
        {percentageArray.map((percentageValue, currentIndex, array) => {
          const index = array.length - 1 - currentIndex
          const isExtra = array.length === 2 && currentIndex === 0
          return (
            <Line
              key={index}
              className={cx({
                [BASE_CLASS_LINE_SIMPLE]: array.length === 1,
                [BASE_CLASS_LINE_DOUBLE]: array.length === 2
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
  extraBarPercentage: PropTypes
}

export default ProgressBarLine
