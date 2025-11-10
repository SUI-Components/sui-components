import cx from 'classnames'
import PropTypes from 'prop-types'

import {CLASS_INDICATOR} from './settings.js'
import {COLORS} from '../../settings.js'

const Indicator = ({indicatorBottom, indicatorTotal, percentage, color}) => {
  return (
    <div
      className={cx(
        CLASS_INDICATOR,
        {
          [`${CLASS_INDICATOR}--color-${color}`]: color
        },
        `${CLASS_INDICATOR}--${indicatorBottom ? 'bottom' : 'top'}`
      )}
    >
      <strong>{percentage}</strong>
      {indicatorTotal ? `/100` : `%`}
    </div>
  )
}

Indicator.displayName = 'Indicator'

Indicator.propTypes = {
  indicatorBottom: PropTypes.string,
  indicatorTotal: PropTypes.number,
  percentage: PropTypes.number,
  color: PropTypes.oneOf(Object.values(COLORS))
}

export default Indicator
