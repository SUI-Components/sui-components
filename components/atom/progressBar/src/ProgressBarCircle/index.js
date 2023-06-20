import cx from 'classnames'
import PropTypes from 'prop-types'

import {SIZES, STATUS} from '../settings.js'
import Circle from './Circle/index.js'
import Indicator from './Indicator.js'
import {BASE_CLASS_NAME, SIZE_TO_WIDTH_LINE_MAP} from './settings.js'

const ProgressBarCircle = ({
  percentage,
  status,
  errorIcon,
  size,
  isAnimatedOnChange,
  hideIndicator,
  children,
  outerStrokeWidth,
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
        outerStrokeWidth={outerStrokeWidth}
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
  /** When progress stroke is bigger than main one, it would be double in width  */
  outerStrokeWidth: PropTypes.bool,

  /** Component to render inside the circle instead of the current progress */
  children: PropTypes.node
}

ProgressBarCircle.defaultProps = {
  isAnimatedOnChange: false,
  outerStrokeWidth: false,
  status: STATUS.PROGRESS,
  hideIndicator: false,
  size: SIZES.LARGE
}

export default ProgressBarCircle
