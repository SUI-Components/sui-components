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

  get _parentNodeClassList () {
    if (this._parentNodeClassListCache) return this._parentNodeClassListCache

    this._parentNodeClassListCache = ReactDOM.findDOMNode(this).parentNode.classList
    return this._parentNodeClassListCache
  }

  get _parentClassName () {
    const {type} = this.props

    return cx(
      type === TYPES.SECTION ? BASE_CLASS : `${BASE_CLASS}--full-page`
    )
  }

  componentDidMount () {
    if (!this.state.delayed) {
      this.props.on && this._addParentClass()
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
    if (this.props.on === nextProps.on) return
    if (!this.props.on) return this._addParentClass()
    if (this.props.on) return this._removeParentClass()
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
