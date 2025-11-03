import cx from 'classnames'
import PropTypes from 'prop-types'

import {COLORS, LINE_CAPS, SIZES, STATUS} from '../settings.js'
import Circle from './Circle/index.js'
import Indicator from './Indicator.js'
import {BASE_CLASS_NAME, SIZE_TO_WIDTH_LINE_MAP, STROKE_SIZE_MAP} from './settings.js'

const ProgressBarCircle = ({
  percentage,
  status = STATUS.PROGRESS,
  errorIcon,
  size = SIZES.LARGE,
  isAnimatedOnChange = false,
  hideIndicator = false,
  children,
  mainStrokeSize,
  progressStrokeSize,
  strokeLineCap = LINE_CAPS.SQUARE,
  color
}) => {
  const mainStrokeWidth = STROKE_SIZE_MAP[mainStrokeSize] || SIZE_TO_WIDTH_LINE_MAP[size]
  const progressStrokeWidth = STROKE_SIZE_MAP[progressStrokeSize] || SIZE_TO_WIDTH_LINE_MAP[size]

  return (
    <div className={cx(BASE_CLASS_NAME, `${BASE_CLASS_NAME}--${size}`, `${BASE_CLASS_NAME}--${status}`)}>
      <Circle
        baseClassName={BASE_CLASS_NAME}
        mainStrokeWidth={mainStrokeWidth}
        modifier={status}
        percentage={status === STATUS.PROGRESS ? percentage : 0}
        progressStrokeWidth={progressStrokeWidth}
        size={size}
        strokeLineCap={strokeLineCap}
        withAnimation={isAnimatedOnChange}
        color={color}
      />
      {!hideIndicator && (
        <Indicator percentage={percentage} size={size} status={status} errorIcon={errorIcon}>
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

  /** The shape of the end of line, it can be "round" or "square" */
  strokeLineCap: PropTypes.oneOf(Object.values(LINE_CAPS)),

  /** The size of the progress stroke, by default it is undefined, it can be "small", "medium" or "large" */
  progressStrokeSize: PropTypes.number,

  /** The size of the main stroke, by default it is undefined, it can be "small", "medium" or "large" */
  mainStrokeSize: PropTypes.number,

  /** Component to render inside the circle instead of the current progress */
  children: PropTypes.node,

  /** color of the circle */
  color: PropTypes.oneOf(Object.values(COLORS))
}

export default ProgressBarCircle
