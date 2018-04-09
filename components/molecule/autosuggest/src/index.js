/*
 TODO
 - check focus order
 - arrows not working properly
 - suggested list, remove items. default items, check integrity
 - personal items on the list written by the user
 - Get New Component for input tags and inlcude it on the solution
 - Get New Component for label and include on the solution
 - Custom icons
 - responsive
 - sass
 - add new model as input
 - cambiar a funciones stateles
 - ie 11
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OptionShown from './model'
import MoleculeSelectList from './list/index'

const BASE_CLASS = 'sui-MoleculeAutosuggest'

const SIZES = {
  SHORT: 'short',
  LARGE: 'large'
}

const LIST_BEHAVIOURS = {
  ON_FOCUS: 'focus',
  ON_2_KEYS: '2_keys',
  ON_3_KEYS: '3_keys',
}

// const TYPES_

function isoString (str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

class MoleculeAutosuggest extends Component {
  listSize = SIZES.SHORT
  listBehaviour = LIST_BEHAVIOURS.ON_FOCUS
  valueBeforeFocus = null
  labelToOptionPosition = []
  uniqueId = 'sui-MoleculeAutosuggest'

  state = {
    currentInput: '',
    optionsShown: [],
    optionsStandard: [],
    options: [],
    selected: null,
    showList: false
  }

  constructor (props) {
    super(props)
    const {options, listSize, listBehaviour, sortFunction} = props
    this.listSize = listSize
    this.listBehaviour = listBehaviour
    if (sortFunction) {
      this._sortFunction = sortFunction
    }

    let localOptions = options.slice(0)

    localOptions.sort(this._sortFunction)

    // guardar en un buffer y asignarlo luego

    for (let i = 0; i < localOptions.length; i++) {
      const isoLabel = isoString(localOptions[i].label)
      this.state.options.push(localOptions[i])
      this.state.optionsStandard.push(isoLabel)
      this.state.optionsShown.push(MoleculeAutosuggest.formatOption(localOptions[i].value, localOptions[i].label, i))
      this.labelToOptionPosition[isoLabel] = i
    }

    this.uniqueId = this.uniqueId + '-' + Math.floor((Math.random() * 1000) + 1)
    document.body.addEventListener('click', this.handleAnyClick, true)
  }

  static formatOption (value, label, position, highStart = 0, highEnd = 0) {
    let opt = new OptionShown(value, label, position)
    opt.setHightlihgt(highStart, highEnd)
    return opt
  }

  static reworkOptionList (input, options, optionsStandard) {
    const toSearch = isoString(input)

    let buffer = []

    for (let i = 0; i < optionsStandard.length; i++) {
      const idx = optionsStandard[i].indexOf(toSearch)
      if (idx > -1) {
        let option = MoleculeAutosuggest.formatOption(options[i].value, options[i].label, i)
        option.setHightlihgt(idx, idx + toSearch.length)
        if (toSearch === optionsStandard[i]) {
          option.focusRow()
        }
        buffer.push(option)
      }
    }

    return buffer
  }

  classForCancelSearch () {
    return (this.state.currentInput.length > 0) ? '' : 'hide'
  }

  _sortFunction = (a, b) => {
    const nA = isoString(a.label)
    const nB = isoString(b.label)
    if (nA > nB) {
      return 1
    }
    if (nA < nB) {
      return -1
    }
    // a must be equal to b
    return 0
  }

  _handleChange = (event) => {
    const value = event.target.value
    let state = {
      currentInput: value,
      optionsShown: MoleculeAutosuggest.reworkOptionList(value, this.state.options, this.state.optionsStandard)
    }

    const length = event.target.value.length

    if (this.listBehaviour === LIST_BEHAVIOURS.ON_2_KEYS) {
      if (length >= 2) {
        state.showList = true
      } else {
        state.showList = false
      }
    }

    if (this.listBehaviour === LIST_BEHAVIOURS.ON_3_KEYS) {
      if (length >= 3) {
        state.showList = true
      } else {
        state.showList = false
      }
    }

    this.setState(state)
  }

  cancelSearch = () => {
    this.setState({
      currentInput: '',
      optionsShown: MoleculeAutosuggest.reworkOptionList('', this.state.options, this.state.optionsStandard)
    })
  }

  _onClickRow = (element) => () => {
    this.valueBeforeFocus = null
    this.setState(
      {
        selected: element,
        currentInput: element.getString(),
        showList: false
      })
  }

  onSelectInput = () => {
    if (this.listBehaviour === LIST_BEHAVIOURS.ON_FOCUS) {
      this.setState({showList: true})
    }
  }

  onFocusRow = (element) => () => {
    if (!element) {
      return
    }

    if (!this.valueBeforeFocus) {
      this.valueBeforeFocus = this.state.currentInput
    }
    this.setState({currentInput: element.getString()})
  }

  onLeaveList = () => {
    if (this.valueBeforeFocus) {
      this.setState({currentInput: this.valueBeforeFocus})
      this.valueBeforeFocus = null
    }
  }

  handleAnyClick = (ev) => {
    if (document.querySelector('#' + this.uniqueId + ' > div') && !document.querySelector('#' + this.uniqueId + ' > div').contains(ev.target)) {
      this.setState({showList: false})
    }
  }

  render () {
    return (
      <div
        className='sui-MoleculeAutosuggest'
        id={this.uniqueId}
      >
        <label>Test</label>

        <div className={BASE_CLASS + '-input-container'}>
          <input
            type='text'
            value={this.state.currentInput}
            placeholder={this.props.placeholder}
            onChange={this._handleChange}
            onSelect={this.onSelectInput}
          />
          <span className={this.classForCancelSearch()} onClick={this.cancelSearch}>X</span>
        </div>

        <MoleculeSelectList
          options={this.state.optionsShown}
          onClickRow={this._onClickRow}
          onFocusRow={this.onFocusRow}
          isCollapsed={!this.state.showList}
          size={this.listSize}
          onLeave={this.onLeaveList}
        />
      </div>
    )
  }
}

MoleculeAutosuggest.displayName = 'MoleculeAutosuggest'

MoleculeAutosuggest.propTypes = {
  /**
   * Placeholder for string
   */
  options: PropTypes.array,
  /**
   * Placeholder for string
   */
  placeholder: PropTypes.string,
  /**
   * Possible options:
   * 'short': Short
   * 'large': Large
   */
  listSize: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Possible options:
   * 'focus': focus
   * '2_keys': 2 Keys
   * '3_keys': 3 Keys
   */
  listBehaviour: PropTypes.oneOf(Object.values(LIST_BEHAVIOURS)),
  /**
   * sort function
   */
  sortFunction: PropTypes.any,

}
MoleculeAutosuggest.defaultProps = {
  options: [],
  placeholder: '',
  listSize: SIZES.SHORT,
  listBehaviour: LIST_BEHAVIOURS.ON_FOCUS
}

export default MoleculeAutosuggest
