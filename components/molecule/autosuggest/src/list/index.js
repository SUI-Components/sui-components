import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import OptionShown from '../model'
import { AtomListRows } from './atom/row'

const BASE_CLASS = 'sui-MoleculeAutosuggest-List'

const SIZES = {
  SHORT: 'short',
  LARGE: 'large'
}

class MoleculeSelectList extends Component {
  numberOfFeaturedItems = 0
  optionsReference = []

  constructor (props) {
    super(props)
    const {onClickRow, onFocusRow, onLeave, isCollapsed, options, listSize} = props
    this.callbackOnClickRow = onClickRow
    this.callbackOnLeave = onLeave
    this.callbackOnFocusRow = onFocusRow
    this.optionsReference = options
    this.state = {
      isCollapsed: isCollapsed,
      options: this.reworkOptionsWithFeatured(options)
    }

    this.listSize = listSize
    window.addEventListener('keydown', this.keyBindings.bind(this), true)
  }

  componentWillReceiveProps (props) {
    const {options, isCollapsed} = props
    let state = {isCollapsed: isCollapsed}
    if (this.optionsReference !== options) {
      state.options = this.reworkOptionsWithFeatured(options)
      this.optionsReference = options
    }

    this.setState(state)
  }

  reworkOptionsWithFeatured (options) {
    if (!Array.isArray(options)) {
      return []
    }

    let optionsClickedBefore = []
    let counter = 0
    options.forEach((elem) => {
      if (!isNaN(window.sessionStorage[MoleculeSelectList.nameForSessionStorage(elem)])) {
        optionsClickedBefore[counter] = [parseInt(window.sessionStorage[MoleculeSelectList.nameForSessionStorage(elem)]), elem]
        counter++
      }
    })

    optionsClickedBefore.sort((a, b) => { return a[0] < b[0] })
    const lastFeatured = (counter > 3) ? 3 : counter
    let buffer = []
    for (let i = 0; i < lastFeatured; i++) {
      let featured1 = new OptionShown(
        optionsClickedBefore[i][1].getValue(),
        optionsClickedBefore[i][1].getString(),
        i
      )

      featured1.setHightlihgt(optionsClickedBefore[i][1].getHighlight()[0], optionsClickedBefore[i][1].getHighlight()[1])
      featured1.featuredRow()
      buffer.push(featured1)
    }

    this.numberOfFeaturedItems = lastFeatured + 1

    for (let i = 0; i < options.length; i++) {
      options[i].setPosition(i + this.numberOfFeaturedItems)
      buffer.push(options[i])
    }

    return buffer
  }

  static nameForSessionStorage (element) {
    return 'sui-MoleculeAutosuggest-List-selects-counter-' + element.getId()
  }

  callbackOnLeave = () => {}
  callbackOnFocusRow = (element) => () => {}

  _onClickRow = (element) => () => {
    const name = MoleculeSelectList.nameForSessionStorage(element)
    if (!window.sessionStorage.getItem(name)) {
      window.sessionStorage.setItem(name, 0)
    }

    window.sessionStorage[name] = parseInt(window.sessionStorage['sui-MoleculeAutosuggest-List-selects-counter-' + element.getId()]) + 1

    this.callbackOnClickRow(element)()
  }

  _onFocusRow = (element) => () => {
    if (!element) {
      return
    }

    let buffer = this.state.options
    buffer.forEach((el) => {
      if (element.getId() === el.getId()) {
        el.focusRow()
      } else {
        el.resetFocus()
      }
    })

    this.callbackOnFocusRow(element)()

    this.setState({options: buffer})
  }

  keyBindings = (event) => {
    if (this.state.isCollapsed) {
      return
    }

    if (event.defaultPrevented) {
      return
    }

    switch (event.key) {
      case 'ArrowDown':
        this.focusNextItem()
        event.preventDefault()
        break
      case 'ArrowUp':
        this.focusNextItem(true)
        event.preventDefault()
        break
      case 'Enter':
        for (let i = 0; i < this.state.options.length; i++) {
          if (this.state.options[i].isFocus()) {
            this._onClickRow(this.state.options[i])()
            this.setState({isCollapsed: true})
            break
          }
        }
        event.preventDefault()
        break
    }
  }

  focusNextItem (previous = false) {
    let buffer = this.state.options
    let lastFocus = -1

    for (let i = 0; i < buffer.length; i++) {
      if (buffer[i].isFocus()) {
        buffer[i].resetFocus()
        console.log('PositionL: ' + buffer[i].getPosition())
        lastFocus = i
        break
      }
    }

    console.log(lastFocus)
    console.log(buffer[lastFocus])

    let nextFocus = (previous) ? lastFocus - 1 : lastFocus + 1

    if (nextFocus < 0) {
      nextFocus = buffer.length - 1
    } else if (nextFocus > (buffer.length - 1)) {
      nextFocus = 0
    }

    console.log(nextFocus)
    console.log('New PositionL: ' + buffer[nextFocus].getPosition())

    buffer[nextFocus].focusRow()

    this.setState({options: buffer})
    this._onFocusRow(buffer[nextFocus])()
    document.getElementById(BASE_CLASS + '-id').scrollTop = (nextFocus + this.numberOfFeaturedItems) * 40
  }

  render () {
    const className = (this.listSize === SIZES.LARGE)
      ? (this.state.isCollapsed) ? cx(BASE_CLASS, BASE_CLASS + '-hidden', BASE_CLASS + '-large') : cx(BASE_CLASS, BASE_CLASS + '-large')
      : (this.state.isCollapsed) ? cx(BASE_CLASS, BASE_CLASS + '-hidden') : cx(BASE_CLASS)

    return (
      <div
        onMouseLeave={this.callbackOnLeave}
        className={className}
        id={BASE_CLASS + '-id'}
      >
        <AtomListRows options={this.state.options} onFocusCallback={this._onFocusRow} onClickCallback={this._onClickRow} />
      </div>
    )
  }
}

MoleculeSelectList.propTypes = {
  /**
   * Placeholder for string
   */
  options: PropTypes.array,
  /**
   * Callback when a row is click
   */
  onClickRow: PropTypes.any,
  /**
   * Callback when a row is click
   */
  onLeave: PropTypes.any,
  /**
   * Callback when a row is click
   */
  onFocusRow: PropTypes.any,
  /**
   * Whenever is show
   */
  isCollapsed: PropTypes.bool,
  /**
   * Possible options:
   * 'SHORT': Short
   * 'LARGE': Large
   */
  listSize: PropTypes.oneOf(Object.values(SIZES)),
}
MoleculeSelectList.defaultProps = {
  options: [],
  size: SIZES.SHORT
}

export default MoleculeSelectList
