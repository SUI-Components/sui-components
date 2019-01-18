/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import {withStateValue} from '@s-ui/hoc'

import MoleculeSelect, {
  moleculeSelectDropdownListSizes
} from '../../../../components/molecule/select/src'

import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {IconCloseTag, IconArrowDown} from './Icons'

import {countries} from './data'
import './index.scss'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeSelect</code>
    </h1>
    <h2>Single Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Single selection</h3>
      <MoleculeSelectWithState
        placeholder="Select a Country..."
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection w/ default Value</h3>
      <MoleculeSelectWithState
        value="Luxembourg"
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection (list size=LARGE)</h3>
      <MoleculeSelectWithState
        placeholder="Select a Country..."
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
        size={moleculeSelectDropdownListSizes.LARGE}
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectWithState>
    </div>

    <h2>Multiple Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Multiple selection</h3>
      <MoleculeSelectWithState
        placeholder="Select some countries..."
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
        multiselection
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Multiple selection w/ Default Value</h3>
      <MoleculeSelectWithState
        placeholder="Select some countries..."
        value={['India', 'Luxembourg']}
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
        multiselection
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectWithState>
    </div>
  </div>
)

export default Demo
