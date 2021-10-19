/* eslint-disable no-console */
import {withStateValue} from '@s-ui/hoc'

import MoleculeSelect, {
  moleculeSelectSizes,
  moleculeSelectStates
} from 'components/molecule/select/src'

import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {IconCloseTag, IconArrowDown, IconClock} from './Icons'

import ComboCountries from './components/ComboCountries'
import MoleculeSelectUseEffect from './components/MoleculeSelectUseEffect'

import {countries as countriesList} from './data'
import countriesData from './data/countries.json'
import './index.scss'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Select</h1>
      <p>
        The component <code>select</code> should only be used to select a closed
        list. If you need to display an open list use
        <code>
          <a
            href="https://sui-components.vercel.app/workbench/molecule/autosuggest/demo"
            target="_blank"
            rel="noreferrer"
          >
            Autosuggest
          </a>
        </code>
        instead
      </p>
      <p>
        This demo is only displaying the default <code>DropDownList</code> and{' '}
        <code>DropdownOption</code>. There are many other options to customize{' '}
        them if it's necessary.
      </p>

      <h2>Single Selection</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>With Placeholder</h3>
        <MoleculeSelectWithState
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          iconArrowDown={<IconArrowDown />}
        >
          {countriesList.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With leftIcon</h3>
        <MoleculeSelectWithState
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          leftIcon={<IconClock />}
          iconArrowDown={<IconArrowDown />}
        >
          {countriesList.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With useEffect and preselected Value</h3>
        <MoleculeSelectUseEffect value="EFTA" />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With preselected Value</h3>
        <MoleculeSelectWithState
          value="Luxembourg"
          onChange={(_, {value}) => console.log(value)}
          iconArrowDown={<IconArrowDown />}
        >
          {countriesList.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With disabled state</h3>
        <MoleculeSelectWithState
          disabled
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          iconArrowDown={<IconArrowDown />}
        >
          {countriesList.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With different value and displayed text</h3>
        <MoleculeSelectWithState
          placeholder="Select some countries..."
          onChange={(_, {value}) => console.log(value)}
          iconCloseTag={<IconCloseTag />}
          iconArrowDown={<IconArrowDown />}
        >
          {countriesData.map(({name, code}, i) => (
            <MoleculeSelectOption key={i} value={code}>
              {name}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>Small size</h3>
        <MoleculeSelect
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          iconArrowDown={<IconArrowDown />}
          selectSize={moleculeSelectSizes.SMALL}
        >
          {countriesData.map(({name, code}, i) => (
            <MoleculeSelectOption key={i} value={code}>
              {name}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With state</h3>
        <p>
          State to highlight that can be <code>success</code>,{' '}
          <code>error</code> or <code>alert</code>
        </p>
        <MoleculeSelect
          placeholder="Select a Country..."
          onChange={(_, {value}) => console.log(value)}
          iconArrowDown={<IconArrowDown />}
          state={moleculeSelectStates.ALERT}
        >
          {countriesData.map(({name, code}, i) => (
            <MoleculeSelectOption key={i} value={code}>
              {name}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
      </div>

      <h2>Multiple Selection</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>With Placeholder</h3>
        <MoleculeSelectWithState
          placeholder="Select some countries..."
          onChange={(_, {value}) => console.log(value)}
          iconCloseTag={<IconCloseTag />}
          iconArrowDown={<IconArrowDown />}
          multiselection
        >
          {countriesList.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With preselected Value</h3>
        <MoleculeSelectWithState
          placeholder="Select some countries..."
          value={['India', 'Luxembourg']}
          onChange={(_, {value}) => console.log(value)}
          iconCloseTag={<IconCloseTag />}
          iconArrowDown={<IconArrowDown />}
          multiselection
        >
          {countriesList.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With different value and displayed text</h3>
        <MoleculeSelectWithState
          placeholder="Select some countries..."
          onChange={(_, {value}) => console.log(value)}
          iconCloseTag={<IconCloseTag />}
          iconArrowDown={<IconArrowDown />}
          multiselection
        >
          {countriesData.map(({name, code}, i) => (
            <MoleculeSelectOption key={i} value={code}>
              {name}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With selected items limit</h3>
        <MoleculeSelectWithState
          placeholder="Select some countries..."
          value={['India', 'Luxembourg']}
          onChange={(_, {value}) => console.log(value)}
          iconCloseTag={<IconCloseTag />}
          iconArrowDown={<IconArrowDown />}
          multiselection
          maxTags={2}
        >
          {countriesList.map((country, i) => (
            <MoleculeSelectOption key={i} value={country}>
              {country}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>

      <h2>Dependant Selection</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>With Placeholder</h3>
        <ComboCountries />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>Small size</h3>
        <MoleculeSelectWithState
          placeholder="Select some countries..."
          onChange={(_, {value}) => console.log(value)}
          iconCloseTag={<IconCloseTag />}
          iconArrowDown={<IconArrowDown />}
          multiselection
          selectSize={moleculeSelectSizes.SMALL}
        >
          {countriesData.map(({name, code}, i) => (
            <MoleculeSelectOption key={i} value={code}>
              {name}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelectWithState>
      </div>
    </div>
  </div>
)

export default Demo
