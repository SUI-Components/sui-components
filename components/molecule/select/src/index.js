import React from 'react'
import PropTypes from 'prop-types'

import {moleculeDropdownListSizes as SIZES} from '../../dropdownList/src'
import MoleculeSelectSingleSelection from './components/SingleSelection'
import MoleculeSelectMultipleSelection from './components/MultipleSelection'

const MoleculeSelect = ({multiselection, ...props}) =>
  multiselection ? (
    <MoleculeSelectMultipleSelection {...props} />
  ) : (
    <MoleculeSelectSingleSelection {...props} />
  )

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

  /** size (height) of the list */
  size: PropTypes.oneOf(Object.values(SIZES))
}

export default MoleculeSelect
export {SIZES as moleculeSelectDropdownListSizes}
