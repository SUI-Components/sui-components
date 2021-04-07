import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomLineDoubleProgressBarV2'
const CLASS_INDICATOR = `${BASE_CLASS}-indicator`
const CLASS_CONTAINER_BAR = `${BASE_CLASS}-container`
const CLASS_BAR = `${BASE_CLASS}-bar`
const CLASS_BAR_ANIMATED = `${CLASS_BAR}--animated`
const CLASS_EXTRA_BAR = `${BASE_CLASS}-extraBar`
const CLASS_EXTRA_BAR_ANIMATED = `${CLASS_EXTRA_BAR}--animated`

// eslint-disable-next-line react/prop-types
const Indicator = ({indicatorBottom, indicatorTotal, mainBarPercentage}) => {
  return (
    <span
      className={cx(
        CLASS_INDICATOR,
        `${CLASS_INDICATOR}--${indicatorBottom ? 'bottom' : 'top'}`
      )}
    >
      <strong>{mainBarPercentage}</strong>
      {indicatorTotal ? `/100` : `%`}
    </span>
  )
}

const LineDoubleProgressBar = ({
  extraBarPercentage,
  hideIndicator,
  indicatorBottom,
  indicatorTotal,
  isAnimatedOnChange,
  mainBarPercentage
}) => {
  const width = `${mainBarPercentage}%`
  const widthExtraBar = `${extraBarPercentage}%`
  const styleBar = {width}
  const styleExtraBar = {width: widthExtraBar}

  return (
    <div className={BASE_CLASS}>
      {!hideIndicator && !indicatorBottom && (
        <Indicator
          indicatorBottom={indicatorBottom}
          mainBarPercentage={mainBarPercentage}
          indicatorTotal={indicatorTotal}
        />
      )}
      <div className={CLASS_CONTAINER_BAR}>
        <span
          className={cx(CLASS_BAR, isAnimatedOnChange && CLASS_BAR_ANIMATED)}
          style={styleBar}
        />
        <span
          className={cx(
            CLASS_EXTRA_BAR,
            isAnimatedOnChange && CLASS_EXTRA_BAR_ANIMATED
          )}
          style={styleExtraBar}
        />
      </div>
      {!hideIndicator && indicatorBottom && (
        <Indicator
          indicatorBottom={indicatorBottom}
          mainBarPercentage={mainBarPercentage}
          indicatorTotal={indicatorTotal}
        />
      )}
    </div>
  )
}

LineDoubleProgressBar.displayName = 'LineDoubleProgressBar'

LineDoubleProgressBar.propTypes = {
  /** Percentage value to be displayed in extra bar as number  */
  extraBarPercentage: PropTypes.number,

  /** If the indicator should be placed below the bar */
  indicatorBottom: PropTypes.bool,

  /** If the indicator should be displayed with the pattern → {percentage}/100 ({percentage}% as default) */
  indicatorTotal: PropTypes.bool,

  /** If the bar "value" (width) should be displayed with animation */
  isAnimatedOnChange: PropTypes.bool,

  /** Hide the indicator */
  hideIndicator: PropTypes.bool,

  /** Percentage value to be displayed in main bar as number and as bar width  */
  mainBarPercentage: PropTypes.number
}

export default LineDoubleProgressBar
