/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState} from 'react'

import {MoleculeAutosuggestStates} from 'components/molecule/autosuggest/src/index.js'

import SuiButton from '@s-ui/react-atom-button'
import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import ComboCountries from './components/ComboCountries.js'
import {
  iconClose,
  iconSearch,
  iconAlert,
  iconInfo,
  iconError
} from './Icons/index.js'

import {
  CLASS_DEMO_SECTION,
  options,
  MoleculeAutosuggestWithState,
  MoleculeAutosuggestWithStateTags,
  MoleculeAutosuggestWithStateTagsLabels
} from './config.js'

import './index.scss'

const Demo = () => {
  const [tags, setTags] = useState([{key: 1, label: 'Label'}])
  const [value, setValue] = useState()
  const [singleValue, setSingleValue] = useState()
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
            leftIcon={iconSearch}
            placeholder="Type a Country name..."
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) => {
              console.log('onEnter', {value, ...args}, _.target)
            }}
            onClear={() => console.log('Clear pressed')}
            iconClear={iconClose}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with preselected Value</h3>
          <MoleculeAutosuggestWithState
            value="Luxembourg"
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            iconClear={iconClose}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>disabled</h3>
          <MoleculeAutosuggestWithState
            value="Luxembourg"
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            iconClear={iconClose}
            disabled
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>Whit autocomplete "off"</h3>
          <MoleculeAutosuggestWithState
            value="Luxembourg"
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            iconClear={iconClose}
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
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            state={MoleculeAutosuggestStates.SUCCESS}
            iconClear={iconClose}
            rightIcon={iconInfo}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with Error State</h3>
          <MoleculeAutosuggestWithState
            placeholder="Type a Country name..."
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            state={MoleculeAutosuggestStates.ERROR}
            iconClear={iconClose}
            rightIcon={iconError}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with Alert State</h3>
          <MoleculeAutosuggestWithState
            placeholder="Type a Country name..."
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            state={MoleculeAutosuggestStates.ALERT}
            onClear={() => console.log('Clear pressed')}
            iconClear={iconClose}
            rightIcon={iconAlert}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with submit button</h3>
          <MoleculeAutosuggestWithState
            placeholder="Type a Country name..."
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            rightButton={<SuiButton>Submit</SuiButton>}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>with Shape</h3>
          <MoleculeAutosuggestWithState
            leftIcon={iconSearch}
            placeholder="Type a Country name..."
            onChange={(_, {value, ...args}) => console.log({value, ...args})}
            onEnter={(_, {value, ...args} = {}) =>
              console.log('onEnter', {value, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            iconClear={iconClose}
            shape="circle"
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
            onChangeTags={(_, {tags, ...args}) =>
              console.log('onChangeTags', {tags, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            iconCloseTag={iconClose}
            iconClear={iconClose}
            multiselection
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>With preselected Value</h3>
          <MoleculeAutosuggestWithStateTags
            tags={['India', 'Luxembourg']}
            onChangeTags={(_, {tags, ...args}) =>
              console.log('onChangeTags', {tags, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            iconCloseTag={iconClose}
            iconClear={iconClose}
            multiselection
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h3>Disabled</h3>
          <MoleculeAutosuggestWithStateTags
            tags={['India', 'Luxembourg']}
            onChangeTags={(_, {tags, ...args}) =>
              console.log('onChangeTags', {tags, ...args})
            }
            onClear={() => console.log('Clear pressed')}
            iconCloseTag={iconClose}
            iconClear={iconClose}
            multiselection
            disabled
          />
        </div>

        <h2>Dependant Selection</h2>
        <div className={CLASS_DEMO_SECTION}>
          <h3>With Placeholder</h3>
          <ComboCountries />
        </div>

        <h2>Autosuggest list is open</h2>
        <div className={CLASS_DEMO_SECTION}>
          <h3>With preselected Value</h3>
          <MoleculeAutosuggestWithStateTagsLabels
            iconClear={iconClose}
            iconCloseTag={iconClose}
            label="Etiquetas"
            isOpen
            multiselection
            onChange={() => console.log('onChange')}
            onChangeTags={(_, {tags, ...args}) =>
              console.log('onChangeTags', {tags, ...args})
            }
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
            objetos. Para la comproación de los valores seleccionados en el
            dropdown utilizará una deep comparison. Al cambiar las etiquetas en
            onChangeTags devuelve un array de objetos. Si la etiqueta es nueva
            lo que vuelca en el array de tags seleccionados es un string.
          </p>

          <h3>Single selection</h3>
          <MoleculeAutosuggestField
            iconClear={iconClose}
            iconCloseTag={iconClose}
            label="Etiquetas"
            allowDuplicates={false}
            value={singleValue}
            onChange={(_, {value}) => {
              console.log('onChange', value)
              setSingleValue(value)
            }}
            onChangeTags={(_, {tags, ...args}) =>
              console.log('onChangeTags', {tags, ...args})
            }
            onClear={() => {
              console.log('Clear pressed')
              setSingleValue(undefined)
            }}
            onEnter={() => console.log('onEnter')}
            onSelect={(_, {value}) => {
              setSingleValue(value.label)
              console.log('onSelect', value)
            }}
            placeholder="Selecciona el value a asignar al campo"
          >
            {options.map(({key, label}, index) => (
              <MoleculeAutosuggestOption key={key} value={{key, label}}>
                {label}
              </MoleculeAutosuggestOption>
            ))}
          </MoleculeAutosuggestField>

          <h3>Multiselection</h3>
          <MoleculeAutosuggestField
            iconClear={iconClose}
            iconCloseTag={iconClose}
            label="Etiquetas"
            multiselection
            allowDuplicates={false}
            value={value}
            onChange={(_, {value}) => {
              console.log('onChange', value)
              setValue(value)
            }}
            onChangeTags={(_, {tags, ...args}) => {
              setTags(tags)
              setValue('')
              console.log('onChangeTags', {tags, ...args})
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
            {options.map(({key, label}) => (
              <MoleculeAutosuggestOption key={key} value={{key, label}}>
                {label}
              </MoleculeAutosuggestOption>
            ))}
          </MoleculeAutosuggestField>

          <div className={CLASS_DEMO_SECTION}>
            <h3>with autoFocus</h3>
            <MoleculeAutosuggestWithStateTags
              autoFocus
              placeholder="Type a Country name..."
              onChangeTags={(_, {tags, ...args}) =>
                console.log('onChangeTags', {tags, ...args})
              }
              onClear={() => console.log('Clear pressed')}
              iconCloseTag={iconClose}
              iconClear={iconClose}
              multiselection
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
