import {Children, createContext, useContext} from 'react'

import cx from 'classnames'

import {inputSizes} from '@s-ui/react-atom-input'
import {moleculeDropdownListSizes} from '@s-ui/react-molecule-dropdown-list'

export const BASE_CLASS = `sui-MoleculeSelect`
export const CLASS_FOCUS = `${BASE_CLASS}--focus`
export const CLASS_DISABLED = `is-disabled`

export const SELECT_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

export const SELECT_INPUT_SIZES = {...inputSizes}
export const SELECT_DROPDOWN_LIST_SIZES = {...moleculeDropdownListSizes}

export const DropdownContext = createContext()
export const useDropdown = () => useContext(DropdownContext)

export const ENABLED_KEYS = ['Enter', 'ArrowDown', 'ArrowUp']

export const SELECTION_KEYS = [' ', 'Enter']

export const getOptionData = children => {
  const optionsData = {}
  Children.forEach(children, child => {
    const {children, value} = child.props
    optionsData[value] = children
  })
  return optionsData
}

export const getClassName = ({state, errorState, focus, disabled}) =>
  cx(
    BASE_CLASS,
    errorState && `${BASE_CLASS}--${SELECT_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${SELECT_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--${state}`,
    {
      [CLASS_FOCUS]: focus,
      [CLASS_DISABLED]: disabled
    }
  )
