/* eslint-disable no-console */
import MoleculeAutosuggestField from 'components/molecule/autosuggestField/src/index.js'

import {withStateValue, withStateValueTags} from '@s-ui/hoc'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import withDynamicOptions from './hoc/withDynamicOptions.js'
import {IconClose} from './Icons/index.js'
import {getAsyncCountriesFromQuery} from './services/index.js'

import './index.scss'

const MoleculeAutosuggestFieldWithDynamicOptions = withDynamicOptions(
  MoleculeAutosuggestField,
  MoleculeAutosuggestOption
)(getAsyncCountriesFromQuery)

const MoleculeAutosuggestFieldWithState = withStateValue(MoleculeAutosuggestFieldWithDynamicOptions)

const MoleculeAutosuggestFieldWithStateTags = withStateValueTags(MoleculeAutosuggestFieldWithDynamicOptions)

const BASE_CLASS_DEMO = 'DemoMoleculeAutosuggestField'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Autosuggest field</h1>
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

      <div className={CLASS_DEMO_SECTION}>
        <h3>With Alert validation HelpText</h3>

        <MoleculeAutosuggestFieldWithState
          id="with-alert-validation-help-text"
          label="Country"
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          alertText="Something meh..."
          iconClear={<IconClose />}
        />
      </div>

      <div className={CLASS_DEMO_SECTION} style={{background: '#2b91c1'}}>
        <h3>With contrast label</h3>
        <MoleculeAutosuggestField
          id="with-contrast-label"
          label="Country"
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          iconClear={<IconClose />}
          useContrastLabel
        />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>Without label</h3>
        <MoleculeAutosuggestField
          id="without-label"
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          iconClear={<IconClose />}
          useContrastLabel
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
  </div>
)

export default Demo
