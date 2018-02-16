import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SUILoader from './SUILoader'

const TYPES = {
  FULL: 'full',
  SECTION: 'section'
}

const DELAY = 500 // ms
const BASE_CLASS = 'sui-atom-spinner'

class AtomSpinner extends Component {
  state = {
    delayed: this.props.delayed
  }

  get _parentNode () {
    return ReactDOM.findDOMNode(this).parentNode
  }

  get _parentClassName () {
    const {type} = this.props

    return cx(
      type === TYPES.SECTION ? BASE_CLASS : `${BASE_CLASS}--full-page`
    )
  }

  componentDidMount () {
    if (!this.state.delayed) {
      this.props.on && this.addClassToParent()
      return
    }

    this.timer = setTimeout(() => {
      this.setState({delayed: false}, this.addClassToParent)
    }, DELAY)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
    this.removeClassToParent()
  }

  removeClassToParent () {
    this._parentNode.classList.remove(this._parentClassName)
  }

  addClassToParent () {
    this._parentNode.classList.add(this._parentClassName)
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.on && this.props.on !== nextProps.on) {
      this.addClassToParent()
    } else if (this.props.on && this.props.on !== nextProps.on) {
      this.removeClassToParent()
    }
  }

  shouldRenderLoader () {
    const {on} = this.props
    const {delayed} = this.state

    return !delayed && on
  }

  render () {
    const {loader} = this.props
    return (
      this.shouldRenderLoader()
        ? loader
        : <noscript />
    )
  }
}

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  /**
   * Possible options:
   * 'FULL': The spinner fits the whole page container
   * 'SECTION': The spinner fits a specific site component
   */
  type: PropTypes.oneOf(Object.values(TYPES)),
  on: PropTypes.bool,
  delayed: PropTypes.bool,
  loader: PropTypes.object
}

AtomSpinner.defaultProps = {
  on: true,
  delayed: false,
  type: TYPES.SECTION,
  loader: <SUILoader text='Loading...' />
}

export default AtomSpinner
export {
  TYPES as AtomSpinnerTypes
}
