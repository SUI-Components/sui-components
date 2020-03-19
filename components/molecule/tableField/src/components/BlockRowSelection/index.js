/* eslint-disable react/prop-types */
import React from 'react'

import MoleculeSelect, {
  moleculeSelectDropdownListSizes
} from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {withStateValue} from '@s-ui/hoc'

import {IconArrowDown} from './Icons'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const BASE_CLASS = `sui-MoleculeTableField`
const CLASS_BLOCK_ROW_SELECTION = `${BASE_CLASS}-blockRowSelection`
const CLASS_PRE_SELECT = `${CLASS_BLOCK_ROW_SELECTION}-preSelect`
const CLASS_AFTER_SELECT = `${CLASS_BLOCK_ROW_SELECTION}-afterSelect`

const BlockRowSelection = ({
  optionsNumRows,
  textPreSelect,
  textAfterSelect,
  onChangeDisplayNumRows
}) => (
  <div className={CLASS_BLOCK_ROW_SELECTION}>
    <span className={CLASS_PRE_SELECT}>{textPreSelect}</span>
    <MoleculeSelectWithState
      onChange={onChangeDisplayNumRows}
      iconArrowDown={<IconArrowDown />}
      size={moleculeSelectDropdownListSizes.MEDIUM}
    >
      {optionsNumRows.map((numRows, i) => (
        <MoleculeSelectOption key={i} value={numRows}>
          {numRows}
        </MoleculeSelectOption>
      ))}
    </MoleculeSelectWithState>
    <span className={CLASS_AFTER_SELECT}>{textAfterSelect}</span>
  </div>
)

export default BlockRowSelection
