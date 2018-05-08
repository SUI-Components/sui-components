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

function getCurrentTime () {
  const date = new Date()
  return date.getTime()
}

class MoleculeSelectList extends Component {
  numberOfFeaturedItems = 0
  optionsReference = []
  lastFocusElementPosition = 0
  lastTimeArrowIsBinded = 0
  maxFeaturedItems = 3
  iconRemoveItemFeatured
  iconItemFeatured

  constructor (props) {
    super(props)
    const {onClickRow, onFocusRow, onLeave, isCollapsed, options, listSize, iconRemoveItemFeatured, iconItemFeatured} = props
    this.callbackOnClickRow = onClickRow
    this.callbackOnLeave = onLeave
    this.callbackOnFocusRow = onFocusRow
    this.iconRemoveItemFeatured = iconRemoveItemFeatured
    this.iconItemFeatured = iconItemFeatured
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
    const lastFeatured = (counter > this.maxFeaturedItems) ? this.maxFeaturedItems : counter
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

    this.numberOfFeaturedItems = lastFeatured

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

    window.sessionStorage[name] = parseInt(window.sessionStorage[MoleculeSelectList.nameForSessionStorage(element)]) + 1

    this.callbackOnClickRow(element)()
  }

  _removeFeatureItem = (element) => () => {
    this.maxFeaturedItems--
    const nameOnCache = MoleculeSelectList.nameForSessionStorage(element).replace('_featured_', '')
    window.sessionStorage.removeItem(nameOnCache)

    this.setState({options: this.reworkOptionsWithFeatured(this.optionsReference)})
  }

  _onFocusRow = (element) => () => {
    if (!element) {
      return
    }

    if ((getCurrentTime() - this.lastTimeArrowIsBinded) <= 500) {
      return
    }

    let buffer = this.state.options
    buffer.forEach((el) => {
      if (element.getId() === el.getId()) {
        el.focusRow()
        this.lastFocusElementPosition = el.getPosition()
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
        this.lastTimeArrowIsBinded = getCurrentTime()
        break
      case 'ArrowUp':
        this.focusNextItem(true)
        event.preventDefault()
        this.lastTimeArrowIsBinded = getCurrentTime()
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

    for (let i = 0; i < buffer.length; i++) {
      if (buffer[i].isFocus()) {
        buffer[i].resetFocus()
      }
    }
    let lastFocus = this.lastFocusElementPosition

    let nextFocus = (previous) ? lastFocus - 1 : lastFocus + 1
    let nextScroll = (previous)
      ? (document.getElementById(BASE_CLASS + '-id').scrollTop - 40)
      : (document.getElementById(BASE_CLASS + '-id').scrollTop + 40)

    if (nextFocus < 0) {
      nextFocus = buffer.length - 1
      nextScroll = (buffer.length - 1) * 40
    } else if (nextFocus > (buffer.length - 1)) {
      nextFocus = 0
      nextScroll = 0
    }

    buffer[nextFocus].focusRow()

    this.lastTimeArrowIsBinded = 0
    this.lastFocusElementPosition = nextFocus

    this._onFocusRow(buffer[nextFocus])()
    this.setState({options: buffer})

    document.getElementById(BASE_CLASS + '-id').scrollTop = nextScroll
  }

  render () {
    const className = (this.listSize === SIZES.LARGE)
      ? (this.state.isCollapsed) ? cx(BASE_CLASS, BASE_CLASS + '-hidden', BASE_CLASS + '-large') : cx(BASE_CLASS, BASE_CLASS + '-large')
      : (this.state.isCollapsed) ? cx(BASE_CLASS, BASE_CLASS + '-hidden') : cx(BASE_CLASS)

    const atomListWrapper = function () {
      if (this.iconRemoveItemFeatured && this.iconItemFeatured) {
        return (
          <AtomListRows
            options={this.state.options}
            onFocusCallback={this._onFocusRow}
            onClickCallback={this._onClickRow}
            removeFeatureItem={this._removeFeatureItem}
            iconRemoveItemFeatured={this.iconRemoveItemFeatured}
            iconItemFeatured={this.iconItemFeatured}
          />
        )
      } else if (this.iconRemoveItemFeatured) {
        return (
          <AtomListRows
            options={this.state.options}
            onFocusCallback={this._onFocusRow}
            onClickCallback={this._onClickRow}
            removeFeatureItem={this._removeFeatureItem}
            iconRemoveItemFeatured={this.iconRemoveItemFeatured}
          />
        )
      } else if (this.iconItemFeatured) {
        return (
          <AtomListRows
            options={this.state.options}
            onFocusCallback={this._onFocusRow}
            onClickCallback={this._onClickRow}
            removeFeatureItem={this._removeFeatureItem}
            iconItemFeatured={this.iconItemFeatured}
          />
        )
      } else {
        return (
          <AtomListRows
            options={this.state.options}
            onFocusCallback={this._onFocusRow}
            onClickCallback={this._onClickRow}
            removeFeatureItem={this._removeFeatureItem}
          />
        )
      }
    }.bind(this)

    return (
      <div
        onMouseLeave={this.callbackOnLeave}
        className={className}
        id={BASE_CLASS + '-id'}
      >
        {atomListWrapper()}
      </div>
    )
  }
}

MoleculeSelectList.propTypes = {
  /**
   * Options list
   */
  options: PropTypes.array,
  /**
   * Callback when a row is click
   */
  onClickRow: PropTypes.any,
  /**
   * Callback when a row is left
   */
  onLeave: PropTypes.any,
  /**
   * Callback when a row is focus
   */
  onFocusRow: PropTypes.any,
  /**
   * Whenever list is shown
   */
  isCollapsed: PropTypes.bool,
  /**
   * Possible options:
   * 'SHORT': Short
   * 'LARGE': Large
   */
  listSize: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Icon on a function returning rxjs.Action to remove featured item
   */
  iconRemoveItemFeatured: PropTypes.any,
  /**
   * Icon on a function returning rxjs. This icon is to mark a featured item
   */
  iconItemFeatured: PropTypes.any,
}
MoleculeSelectList.defaultProps = {
  options: [],
  size: SIZES.SHORT
}

export default MoleculeSelectList
