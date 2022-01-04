import PropTypes from 'prop-types'
import LineProgressBar from './LineProgressBar'
import CircleProgressBar from './CircleProgressBar'
import LineDoubleProgressBar from './LineDoubleProgressBar'
import {TYPES, SIZES} from './config'

const AtomProgressBar = ({type, size, ...props}) => {
  switch (type) {
    case TYPES.LINE:
      return <LineProgressBar {...props} />
    case TYPES.CIRCLE:
      return <CircleProgressBar size={size} {...props} />
    case TYPES.LINE_DOUBLE_BAR:
      return <LineDoubleProgressBar size={size} {...props} />
    default:
      return <LineProgressBar {...props} />
  }
}

AtomProgressBar.displayName = 'AtomProgressBar'

AtomProgressBar.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  size: PropTypes.oneOf(Object.values(SIZES))
}

AtomProgressBar.defaultProps = {
  size: SIZES.LARGE,
  type: TYPES.LINE
}

export default AtomProgressBar
export {TYPES as atomProgressBarTypes, SIZES as atomProgressBarSizes}
