import PropTypes from 'prop-types'

import ProgressBarCircle from './ProgressBarCircle/index.js'
import ProgressBarLine from './ProgressBarLine/index.js'
import {LINE_CAPS, SIZES, STATUS, STROKE_SIZES, TYPES} from './settings.js'

const AtomProgressBar = ({type = TYPES.LINE, status = STATUS.PROGRESS, size, ...props}) => {
  switch (type) {
    case TYPES.CIRCLE:
      return <ProgressBarCircle size={size} status={status} {...props} />
    case TYPES.LINE:
    case TYPES.LINE_DOUBLE_BAR:
    default:
      return <ProgressBarLine size={size} status={status} {...props} />
  }
}

AtomProgressBar.displayName = 'AtomProgressBar'

AtomProgressBar.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  status: PropTypes.oneOf(Object.values(STATUS))
}

export default AtomProgressBar
export {
  LINE_CAPS as atomProgressBarLineCaps,
  STROKE_SIZES as atomProgressBarStrokeSizes,
  SIZES as atomProgressBarSizes,
  STATUS as atomProgressBarStatus,
  TYPES as atomProgressBarTypes
}
