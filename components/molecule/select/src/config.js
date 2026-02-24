import {Children, createContext, useContext} from 'react'

import cx from 'classnames'

import {inputSizes} from '@s-ui/react-atom-input'
import {atomTagSizes} from '@s-ui/react-atom-tag'
import {moleculeDropdownListSizes} from '@s-ui/react-molecule-dropdown-list'

export const BASE_CLASS = `sui-MoleculeSelect`
export const CLASS_FOCUS = `${BASE_CLASS}--focus`
export const CLASS_DISABLED = `is-disabled`
export const CLASS_READ_ONLY = `is-read-only`

export const SELECT_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

export const SELECT_INPUT_SIZES = {...inputSizes}
export const SELECT_TAG_SIZES = {...atomTagSizes}
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

export const getClassName = ({state, errorState, disabled, readOnly, className, isBorderless}) =>
  cx(
    BASE_CLASS,
    errorState && `${BASE_CLASS}--${SELECT_STATES.ERROR}`,
    errorState === false && `${BASE_CLASS}--${SELECT_STATES.SUCCESS}`,
    state && `${BASE_CLASS}--${state}`,
    isBorderless && `${BASE_CLASS}--isBorderless`,
    {
      [CLASS_DISABLED]: disabled,
      [CLASS_READ_ONLY]: readOnly
    },
    className
  )
