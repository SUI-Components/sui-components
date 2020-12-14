/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {withStateValue, withStateValueTags} from '@s-ui/hoc'

import MoleculeAutosuggest, {
  MoleculeAutosuggestStates
} from '../../../../components/molecule/autosuggest/src'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import SuiButton from '@s-ui/react-atom-button'

import withDynamicOptions from './hoc/withDynamicOptions'

import ComboCountries from './components/ComboCountries'

import {IconClose, IconSearch} from './Icons'
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

const MoleculeAutosuggestWithStateTagsLabels = withStateValueTags(
  MoleculeAutosuggestField
)

const BASE_CLASS_DEMO = 'DemoMoleculeAutosuggest'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const options = [
  {id: 'C10', name: 'Reservado'},
  {id: 'C20', name: 'Llamar'},
  {id: 'C30', name: 'No se Rick'},
  {id: 'C40', name: 'Comisión'},
  {id: '100', name: 'Mola'}
]

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Autosuggest</h1>
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
          leftIcon={<IconSearch />}
          placeholder="Type a Country name..."
          onChange={(_, {value}) => console.log(value)}
          onEnter={() => console.log('Enter pressed')}
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

      <div className={CLASS_DEMO_SECTION}>
        <h3>disabled</h3>
        <MoleculeAutosuggestWithState
          value="Luxembourg"
          onChange={(_, {value}) => console.log(value)}
          iconClear={<IconClose />}
          disabled
        />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>Whit autocomplete "off"</h3>
        <MoleculeAutosuggestWithState
          value="Luxembourg"
          onChange={(_, {value}) => console.log(value)}
          iconClear={<IconClose />}
          autoComplete="off"
        />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>With no clear icon</h3>
        <MoleculeAutosuggestWithState
          value="Luxembourg"
          onChange={(_, {value}) => console.log(value)}
        />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>with Success State</h3>
        <MoleculeAutosuggestWithState
          placeholder="Type a Country name..."
          onChange={(_, {value}) => console.log(value)}
          onEnter={() => console.log('Enter pressed')}
          state={MoleculeAutosuggestStates.SUCCESS}
          iconClear={<IconClose />}
        />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>with Error State</h3>
        <MoleculeAutosuggestWithState
          placeholder="Type a Country name..."
          onChange={(_, {value}) => console.log(value)}
          onEnter={() => console.log('Enter pressed')}
          state={MoleculeAutosuggestStates.ERROR}
          iconClear={<IconClose />}
        />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>with Alert State</h3>
        <MoleculeAutosuggestWithState
          placeholder="Type a Country name..."
          onChange={(_, {value}) => console.log(value)}
          onEnter={() => console.log('Enter pressed')}
          state={MoleculeAutosuggestStates.ALERT}
          iconClear={<IconClose />}
        />
      </div>

      <div className={CLASS_DEMO_SECTION}>
        <h3>with submit button</h3>
        <MoleculeAutosuggestWithState
          placeholder="Type a Country name..."
          onChange={(_, {value}) => console.log(value)}
          onEnter={() => console.log('Enter pressed')}
          rightButton={<SuiButton>Submit</SuiButton>}
        />
      </div>

      <h2>Multiple Selection</h2>
      <p>
        Este componente permite añadir nuevas opciones (como tags) aunque no
        esten disponibles entre las opciones disponibles del{' '}
        <code>DropdownList</code>
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

      <div className={CLASS_DEMO_SECTION}>
        <h3>Disabled</h3>
        <MoleculeAutosuggestWithStateTags
          tags={['India', 'Luxembourg']}
          onChangeTags={(_, {tags}) => console.log(tags)}
          iconCloseTag={<IconClose />}
          iconClear={<IconClose />}
          multiselection
          disabled
        />
      </div>

      <h2>Dependant Selection</h2>
      <div className={CLASS_DEMO_SECTION}>
        <h3>With Placeholder</h3>
        <ComboCountries />
      </div>

      <h2>Autosugegst list is open</h2>
      <div className={CLASS_DEMO_SECTION} style={{paddingBottom: '200px'}}>
        <h3>With preselected Value</h3>
        <MoleculeAutosuggestWithStateTagsLabels
          autoClose={false}
          iconClear={<IconClose />}
          isOpen
          label="Etiquetas"
          multiselection
          onChange={() => console.log('onChange')}
          onChangeTags={() => console.log('onChangeTags')}
          onEnter={() => console.log('onEnter')}
          onSelect={() => console.log('onSelect')}
          placeholder="Selecciona las etiquetas a asignar al contacto"
          tags={['Mola']}
        >
          {options.map(({id, name}) => (
            <MoleculeAutosuggestOption id={id} key={id} value={name}>
              {name}
            </MoleculeAutosuggestOption>
          ))}
        </MoleculeAutosuggestWithStateTagsLabels>
      </div>
    </div>
  </div>
)

export default Demo
