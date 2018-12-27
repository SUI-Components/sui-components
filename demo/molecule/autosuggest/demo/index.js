/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import withStateValue from './hoc/withStateValue'
import withDynamicOptions from './hoc/withDynamicOptions'

import MoleculeAutosuggest, {
  moleculeAutosuggestDropdownListSizes,
  MoleculeAutosuggestOption
} from '../../../../components/molecule/autosuggest/src'

import {IconClose} from './Icons'

import {countries} from './data'
import './index.scss'

const MoleculeAutosuggestWithDynamicOptions = withDynamicOptions(
  MoleculeAutosuggest,
  MoleculeAutosuggestOption
)(countries)

const MoleculeAutosuggestWithState = withStateValue(
  MoleculeAutosuggestWithDynamicOptions
)

const BASE_CLASS_DEMO = 'DemoMoleculeAutosuggest'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_LIST = `${BASE_CLASS_DEMO}-list`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeAutosuggest</code>
    </h1>
    <h2>Dynamic Single Selection</h2>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Single selection</h3>
      <MoleculeAutosuggestWithState
        onChangeSelection={(_, {value}) => console.log(value)}
        iconCloseTag={<IconClose />}
        closeOnSelect
      />
    </div>
    {/*
  
  <div className={CLASS_DEMO_SECTION}>
    <h3>Single selection w/ default Value</h3>
    <MoleculeAutosuggestWithState
      value="Luxembourg"
      onChange={(_, {value}) => console.log(value)}
      iconCloseTag={<IconClose />}
      closeOnSelect
    >
      {countries.map((country, i) => (
        <MoleculeAutosuggestOption key={i} value={country}>
          {country}
        </MoleculeAutosuggestOption>
      ))}
    </MoleculeAutosuggestWithState>
  </div>
 
  <div className={CLASS_DEMO_SECTION}>
    <h3>Single selection (list size=LARGE)</h3>
    <MoleculeAutosuggestWithState
      onChange={(_, {value}) => console.log(value)}
      iconCloseTag={<IconClose />}
      closeOnSelect
      size={moleculeAutosuggestDropdownListSizes.LARGE}
    >
      {countries.map((country, i) => (
        <MoleculeAutosuggestOption key={i} value={country}>
          {country}
        </MoleculeAutosuggestOption>
      ))}
    </MoleculeAutosuggestWithState>
  </div>
 
  <h2>Dynamic Multiple Selection</h2>
  <div className={CLASS_DEMO_SECTION}>
    <h3>Basic Multiple selection</h3>
    <MoleculeAutosuggestWithState
      onChange={(_, {value}) => console.log(value)}
      iconCloseTag={<IconClose />}
      multiselection
    >
      {countries.map((country, i) => (
        <MoleculeAutosuggestOption key={i} value={country}>
          {country}
        </MoleculeAutosuggestOption>
      ))}
    </MoleculeAutosuggestWithState>
  </div>
 
  <div className={CLASS_DEMO_SECTION}>
    <h3>Multiple selection w/ Default Value</h3>
    <MoleculeAutosuggestWithState
      value={['India', 'Luxembourg']}
      onChange={(_, {value}) => console.log(value)}
      iconCloseTag={<IconClose />}
      multiselection
    >
      {countries.map((country, i) => (
        <MoleculeAutosuggestOption key={i} value={country}>
          {country}
        </MoleculeAutosuggestOption>
      ))}
    </MoleculeAutosuggestWithState>
  </div>
  */}
  </div>
)

export default Demo
