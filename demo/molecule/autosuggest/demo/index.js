/* eslint-disable react/prop-types, no-unused-vars, no-console */
import React from 'react'

import {withStateValue, withStateValueTags} from '@s-ui/hoc'

import MoleculeAutosuggest, {
  MoleculeAutosuggestDropdownListSizes
} from '../../../../components/molecule/autosuggest/src'
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

import AlternativeOption from './components/AlternativeOption/'
import withDynamicOptions from './hoc/withDynamicOptions'
import {IconClose} from './Icons'
import {countries} from './data'
import './index.scss'

const MoleculeAutosuggestWithDynamicOptions = withDynamicOptions(
  MoleculeAutosuggest,
  MoleculeDropdownOption
)(countries)

const MoleculeAutosuggestWithDynamicAlternativeOptions = withDynamicOptions(
  MoleculeAutosuggest,
  AlternativeOption
)(countries)

const MoleculeAutosuggestWithState = withStateValue(
  MoleculeAutosuggestWithDynamicOptions
)

const MoleculeAutosuggestWithStateTags = withStateValueTags(
  MoleculeAutosuggestWithDynamicOptions
)

const MoleculeAutosuggestAlternativeWithState = withStateValue(
  MoleculeAutosuggestWithDynamicAlternativeOptions
)

const BASE_CLASS_DEMO = 'DemoMoleculeAutosuggest'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeAutosuggest</code>
    </h1>
    <h2>Single Selection</h2>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Single selection</h3>
      <MoleculeAutosuggestWithState
        onChange={(_, {value}) => console.log(value)}
        iconClear={<IconClose />}
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection w/ default Value</h3>
      <MoleculeAutosuggestWithState
        value="Luxembourg"
        onChange={(_, {value}) => console.log(value)}
        iconClear={<IconClose />}
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection (list size=LARGE)</h3>
      <MoleculeAutosuggestWithState
        onChange={(_, {value}) => console.log(value)}
        iconClear={<IconClose />}
        size={MoleculeAutosuggestDropdownListSizes.LARGE}
      />
    </div>

    <h2>Multiple Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>Basic Multiple selection</h3>
      <MoleculeAutosuggestWithStateTags
        onChangeTags={(_, {tags}) => console.log(tags)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        multiselection
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>Multiple selection w/ Default Value</h3>
      <MoleculeAutosuggestWithStateTags
        tags={['India', 'Luxembourg']}
        onChangeTags={(_, {tags}) => console.log(tags)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        multiselection
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>
        Multiple selection w/ both <code>onChange</code> and{' '}
        <code>onChangeTags</code> handlers
      </h3>
      <MoleculeAutosuggestWithStateTags
        onChangeTags={(_, {tags}) => console.log(tags)}
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        multiselection
      />
    </div>

    <h2>w/ alternative Option component</h2>

    <div className={CLASS_DEMO_SECTION}>
      <MoleculeAutosuggestAlternativeWithState
        onChange={(_, {value}) => console.log(value)}
        iconClear={<IconClose />}
      />
    </div>
  </div>
)

export default Demo
