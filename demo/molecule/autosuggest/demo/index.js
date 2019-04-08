/* eslint-disable react/prop-types, no-unused-vars, no-console */
import React from 'react'

import {withStateValue, withStateValueTags} from '@s-ui/hoc'

import MoleculeAutosuggest, {
  MoleculeAutosuggestDropdownListSizes
} from '../../../../components/molecule/autosuggest/src'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import withDynamicOptions from './hoc/withDynamicOptions'

import AutosuggestSingleWithAsyncOptions from './components/AutosuggestSingleFromAjax'

import {IconClose} from './Icons'
import {getAsyncCountriesFromQuery} from './services'
import './index.scss'

const MoleculeAutosuggestWithDynamicOptions = withDynamicOptions(
  MoleculeAutosuggest,
  MoleculeAutosuggestOption
)(getAsyncCountriesFromQuery)

const MoleculeAutosuggestWithState = withStateValue(
  MoleculeAutosuggestWithDynamicOptions
)

const MoleculeAutosuggestWithStateTags = withStateValueTags(
  MoleculeAutosuggestWithDynamicOptions
)

const BASE_CLASS_DEMO = 'DemoMoleculeAutosuggest'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    {/*
      <AutosuggestSingleWithAsyncOptions iconClear={<IconClose />} />
    */}
    <h1>
      <code>MoleculeAutosuggest</code>
    </h1>
    <p>
      El componente <code>Autosuggest</code> solo se usará cuando se pueda
      escribir en el <code>input</code> (lo que generará una búsqueda en las
      opciones del <code>DropdownList</code>)
    </p>
    <p>
      En esta demo sólo se utiliza el tamaño por defecto del{' '}
      <code>DropdownList</code> y las opciones básicas del{' '}
      <code>DropdownOption</code>. Recuerda que en dichos componentes existen
      más posibilidades si son necesarias
    </p>
    <h2>Single Selection</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>with Placeholder</h3>
      <MoleculeAutosuggestWithState
        placeholder="Type a Country name..."
        onChange={(_, {value}) => console.log(value)}
        iconClear={<IconClose />}
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>with preselected Value</h3>
      <MoleculeAutosuggestWithState
        value="Luxembourg"
        onChange={(_, {value}) => console.log(value)}
        iconClear={<IconClose />}
      />
    </div>

    <h2>Multiple Selection</h2>
    <p>
      Este componente permite añadir nuevas opciones (como tags) aunque no esten
      disponibles entre las opciones disponibles del <code>DropdownList</code>
    </p>
    <div className={CLASS_DEMO_SECTION}>
      <h3>with Placeholder</h3>
      <MoleculeAutosuggestWithStateTags
        placeholder="Type a Country name..."
        onChangeTags={(_, {tags}) => console.log(tags)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        multiselection
      />
    </div>

    <div className={CLASS_DEMO_SECTION}>
      <h3>With preselected Value</h3>
      <MoleculeAutosuggestWithStateTags
        tags={['India', 'Luxembourg']}
        onChangeTags={(_, {tags}) => console.log(tags)}
        iconCloseTag={<IconClose />}
        iconClear={<IconClose />}
        multiselection
      />
    </div>
  </div>
)

export default Demo
