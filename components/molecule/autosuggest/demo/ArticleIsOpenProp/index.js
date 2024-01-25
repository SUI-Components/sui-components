/* eslint-disable no-console */

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import {MoleculeAutosuggestWithStateTagsLabels, options} from '../config.js'
import {iconClose} from '../Icons/index.js'

const ArticleIsOpenProp = () => {
  return (
    <Article>
      <H2>Autosuggest list is open</H2>
      <H3>With preselected Value</H3>
      <Paragraph>
        The <Code>isOpen</Code> property allows you to open the Suggestions List by default
      </Paragraph>
      <MoleculeAutosuggestWithStateTagsLabels
        iconClear={iconClose}
        iconCloseTag={iconClose}
        label="Etiquetas"
        isOpen
        multiselection
        onChange={() => console.log('onChange')}
        onChangeTags={(_, {tags, ...args}) => console.log('onChangeTags', {tags, ...args})}
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
    </Article>
  )
}

ArticleIsOpenProp.propTypes = {}

export default ArticleIsOpenProp
