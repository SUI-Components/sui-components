/* eslint-disable no-console */
import React from 'react'

import {withStateValue} from '@s-ui/hoc'

import MoleculeSelect, {
  moleculeSelectSizes
} from '../../../../components/molecule/select/src'

import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {IconCloseTag, IconArrowDown} from './Icons'

import ComboCountries from './components/ComboCountries'
import MoleculeSelectUseEffect from './components/MoleculeSelectUseEffect'

import {countries as countriesList} from './data'
import countriesData from './data/countries.json'
import './index.scss'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeSelect</code>
    </h1>
    <p>
      El componente <code>select</code> sólo se usará para seleccionar opciones
      de un listado cerrado. Utiliza <code>Autosuggest</code> si necesitas
      añadir opciones fuera del listado cerrado
    </p>
    <p>
      En esta demo sólo se utiliza el tamaño por defecto del{' '}
      <code>DropdownList</code> y las opciones básicas de{' '}
      <code>DropdownOption</code>. Recuerda que en dichos componentes existen
      más posibilidades si son necesarias
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
        State to highlight that can be <code>success</code>, <code>error</code>{' '}
        or <code>alert</code>
      </p>
      <MoleculeSelect
        placeholder="Select a Country..."
        onChange={(_, {value}) => console.log(value)}
        iconArrowDown={<IconArrowDown />}
        state="alert"
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
)

export default Demo
