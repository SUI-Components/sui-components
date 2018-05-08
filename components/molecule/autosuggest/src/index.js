/*
 TODO
 - check focus order
 - Get New Component for input tags and inlcude it on the solution
 - Get New Component for label and include on the solution
 - responsive
 - ie 11
 - readme
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

// help functions
function reworkOptionList (input, options, optionsStandard) {
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

  iconRemoveItemFeatured
  iconItemFeatured
  iconCleanInput

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
    const {options, listSize, listBehaviour, sortFunction, iconRemoveItemFeatured, iconItemFeatured, iconCleanInput} = props

    this.iconRemoveItemFeatured = iconRemoveItemFeatured
    this.iconItemFeatured = iconItemFeatured
    this.iconCleanInput = (iconCleanInput) || IconClean

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

  handleChange = (event) => {
    const value = event.target.value
    let state = {
      currentInput: value,
      optionsShown: reworkOptionList(value, this.state.options, this.state.optionsStandard)
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
      optionsShown: reworkOptionList('', this.state.options, this.state.optionsStandard)
    })
  }

  onClickRow = (element) => () => {
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
    const moleculeListResolved = function () {
      if (this.iconRemoveItemFeatured && this.iconItemFeatured) {
        return (
          <MoleculeSelectList
            options={this.state.optionsShown}
            onClickRow={this.onClickRow}
            onFocusRow={this.onFocusRow}
            isCollapsed={!this.state.showList}
            size={this.listSize}
            onLeave={this.onLeaveList}
            iconRemoveItemFeatured={this.iconRemoveItemFeatured}
            iconItemFeatured={this.iconItemFeatured}
          />
        )
      } else if (this.iconRemoveItemFeatured) {
        return (
          <MoleculeSelectList
            options={this.state.optionsShown}
            onClickRow={this.onClickRow}
            onFocusRow={this.onFocusRow}
            isCollapsed={!this.state.showList}
            size={this.listSize}
            onLeave={this.onLeaveList}
            iconRemoveItemFeatured={this.iconRemoveItemFeatured}
          />
        )
      } else if (this.iconItemFeatured) {
        return (
          <MoleculeSelectList
            options={this.state.optionsShown}
            onClickRow={this.onClickRow}
            onFocusRow={this.onFocusRow}
            isCollapsed={!this.state.showList}
            size={this.listSize}
            onLeave={this.onLeaveList}
            iconItemFeatured={this.iconItemFeatured}
          />
        )
      } else {
        return (
          <MoleculeSelectList
            options={this.state.optionsShown}
            onClickRow={this.onClickRow}
            onFocusRow={this.onFocusRow}
            isCollapsed={!this.state.showList}
            size={this.listSize}
            onLeave={this.onLeaveList}
          />
        )
      }
    }.bind(this)

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
            onChange={this.handleChange}
            onSelect={this.onSelectInput}
          />
          <span className={this.classForCancelSearch()} onClick={this.cancelSearch}>{this.iconCleanInput()}</span>
        </div>

        {moleculeListResolved()}
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
  /**
   * Icon on a function returning rxjs. Action is to removed featured items from the list
   */
  iconRemoveItemFeatured: PropTypes.any,
  /**
   * Icon on a function returning rxjs. This icon is to mark a featured item
   */
  iconItemFeatured: PropTypes.any,
  /**
   * Icon on a function returning rxjs. Action is to clean input data
   */
  iconCleanInput: PropTypes.any,

}
MoleculeAutosuggest.defaultProps = {
  options: [],
  placeholder: '',
  listSize: SIZES.SHORT,
  listBehaviour: LIST_BEHAVIOURS.ON_FOCUS
}

export default MoleculeAutosuggest

const IconClean = function () {
  return (
    <svg width='14px' height='14px' viewBox='0 0 14 14' version='1.1'>
      <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='icon-fill-close' transform='translate(-5.000000, -5.000000)'>
          <g id='Clipped' transform='translate(5.000000, 5.000000)'>
            <mask id='mask-5' fill='white'>
              <path d='M8.42,7 L13.21,2.2 C13.5497768,1.80323972 13.5269323,1.21180583 13.1575632,0.842436779 C12.7881942,0.47306773 12.1967603,0.450223204 11.8,0.79 L7,5.58 L2.21,0.79 C1.81323972,0.450223204 1.22180583,0.47306773 0.852436779,0.842436779 C0.48306773,1.21180583 0.460223204,1.80323972 0.8,2.2 L5.59,7 L0.8,11.79 C0.51462384,12.0343899 0.390318056,12.4181184 0.478189865,12.783419 C0.566061674,13.1487195 0.85128045,13.4339383 1.21658103,13.5218101 C1.5818816,13.6096819 1.96561012,13.4853762 2.21,13.2 L7,8.41 L11.8,13.2 C12.1967603,13.5397768 12.7881942,13.5169323 13.1575632,13.1475632 C13.5269323,12.7781942 13.5497768,12.1867603 13.21,11.79 L8.42,7 Z' />
            </mask>
            <g id='a' />
            <g id='Group' mask='url(#mask-5)' fill='#777777' fillRule='nonzero'>
              <g transform='translate(-5.000000, -5.000000)' id='Shape'>
                <polygon points='0 0 24 0 24 24 0 24' />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
