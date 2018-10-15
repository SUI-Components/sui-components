import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomProgressBar'
const CLASS_INDICATOR = 'sui-AtomProgressBar-indicator'
const CLASS_CONTAINER_BAR = 'sui-AtomProgressBar-container'
const CLASS_BAR = 'sui-AtomProgressBar-bar'
const CLASS_BAR_ANIMATED = 'sui-AtomProgressBar-bar--animated'

const Indicator = props => {
  const {indicatorBottom, percentage, indicatorTotal} = props // eslint-disable-line react/prop-types
  return (
    <span
      className={cx(
        CLASS_INDICATOR,
        `${CLASS_INDICATOR}--${indicatorBottom ? 'bottom' : 'top'}`
      )}
    >
      <strong>{percentage}</strong>
      {indicatorTotal ? `/100` : `%`}
    </span>
  )
}

class AtomProgressBar extends PureComponent {
  render() {
    const {percentage, indicatorBottom, isAnimatedOnChange} = this.props
    const width = `${percentage}%`
    const styleBar = {width}
    return (
      <div className={BASE_CLASS}>
        {!indicatorBottom && <Indicator {...this.props} />}
        <div className={CLASS_CONTAINER_BAR}>
          <span
            className={cx(CLASS_BAR, isAnimatedOnChange && CLASS_BAR_ANIMATED)}
            style={styleBar}
          />
        </div>
        {indicatorBottom && <Indicator {...this.props} />}
      </div>
    )
  }
}

AtomProgressBar.displayName = 'AtomProgressBar'

AtomProgressBar.propTypes = {
  /** Percentage value to be displayed as number and as bar width  */
  percentage: PropTypes.number,

  /** If the indicator should be displayed with the pattern → {percentage}/100 ({percentage}% as default) */
  indicatorTotal: PropTypes.bool,

  /** If the bar "value" (width) should be displayed wuth animation */
  isAnimatedOnChange: PropTypes.bool,

  /** If the indicator should be placed below the bar */
  indicatorBottom: PropTypes.bool
}

export default AtomProgressBar
