import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeAutosuggest-List'

const SIZES = {
  SHORT: 'short',
  LARGE: 'large'
}

const atomItemHighlighted = function (option, onClickCallback, onFocusCallback) {
  const cxNames = (option.isFocus())
    ? cx(BASE_CLASS + '-row', 'focus')
    : cx(BASE_CLASS + '-row')

  return (
    <div
      className={cxNames}
      key={option.getPosition()}
      onClick={onClickCallback(option)}
      onMouseOver={onFocusCallback(option)}
    >
      {option.getFirstPartString()}
      <span className={BASE_CLASS + '-row-item--highlighted'}>{option.getHighlightedString()}</span>
      {option.getLastPartString()}
    </div>
  )
}

const atomItem = function (option, onClickCallback, onFocusCallback) {
  const cxNames = (option.isFocus())
    ? cx(BASE_CLASS + '-row', 'focus')
    : cx(BASE_CLASS + '-row')

  return (
    <div
      className={cxNames}
      key={option.getPosition()}
      onClick={onClickCallback(option)}
      onMouseOver={onFocusCallback(option)}
    >
      {option.getString()}
    </div>
  )
}

const atomRows = function (options, onClickCallback, onFocusCallback) {
  let rows = []

  for (let i = 0; i < options.length; i++) {
    if (options[i].isHighlited()) {
      rows.push(atomItemHighlighted(options[i], onClickCallback, onFocusCallback))
    } else {
      rows.push(atomItem(options[i], onClickCallback, onFocusCallback))
    }
  }

  return (rows)
}

class MoleculeSelectList extends Component {
  constructor (props) {
    super(props)
    const {onClickRow, onFocusRow, onLeave, isCollapsed, options, listSize} = props
    this._onClickRow = onClickRow
    this.callbackOnLeave = onLeave
    this.callbackOnFocusRow = onFocusRow
    this.state = {
      options: options,
      isCollapsed: isCollapsed
    }

    this.listSize = listSize

    window.addEventListener('keydown', this.keyBindings.bind(this), true)
  }

  componentWillReceiveProps (props) {
    const {options, isCollapsed} = props
    this.setState({options: options, isCollapsed: isCollapsed})
  }

  callbackOnLeave = () => {}
  callbackOnFocusRow = (element) => () => {}

  _onClickRow = (element) => () => {}

  _onFocusRow = (element) => () => {
    let buffer = this.state.options
    let elm = null
    buffer.forEach((el) => {
      if (element.getValue() === el.getValue()) {
        el.focusRow()
        elm = element
      } else {
        el.resetFocus()
      }
    })

    this.callbackOnFocusRow(elm)()

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
        this.focusItem()
        event.preventDefault()
        break
      case 'ArrowUp':
        this.focusItem(true)
        event.preventDefault()
        break
      case 'Enter':
        for (let i = 0; i < this.state.options.length; i++) {
          if (this.state.options[i].isFocus()) {
            this._onClickRow(this.state.options[i])()
            break
          }
        }
        event.preventDefault()
        break
    }
  }

  focusItem (previous = false) {
    let buffer = this.state.options
    let lastFocus = -1

    for (let i = 0; i < buffer.length; i++) {
      if (buffer[i].isFocus()) {
        buffer[i].resetFocus()
        lastFocus = i
        break
      }
    }

    let nextFocus = (previous) ? lastFocus - 1 : lastFocus + 1

    if (nextFocus < 0) {
      nextFocus = buffer.length - 1
    } else if (nextFocus > (buffer.length - 1)) {
      nextFocus = 0
    }

    buffer[nextFocus].focusRow()

    this.setState({options: buffer})
  }

  render () {
    const className = (this.listSize === SIZES.LARGE)
      ? (this.state.isCollapsed) ? cx(BASE_CLASS, BASE_CLASS + '-hidden', BASE_CLASS + '-large') : cx(BASE_CLASS, BASE_CLASS + '-large')
      : (this.state.isCollapsed) ? cx(BASE_CLASS, BASE_CLASS + '-hidden') : cx(BASE_CLASS)

    return (
      <div
        onMouseLeave={this.callbackOnLeave}
        className={className}
      >
        {atomRows(this.state.options, this._onClickRow, this._onFocusRow)}
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
