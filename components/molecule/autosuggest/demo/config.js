import {withStateValue, withStateValueTags} from '@s-ui/hoc'
import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeAutosuggest from '../src/index.js'
import withDynamicOptions from './hoc/withDynamicOptions.js'
import {getAsyncCountriesFromQuery} from './services/index.js'

export const BASE_CLASS_DEMO = 'DemoMoleculeAutosuggest'
export const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

export const options = [
  {key: 'C10', label: 'Reservado'},
  {key: 'C20', label: 'Llamar'},
  {key: 'C30', label: 'No se Rick'},
  {key: 'C40', label: 'Comisión'},
  {key: '100', label: 'Mola'}
]

export const MoleculeAutosuggestWithDynamicOptions = withDynamicOptions(
  MoleculeAutosuggest,
  MoleculeAutosuggestOption
)(getAsyncCountriesFromQuery)

export const MoleculeAutosuggestWithState = withStateValue(
  MoleculeAutosuggestWithDynamicOptions
)

export const MoleculeAutosuggestWithStateTags = withStateValueTags(
  MoleculeAutosuggestWithDynamicOptions
)

export const MoleculeAutosuggestWithStateTagsLabels = withStateValueTags(
  MoleculeAutosuggestField
)
