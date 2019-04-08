/* eslint-disable no-console */
import React from 'react'

import {withStateValue, withStateValueTags} from '@s-ui/hoc'

import MoleculeAutosuggestField from '../../../../components/molecule/autosuggestField/src'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import withDynamicOptions from './hoc/withDynamicOptions'

import {IconClose} from './Icons'
import {getAsyncCountriesFromQuery} from './services'
import './index.scss'

const MoleculeAutosuggestFieldWithDynamicOptions = withDynamicOptions(
  MoleculeAutosuggestField,
  MoleculeAutosuggestOption
)(getAsyncCountriesFromQuery)

const MoleculeAutosuggestFieldWithState = withStateValue(
  MoleculeAutosuggestFieldWithDynamicOptions
)

const MoleculeAutosuggestFieldWithStateTags = withStateValueTags(
  MoleculeAutosuggestFieldWithDynamicOptions
)

const BASE_CLASS_DEMO = 'DemoMoleculeAutosuggestField'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeAutosuggestField</code>
    </h1>
    <h2>Single Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>With Placeholder</h3>
      <MoleculeAutosuggestFieldWithState
        id="with-placeholder"
        label="Country"
        placeholder="Select a Country..."
        onChange={(_, {value}) => console.log(value)}
        iconClear={<IconClose />}
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Information HelpText</h3>
      <MoleculeAutosuggestFieldWithState
        id="with-info-help-text"
        label="Country"
        placeholder="Select a Country..."
        onChange={(_, {value}) => console.log(value)}
        helpText="The country selected will be added to your profile"
        iconClear={<IconClose />}
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Success Validation HelpText</h3>
      <MoleculeAutosuggestFieldWithState
        id="with-success-validation-help-text"
        label="Country"
        placeholder="Select a Country..."
        onChange={(_, {value}) => console.log(value)}
        successText="Everything ok!"
        iconClear={<IconClose />}
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Error validation HelpText</h3>

      <MoleculeAutosuggestFieldWithState
        id="with-error-validation-help-text"
        label="Country"
        placeholder="Select a Country..."
        onChange={(_, {value}) => console.log(value)}
        errorText="All wrong!"
        iconClear={<IconClose />}
      />
    </div>

    <h2>Multiple Selection</h2>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Error validation HelpText</h3>

      <MoleculeAutosuggestFieldWithStateTags
        id="multiple-selection-with-error-validation-help-text"
        label="Country"
        placeholder="Select a Country..."
        errorText="All wrong!"
        iconClear={<IconClose />}
        iconCloseTag={<IconClose />}
        multiselection
        tags={['India', 'Luxembourg']}
        onChangeTags={(_, {tags}) => console.log(tags)}
      />
    </div>
  </div>
)

export default Demo
