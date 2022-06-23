import cx from 'classnames'
import PropTypes from 'prop-types'

import {SIZES, STATUS} from '../settings.js'
import {INDICATOR_CLASS_NAME} from './settings.js'

const Indicator = ({percentage, status, errorIcon, size, children}) => {
  if (status === STATUS.LOADING) return null
  return (
    <span
      className={cx(
        INDICATOR_CLASS_NAME,
        `${INDICATOR_CLASS_NAME}--${status}`,
        `${INDICATOR_CLASS_NAME}--${size}`
      )}
    >
      {status === STATUS.PROGRESS && (children || `${percentage}%`)}
      {status === STATUS.ERROR && errorIcon}
    </span>
  )
}

Indicator.propTypes = {
  percentage: PropTypes.number.isRequired,
  status: PropTypes.oneOf(Object.values(STATUS)),
  errorIcon: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZES)),
  children: PropTypes.node
}

export default Indicator
