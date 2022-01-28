import PropTypes from 'prop-types'
import cx from 'classnames'

import Circle from './Circle/index.js'
import {
  BASE_CLASS_NAME,
  SIZES,
  STATUS,
  SIZE_TO_WIDTH_LINE_MAP
} from './settings.js'

import Indicator from './Indicator.js'

const ProgressBarCircle = ({
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

ProgressBarCircle.displayName = 'ProgressBarCircle'

ProgressBarCircle.propTypes = {
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

ProgressBarCircle.defaultProps = {
  isAnimatedOnChange: false,
  status: STATUS.PROGRESS,
  hideIndicator: false
}

export default ProgressBarCircle
