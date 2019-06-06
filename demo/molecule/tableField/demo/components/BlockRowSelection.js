import React from 'react'

import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {withStateValue} from '@s-ui/hoc'

import {IconArrowDown} from './Icons'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

// eslint-disable-next-line
export const BlockRowSelection = ({optionsNumRows, onChangeDisplayNumRows}) => (
  <div>
    <span>Show</span>
    <MoleculeSelectWithState
      placeholder="Select number of rows to display..."
      onChange={onChangeDisplayNumRows}
      iconArrowDown={<IconArrowDown />}
    >
      {optionsNumRows.map((numRows, i) => (
        <MoleculeSelectOption key={i} value={numRows}>
          {numRows}
        </MoleculeSelectOption>
      ))}
    </MoleculeSelectWithState>
    <span>entries</span>
  </div>
)
