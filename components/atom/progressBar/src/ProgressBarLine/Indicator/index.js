import cx from 'classnames'
import PropTypes from 'prop-types'

import {CLASS_INDICATOR} from './settings.js'

const Indicator = ({indicatorBottom, indicatorTotal, percentage}) => {
  return (
    <span className={cx(CLASS_INDICATOR, `${CLASS_INDICATOR}--${indicatorBottom ? 'bottom' : 'top'}`)}>
      <strong>{percentage}</strong>
      {indicatorTotal ? `/100` : `%`}
    </span>
  )
}

Indicator.displayName = 'Indicator'

Indicator.propTypes = {
  indicatorBottom: PropTypes.string,
  indicatorTotal: PropTypes.number,
  percentage: PropTypes.number
}

export default Indicator
