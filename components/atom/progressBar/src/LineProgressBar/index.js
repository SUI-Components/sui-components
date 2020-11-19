import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomLineProgressBarV2'
const CLASS_INDICATOR = `${BASE_CLASS}-indicator`
const CLASS_CONTAINER_BAR = `${BASE_CLASS}-container`
const CLASS_BAR = `${BASE_CLASS}-bar`
const CLASS_BAR_ANIMATED = `${CLASS_BAR}--animated`

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

const LineProgressBar = props => {
  const {percentage, indicatorBottom, isAnimatedOnChange, hideIndicator} = props
  const width = `${percentage}%`
  const styleBar = {width}

  return (
    <div className={BASE_CLASS}>
      {!hideIndicator && !indicatorBottom && <Indicator {...props} />}
      <div className={CLASS_CONTAINER_BAR}>
        <span
          className={cx(CLASS_BAR, isAnimatedOnChange && CLASS_BAR_ANIMATED)}
          style={styleBar}
        />
      </div>
      {!hideIndicator && indicatorBottom && <Indicator {...props} />}
    </div>
  )
}

LineProgressBar.displayName = 'LineProgressBar'

LineProgressBar.propTypes = {
  /** Percentage value to be displayed as number and as bar width  */
  percentage: PropTypes.number,

  /** If the indicator should be displayed with the pattern → {percentage}/100 ({percentage}% as default) */
  indicatorTotal: PropTypes.bool,

  /** If the bar "value" (width) should be displayed wuth animation */
  isAnimatedOnChange: PropTypes.bool,

  /** If the indicator should be placed below the bar */
  indicatorBottom: PropTypes.bool,

  /** Hide the indicator */
  hideIndicator: PropTypes.bool
}

export default LineProgressBar
