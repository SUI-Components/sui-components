/* eslint-disable no-console */
import React from 'react'

import {withStateValue} from '@s-ui/hoc'

import MoleculeSelect from '../../../../components/molecule/select/src'

import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import {IconCloseTag, IconArrowDown} from './Icons'

import {countries} from './data'
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
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectWithState>
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With preselected Value</h3>
      <MoleculeSelectWithState
        value="Luxembourg"
        onChange={(_, {value}) => console.log(value)}
        iconArrowDown={<IconArrowDown />}
      >
        {countries.map((country, i) => (
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
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
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
        {countries.map((country, i) => (
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
        {countries.map((country, i) => (
          <MoleculeSelectOption key={i} value={country}>
            {country}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectWithState>
    </div>
  </div>
)

export default Demo
