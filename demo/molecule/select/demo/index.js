/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
// moleculeSelectListSizes

import {countries} from './data'

import MoleculeSelect, {
  moleculeSelectDropdownListSizes
} from '../../../../components/molecule/select/src'

import MoleculeDropdownListOption from '@s-ui/react-molecule-dropdown-option'

import {IconCloseTag, IconArrowDown, IconArrowUp} from './Icons'

// import {withStateValue} from '@s-ui/hoc'
import withStateValue from './hoc/withStateValue'
import './index.scss'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_LIST = `${BASE_CLASS_DEMO}-list`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeSelect</code>
    </h1>
    <h2>Dynamic</h2>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection</h3>
      <MoleculeSelectWithState
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
        closeOnSelect
      >
        {countries.map((country, i) => (
          <MoleculeDropdownListOption key={i} value={country}>
            {country}
          </MoleculeDropdownListOption>
        ))}
      </MoleculeSelectWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Multiple selection</h3>
      <MoleculeSelectWithState
        options={countries}
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
        value={[]}
        multiselection
      >
        {countries.map((country, i) => (
          <MoleculeDropdownListOption key={i} value={country}>
            {country}
          </MoleculeDropdownListOption>
        ))}
      </MoleculeSelectWithState>
    </div>

    <h2>Static</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>
        Basic (default <code>size → SMALL</code>)
      </h3>
      <div className={CLASS_DEMO_LIST} />
    </div>
  </div>
)

export default Demo
