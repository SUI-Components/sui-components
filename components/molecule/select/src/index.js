import React from 'react'
import PropTypes from 'prop-types'

import {moleculeDropdownListSizes as SIZES} from '../../dropdownList/src'
import MoleculeSelectSingleSelection from './components/SingleSelection'
import MoleculeSelectMultipleSelection from './components/MultipleSelection'

import withOpenToggle from './hoc/withOpenToggle'

const BASE_CLASS = `sui-MoleculeSelect`

const refDropdownList = React.createRef()

const MoleculeSelect = props => {
  const {multiselection, ..._props} = props

  const getFocusedOptionIndex = options => {
    const currentElementFocused = document.activeElement
    return Array.from(options).reduce((focusedOptionIndex, option, index) => {
      if (option === currentElementFocused) focusedOptionIndex = index
      return focusedOptionIndex
    }, 0)
  }

  const handleKeyDown = ev => {
    const {onToggle, isOpen} = props
    const options = refDropdownList.current.children
    if (ev.key === 'Enter') {
      onToggle(ev, {})
    }
    if (ev.key === 'ArrowDown' && isOpen && !getFocusedOptionIndex(options)) {
      options[0].focus()
    }
  }

  return (
    <div tabIndex="0" className={BASE_CLASS} onKeyDown={handleKeyDown}>
      {multiselection ? (
        <MoleculeSelectMultipleSelection
          innerRef={refDropdownList}
          {..._props}
        />
      ) : (
        <MoleculeSelectSingleSelection innerRef={refDropdownList} {..._props} />
      )}
    </div>
  )
}

MoleculeSelect.propTypes = {
  /** if select accept single value or multiple values */
  multiselection: PropTypes.bool,

  /** value selected */
  value: PropTypes.any,

  /** list of values to be displayed on the select */
  options: PropTypes.array,

  /** if list of options is displayed or not */
  isOpen: PropTypes.bool,

  /** callback when arrow up/down is clicked → to show/hide list of options */
  onToggle: PropTypes.func,

  /** callback to be triggered when value selected changes */
  onChange: PropTypes.func,

  /** if list should be hidden when any value is selected */
  closeOnSelect: PropTypes.bool,

  /** Icon for closing (removing) tags */
  iconCloseTag: PropTypes.any,

  /** Icon for arrow in select (down direction when closed) */
  iconArrowDown: PropTypes.any,

  /** Icon for arrow in select (up direction when opened) */
  iconArrowUp: PropTypes.any,

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES))
}

MoleculeSelectSingleSelection.defaultProps = {
  onChange: () => {},
  onToggle: () => {}
}

export default withOpenToggle(MoleculeSelect)
export {SIZES as moleculeSelectDropdownListSizes}
