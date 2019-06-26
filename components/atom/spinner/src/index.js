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
const CLASS_FULL = `${BASE_CLASS}--fullPage`
const CLASS_NO_BACKGROUND = `${BASE_CLASS}--noBackground`

class AtomSpinner extends Component {
  state = {
    delayed: this.props.delayed
  }

  get _parentNodeClassList() {
    if (this._parentNodeClassListCache) return this._parentNodeClassListCache

    this._parentNodeClassListCache = ReactDOM.findDOMNode(
      this
    ).parentNode.classList
    return this._parentNodeClassListCache
  }

  get _parentClassName() {
    const {type, noBackground} = this.props
    return cx({
      [BASE_CLASS]: type === TYPES.SECTION,
      [CLASS_FULL]: type === TYPES.FULL,
      [CLASS_NO_BACKGROUND]: noBackground
    })
  }

  componentDidMount() {
    if (!this.state.delayed) {
      this._addParentClass()
      return
    }

    this.timer = setTimeout(() => {
      this.setState({delayed: false}, this._addParentClass)
    }, DELAY)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    this._removeParentClass()
  }

  _removeParentClass() {
    this._parentNodeClassList.remove(...this._parentClassName.split(' '))
  }

  _addParentClass() {
    this._parentNodeClassList.add(...this._parentClassName.split(' '))
  }

  render() {
    const {loader} = this.props
    const {delayed} = this.state
    return !delayed ? loader : <noscript />
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

  /** Makes the spinner appear after 500 ms */
  delayed: PropTypes.bool,

  /** No background */
  noBackground: PropTypes.bool,

  /** Loader to be shown in the middle of the container */
  loader: PropTypes.object
}

AtomSpinner.defaultProps = {
  delayed: false,
  type: TYPES.SECTION,
  loader: <SUILoader />
}

export default AtomSpinner
export {TYPES as AtomSpinnerTypes}
