/* eslint-disable no-console */
import {withStateValue} from '@s-ui/hoc'

import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelectField from '../src/index.js'
import {IconCloseTag, IconArrowDown} from './Icons/index.js'

import {countries} from './data/index.js'
import './index.scss'

const MoleculeSelectFieldWithState = withStateValue(MoleculeSelectField)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Select Field</h1>
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

      <div className={CLASS_DEMO_SECTION}>
        <h3>With Alert validation HelpText</h3>
        <MoleculeSelectFieldWithState
          id="with-alert-validation-help-text"
          label="Country"
          placeholder="Select a Country..."
          alertText="Ok, but something needs your attention..."
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
        <h3>With Alert validation HelpText</h3>
        <MoleculeSelectFieldWithState
          id="multiple-selection-with-alert-validation-help-text"
          label="Country"
          placeholder="Select some countries..."
          value={['India', 'Luxembourg']}
          onChange={(_, {value}) => console.log(value)}
          iconCloseTag={<IconCloseTag />}
          iconArrowDown={<IconArrowDown />}
          multiselection
          alertText="All wrong!"
        >
          {countries.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectFieldWithState>
      </div>
    </div>
  </div>
)

export default Demo
