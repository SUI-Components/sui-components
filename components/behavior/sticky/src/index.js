import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-BehaviorSticky'
// const CLASS_TOP = `${BASE_CLASS}--top`
// const CLASS_BOTTOM = `${BASE_CLASS}--bottom`

class BehaviorSticky extends Component {
  render() {
    const {children /*, bottom */} = this.props // eslint-disable-line react/prop-types
    return <div className={cx(BASE_CLASS)}>{children}</div>
  }
}

BehaviorSticky.displayName = 'BehaviorSticky'

// Remove these comments if you need
// BehaviorSticky.contextTypes = {i18n: PropTypes.object}

// BehaviorSticky.propTypes = {
//   bottom: PropTypes.bool
// }

// BehaviorSticky.defaultProps = {}

export default BehaviorSticky
