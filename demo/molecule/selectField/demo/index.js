/* eslint-disable no-console */
import React from 'react'

import {withStateValue} from '@s-ui/hoc'

import MoleculeSelectField from '../../../../components/molecule/selectField/src'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {IconCloseTag, IconArrowDown} from './Icons'

import {countries} from './data'
import './index.scss'

const MoleculeSelectFieldWithState = withStateValue(MoleculeSelectField)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeSelectField</code>
    </h1>
    <h2>Single Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>With Placeholder</h3>
      <MoleculeSelectFieldWithState
        id="with-placeholder"
        label="Country"
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
      </MoleculeSelectFieldWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Information HelpText</h3>
      <MoleculeSelectFieldWithState
        id="with-information-help-text"
        label="Country"
        placeholder="Select a Country..."
        helpText="The country selected will be added to your profile"
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectFieldWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Success Validation HelpText</h3>
      <MoleculeSelectFieldWithState
        id="with-success-validation-help-text"
        label="Country"
        placeholder="Select a Country..."
        successText="Everything ok!"
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectFieldWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Error validation HelpText</h3>
      <MoleculeSelectFieldWithState
        id="with-error-validation-help-text"
        label="Country"
        placeholder="Select a Country..."
        errorText="All wrong!"
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectFieldWithState>
    </div>

    <h2>Multiple Selection</h2>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With Error validation HelpText</h3>
      <MoleculeSelectFieldWithState
        id="multiple-selection-with-error-validation-help-text"
        label="Country"
        placeholder="Select some countries..."
        value={['India', 'Luxembourg']}
        onChange={(_, {value}) => console.log(value)}
        iconCloseTag={<IconCloseTag />}
        iconArrowDown={<IconArrowDown />}
        multiselection
        errorText="All wrong!"
      >
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectFieldWithState>
    </div>
  </div>
)

export default Demo
