/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState} from 'react'
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
  {key: 'C10', label: 'Reservado'},
  {key: 'C20', label: 'Llamar'},
  {key: 'C30', label: 'No se Rick'},
  {key: 'C40', label: 'Comisión'},
  {key: '100', label: 'Mola'}
]

const Demo = () => {
  const [tags, setTags] = useState([{key: 1, label: 'Label'}])
  const [value, setValue] = useState('')
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Autosuggest</h1>
        <p>
          El componente <code>Autosuggest</code> solo se usará cuando se pueda
          escribir en el <code>input</code> (lo que generará una búsqueda en las
          opciones del <code>DropdownList</code>)
        </p>
        <p>
          En esta demo sólo se utiliza el tamaño por defecto del
          <code>DropdownList</code> y las opciones básicas del
          <code>DropdownOption</code>. Recuerda que en dichos componentes
          existen más posibilidades si son necesarias
        </p>
        <h2>Single Selection</h2>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with Placeholder</h3>
          <MoleculeAutosuggestWithState
            leftIcon={<IconSearch />}
            placeholder="Type a Country name..."
            onChange={(_, {value}) => console.log(value)}
            onEnter={() => console.log('Enter pressed')}
            onClear={() => console.log('Clear pressed')}
            iconClear={<IconClose />}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with preselected Value</h3>
          <MoleculeAutosuggestWithState
            value="Luxembourg"
            onChange={(_, {value}) => console.log(value)}
            onClear={() => console.log('Clear pressed')}
            iconClear={<IconClose />}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>disabled</h3>
          <MoleculeAutosuggestWithState
            value="Luxembourg"
            onChange={(_, {value}) => console.log(value)}
            onClear={() => console.log('Clear pressed')}
            iconClear={<IconClose />}
            disabled
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>Whit autocomplete "off"</h3>
          <MoleculeAutosuggestWithState
            value="Luxembourg"
            onChange={(_, {value}) => console.log(value)}
            onClear={() => console.log('Clear pressed')}
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
            onClear={() => console.log('Clear pressed')}
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
            onClear={() => console.log('Clear pressed')}
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
            onClear={() => console.log('Clear pressed')}
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
          esten disponibles entre las opciones disponibles del
          <code>DropdownList</code>
        </p>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with Placeholder</h3>
          <MoleculeAutosuggestWithStateTags
            placeholder="Type a Country name..."
            onChangeTags={(_, {tags}) => console.log(tags)}
            onClear={() => console.log('Clear pressed')}
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
            onClear={() => console.log('Clear pressed')}
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
            onClear={() => console.log('Clear pressed')}
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
        <div className={CLASS_DEMO_SECTION}>
          <h3>With preselected Value</h3>
          <MoleculeAutosuggestWithStateTagsLabels
            iconClear={<IconClose />}
            iconCloseTag={<IconClose />}
            label="Etiquetas"
            isOpen
            multiselection
            onChange={() => console.log('onChange')}
            onChangeTags={() => console.log('onChangeTags')}
            onClear={() => console.log('Clear pressed')}
            onEnter={() => console.log('onEnter')}
            onSelect={() => console.log('onSelect')}
            placeholder="Selecciona las etiquetas a asignar al contacto"
            tags={['Mola']}
          >
            {options.map(({key, label}) => (
              <MoleculeAutosuggestOption id={key} key={key} value={label}>
                {label}
              </MoleculeAutosuggestOption>
            ))}
          </MoleculeAutosuggestWithStateTagsLabels>
        </div>

        <h2>Autosuggest with array objects</h2>
        <div className={CLASS_DEMO_SECTION}>
          <p>
            Esta implementación permite usar el Autosuggest con un array de
            objetos JSON con las propiedades <code>key</code> y
            <code>label</code>. Al cambiar las etiquetas en onChangeTags
            devuelve un array de objetos. Si la etiqueta es nueva lo que vuelca
            en el array de tags seleccionados es un string.
          </p>
          <MoleculeAutosuggestField
            iconClear={<IconClose />}
            iconCloseTag={<IconClose />}
            label="Etiquetas"
            multiselection
            allowDuplicates={false}
            value={value}
            onChange={(_, {value}) => {
              console.log('onChange', value)
              setValue(value)
            }}
            onChangeTags={(_, {tags}) => {
              setTags(tags)
              setValue('')
              console.log('onChangeTags', tags)
            }}
            onClear={() => {
              console.log('Clear pressed')
              setTags([])
            }}
            onEnter={() => console.log('onEnter')}
            onSelect={(_, {tags}) => {
              console.log('onSelect', tags)
            }}
            placeholder="Selecciona las etiquetas a asignar al contacto"
            tags={tags}
          >
            {options.map(({key, label}, index) => (
              <MoleculeAutosuggestOption key={key} value={{key, label}}>
                {label}
              </MoleculeAutosuggestOption>
            ))}
          </MoleculeAutosuggestField>
        </div>
      </div>
    </div>
  )
}

export default Demo
