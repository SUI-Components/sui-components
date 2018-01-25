import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SUILoader from './SUILoader'

const TYPES = {
  FULL: 'full',
  SECTION: 'section'
}

const DELAY = 500 // ms
const BASE_CLASS = 'sui-atom-spinner-layer'

class AtomSpinner extends Component {
  state = {
    delayed: this.props.delayed
  }

  componentDidMount () {
    if (!this.state.delayed) return

    this.timer = setTimeout(() => {
      this.setState({delayed: false})
    }, DELAY)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  getLayerClassName () {
    const {type, on} = this.props
    const {delayed} = this.state

    return cx(
      type === TYPES.SECTION ? BASE_CLASS : `${BASE_CLASS}-full`,
      (!delayed && on) || `${BASE_CLASS}-hide`
    )
  }

  render () {
    const {children, ...props} = this.props

    return (
      <div className='sui-atom-spinner'>
        <div className={this.getLayerClassName(props)}>
          <SUILoader />
        </div>
        {children}
      </div>
    )
  }
}

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  children: PropTypes.node,
  /**
   * Possible options:
   * 'FULL': The spinner fits the whole page container
   * 'SECTION': The spinner fits a specific site component
   */
  type: PropTypes.oneOf(Object.values(TYPES)),
  on: PropTypes.bool,
  delayed: PropTypes.bool,
  contentLoaded: PropTypes.bool
}

AtomSpinner.defaultProps = {
  on: true,
  delayed: false,
  type: TYPES.SECTION
}

export default AtomSpinner
export {
  TYPES as AtomSpinnerTypes
}
