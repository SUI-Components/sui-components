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
const BASE_CLASS = 'sui-AtomSpinner'

class AtomSpinner extends Component {
  state = {
    delayed: this.props.delayed
  }

  get _parentNodeClassList () {
    if (this._parentNodeClassListCache) return this._parentNodeClassListCache

    this._parentNodeClassListCache = ReactDOM.findDOMNode(this).parentNode.classList
    return this._parentNodeClassListCache
  }

  get _parentClassName () {
    const {type} = this.props

    return cx(
      type === TYPES.SECTION ? BASE_CLASS : `${BASE_CLASS}--fullPage`
    )
  }

  componentDidMount () {
    if (!this.state.delayed) {
      this.props.show && this._addParentClass()
      return
    }

    this.timer = setTimeout(() => {
      this.setState({delayed: false}, this._addParentClass)
    }, DELAY)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
    this._removeParentClass()
  }

  _removeParentClass () {
    this._parentNodeClassList.remove(this._parentClassName)
  }

  _addParentClass () {
    this._parentNodeClassList.add(this._parentClassName)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.show === nextProps.show) return
    if (!this.props.show) return this._addParentClass()
    if (this.props.show) return this._removeParentClass()
  }

  shouldRenderLoader () {
    const {show} = this.props
    const {delayed} = this.state

    return !delayed && show
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
  /**
   * If the spinner is shown or not
   */
  show: PropTypes.bool,
  /**
   * Makes the spinner appear after 500 ms
   */
  delayed: PropTypes.bool,
  /**
   * Loader to be shown in the middle of the container
   */
  loader: PropTypes.object
}

AtomSpinner.defaultProps = {
  show: true,
  delayed: false,
  type: TYPES.SECTION,
  loader: <SUILoader text='Loading...' />
}

export default AtomSpinner
export {
  TYPES as AtomSpinnerTypes
}
