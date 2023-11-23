import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS_EXTRA_LINE, BASE_CLASS_EXTRA_LINE_ANIMATED, BASE_CLASS_LINE, CLASS_BAR_ANIMATED} from './settings.js'

const Line = ({isAnimatedOnChange, percentage, className, isExtra}) => (
  <span
    className={cx(
      !isExtra && BASE_CLASS_LINE,
      isExtra && BASE_CLASS_EXTRA_LINE,
      className,
      isAnimatedOnChange && !isExtra && CLASS_BAR_ANIMATED,
      isAnimatedOnChange && isExtra && BASE_CLASS_EXTRA_LINE_ANIMATED
    )}
    style={{width: `${percentage}%`}}
  />
)

Line.displayName = 'ProgressBarLine'

Line.propTypes = {
  isAnimatedOnChange: PropTypes.bool,
  percentage: PropTypes.number,
  className: PropTypes.string,
  isExtra: PropTypes.bool
}

export default Line
