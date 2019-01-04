/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'

import {withStateValue} from '@s-ui/hoc'
import withStateTags from './hoc/withStateTags'
import withDynamicOptions from './hoc/withDynamicOptions'

import MoleculeAutosuggest, {
  MoleculeAutosuggestDropdownListSizes,
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

const MoleculeAutosuggestWithStateTags = withStateValue(
  withStateTags(MoleculeAutosuggestWithDynamicOptions)
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
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        closeOnSelect
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection w/ default Value</h3>
      <MoleculeAutosuggestWithState
        value="Luxembourg"
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        closeOnSelect
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection (list size=LARGE)</h3>
      <MoleculeAutosuggestWithState
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        closeOnSelect
        size={MoleculeAutosuggestDropdownListSizes.LARGE}
      />
    </div>

    <h2>Dynamic Multiple Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Multiple selection</h3>
      <MoleculeAutosuggestWithStateTags
        onChange={(_, {value}) => console.log(value)}
        value={[]}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        multiselection
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Multiple selection w/ Default Value</h3>
      <MoleculeAutosuggestWithStateTags
        value={['India', 'Luxembourg']}
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        multiselection
      />
    </div>
  </div>
)

export default Demo
