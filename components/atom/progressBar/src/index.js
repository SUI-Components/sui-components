import PropTypes from 'prop-types'

import ProgressBarCircle from './ProgressBarCircle/index.js'
import ProgressBarLine from './ProgressBarLine/index.js'
import {COLORS, LINE_CAPS, SIZES, STATUS, STROKE_SIZES, TYPES} from './settings.js'

const AtomProgressBar = ({type = TYPES.LINE, status = STATUS.PROGRESS, color, size, ...props}) => {
  switch (type) {
    case TYPES.CIRCLE:
      return <ProgressBarCircle size={size} status={status} color={color} {...props} />
    case TYPES.LINE:
    case TYPES.LINE_DOUBLE_BAR:
    default:
      return <ProgressBarLine size={size} status={status} color={color} {...props} />
  }
}

AtomProgressBar.displayName = 'AtomProgressBar'

AtomProgressBar.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  color: PropTypes.oneOf(Object.values(COLORS))
}

export default AtomProgressBar
export {
  LINE_CAPS as atomProgressBarLineCaps,
  STROKE_SIZES as atomProgressBarStrokeSizes,
  SIZES as atomProgressBarSizes,
  STATUS as atomProgressBarStatus,
  TYPES as atomProgressBarTypes,
  COLORS as atomProgressBarColors
}
