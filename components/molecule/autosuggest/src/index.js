/*
 TODO
 - comprobar que el foco de la lista va bien
 - se cierra el listado sugerido si se hace click en cualquier sitio de la pagina
 - la lista de sugerencias, si un termino es mas largo de lo que se neceista se truncara
 - sort funciton personalizado
 - listado con sugeridos recientes. Guardados en la sesion, se pueden borrar y limitados a 3
 - listado con terminos personalizados. Se anaden a la lista de sugeridos tambien
 - multiselect con etiquetas
 - que se puedan configurar los iconos
 - cosas del responsive
 - sass
 - add new model as input
 - cambiar a funciones stateles
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OptionShown from './model'
import MoleculeSelectList from './list'

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
    const {options, listSize, listBehaviour} = props
    this.listSize = listSize
    this.listBehaviour = listBehaviour
    options.sort((a, b) => {
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
    })

    // guardar en un buffer y asignarlo luego

    for (let i = 0; i < options.length; i++) {
      const isoLabel = isoString(options[i].label)
      this.state.options.push(options[i])
      this.state.optionsStandard.push(isoLabel)
      this.state.optionsShown.push(MoleculeAutosuggest.formatOption(options[i].value, options[i].label, i))
      this.labelToOptionPosition[isoLabel] = i
    }
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

  onBlurInput = () => {
    this.setState({showList: false})
  }

  render () {
    return (
      <div className='sui-MoleculeAutosuggest'>
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
}
MoleculeAutosuggest.defaultProps = {
  options: [],
  placeholder: '',
  listSize: SIZES.SHORT,
  listBehaviour: LIST_BEHAVIOURS.ON_FOCUS
}

export default MoleculeAutosuggest
