/* eslint-disable no-console */
import {useState} from 'react'

import MoleculeSelect, {moleculeSelectSizes, moleculeSelectStates} from 'components/molecule/select/src/index.js'

import {withStateValue} from '@s-ui/hoc'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import ComboCountries from './components/ComboCountries.js'
import MoleculeSelectUseEffect from './components/MoleculeSelectUseEffect.js'
import countriesData from './data/countries.json'
import {countries as countriesList} from './data/index.js'
import {IconArrowDown, IconClock, IconCloseTag, IconSearch} from './Icons/index.js'

import './index.scss'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  const [query, setQuery] = useState('')
  const [querySingle, setQuerySingle] = useState('')
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Select</h1>
        <p>
          The component <code>select</code> should only be used to select a closed list. If you need to display an open
          list use
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
          This demo is only displaying the default <code>DropDownList</code> and <code>DropdownOption</code>. There are
          many other options to customize them if it's necessary.
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
          <h3>With Search</h3>
          <MoleculeSelectWithState
            placeholder="Select a Country..."
            hasSearch
            onSearch={({value}) => setQuerySingle(value)}
            searchPlaceholder="Search a country..."
            searchIcon={<IconSearch />}
            noResults={<div className="DemoMoleculeSelect-noResults">No results found...</div>}
            onChange={(_, {value}) => console.log(value)}
            iconArrowDown={<IconArrowDown />}
          >
            {countriesList
              .filter(country => country.includes(querySingle))
              .map((country, i) => (
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
          <MoleculeSelectWithState
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
          </MoleculeSelectWithState>
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>With state</h3>
          <p>
            State to highlight that can be <code>success</code>, <code>error</code> or <code>alert</code>
          </p>
          <MoleculeSelectWithState
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
          </MoleculeSelectWithState>
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
          <h3>With Search</h3>
          <MoleculeSelectWithState
            placeholder="Select some countries..."
            onChange={(_, {value}) => console.log(value)}
            iconCloseTag={<IconCloseTag />}
            iconArrowDown={<IconArrowDown />}
            searchIcon={<IconSearch />}
            hasSearch
            responsive={false}
            onSearch={({value}) => setQuery(value)}
            searchPlaceholder="Search a country..."
            noResults={<div className="DemoMoleculeSelect-noResults">No results found...</div>}
            multiselection
          >
            {countriesList
              .filter(country => country.includes(query))
              .map((country, i) => (
                <MoleculeSelectOption key={i} value={country}>
                  {country}
                </MoleculeSelectOption>
              ))}
          </MoleculeSelectWithState>
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>With Search multiple selection disabled</h3>
          <MoleculeSelectWithState
            placeholder="Select a Country..."
            hasSearch
            onSearch={({value}) => setQuerySingle(value)}
            searchPlaceholder="Search a country..."
            searchIcon={<IconSearch />}
            noResults={<div className="DemoMoleculeSelect-noResults">No results found...</div>}
            onChange={(_, {value}) => console.log(value)}
            iconArrowDown={<IconArrowDown />}
            multiselection
            disabled
          >
            {countriesList
              .filter(country => country.includes(querySingle))
              .map((country, i) => (
                <MoleculeSelectOption key={i} value={country}>
                  {country}
                </MoleculeSelectOption>
              ))}
          </MoleculeSelectWithState>
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>With onToggle callback</h3>
          <MoleculeSelectWithState
            placeholder="Select some countries..."
            onChange={(_, {value}) => console.log(value)}
            onToggle={(_, {isOpen}) => console.log(isOpen)}
            iconCloseTag={<IconCloseTag />}
            iconArrowDown={<IconArrowDown />}
            searchIcon={<IconSearch />}
            hasSearch
            onSearch={({value}) => setQuery(value)}
            searchPlaceholder="Search a country..."
            noResults={<div className="DemoMoleculeSelect-noResults">No results found...</div>}
            multiselection
          >
            {countriesList
              .filter(country => country.includes(query))
              .map((country, i) => (
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
}

export default Demo
