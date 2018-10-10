import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomProgressBar'
const CLASS_INDICATOR = 'sui-AtomProgressBar-indicator'
const CLASS_CONTAINER_BAR = 'sui-AtomProgressBar-container'
const CLASS_BAR = 'sui-AtomProgressBar-bar'

class AtomProgressBar extends PureComponent {
  renderIndicator(indicatorBottom) {
    const {percentage, indicatorTotal} = this.props
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
  render() {
    const {percentage, indicatorBottom} = this.props
    const styleBar = {
      width: `${percentage}%`
    }
    return (
      <div className={BASE_CLASS}>
        {!indicatorBottom && this.renderIndicator(indicatorBottom)}
        <div className={CLASS_CONTAINER_BAR}>
          <span className={CLASS_BAR} style={styleBar} />
        </div>
        {indicatorBottom && this.renderIndicator(indicatorBottom)}
      </div>
    )
  }
}

AtomProgressBar.displayName = 'AtomProgressBar'

// Remove these comments if you need
// AtomProgressBar.contextTypes = {i18n: PropTypes.object}
AtomProgressBar.propTypes = {
  percentage: PropTypes.number,
  indicatorTotal: PropTypes.bool,
  indicatorBottom: PropTypes.bool
}
// AtomProgressBar.defaultProps = {}

export default AtomProgressBar
