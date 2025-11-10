import cx from 'classnames'
import PropTypes from 'prop-types'

import {SIZES, STATUS, COLORS} from '../settings.js'
import {INDICATOR_CLASS_NAME} from './settings.js'

const Indicator = ({percentage, status, errorIcon, size, children, color}) => {
  if (status === STATUS.LOADING) return null
  return (
    <div
      className={cx(INDICATOR_CLASS_NAME, `${INDICATOR_CLASS_NAME}--${status}`, `${INDICATOR_CLASS_NAME}--${size}`, {
        [`${INDICATOR_CLASS_NAME}--color-${color}`]: color
      })}
    >
      <span>
        {status === STATUS.PROGRESS && (children || `${percentage}%`)}
        {status === STATUS.ERROR && errorIcon}
      </span>
    </div>
  )
}

Indicator.propTypes = {
  percentage: PropTypes.number.isRequired,
  status: PropTypes.oneOf(Object.values(STATUS)),
  errorIcon: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZES)),
  color: PropTypes.oneOf(Object.values(COLORS)),
  children: PropTypes.node
}

export default Indicator
