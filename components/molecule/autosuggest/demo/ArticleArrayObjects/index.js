/* eslint-disable no-console */
import {useState} from 'react'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'
import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import {MoleculeAutosuggestWithStateTags, options} from '../config.js'
import {iconClose} from '../Icons/index.js'

const ArticleArrayObjects = () => {
  const [tags, setTags] = useState([{key: 1, label: 'Label'}])
  const [value, setValue] = useState()
  const [singleValue, setSingleValue] = useState()

  return (
    <Article>
      <H2>Autosuggest with array objects</H2>
      <Paragraph>
        This implementation allows you to use <Code>Autosuggest</Code> with an array of objects. To check the selected
        values in the dropdown, it will use a deep comparison. Changing the tags in <Code>onChangeTags</Code> method
        returns an array of objects. If the tag is new, you will see a string inside the array of objects.
      </Paragraph>
      <H3>Single selection</H3>
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
        onChangeTags={(_, {tags, ...args}) => console.log('onChangeTags', {tags, ...args})}
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
      <H3>Multiselection</H3>
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
      <H3>with autoFocus</H3>
      <MoleculeAutosuggestWithStateTags
        autoFocus
        placeholder="Type a Country name..."
        onChangeTags={(_, {tags, ...args}) => console.log('onChangeTags', {tags, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconCloseTag={iconClose}
        iconClear={iconClose}
        multiselection
      />
    </Article>
  )
}

ArticleArrayObjects.propTypes = {}

export default ArticleArrayObjects
