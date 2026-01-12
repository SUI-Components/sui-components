/* eslint-disable  no-console */
import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'

import {MoleculeAutosuggestWithStateTags} from '../config.js'
import {iconClose, iconSearch} from '../Icons/index.js'

const ArticleMultipleSelection = () => {
  return (
    <Article>
      <H2>Multiple Selection</H2>
      <Paragraph>
        This component allows you to add new options (such as tags) even if they are not available among the available
        options of <Code>DropdownList</Code>
      </Paragraph>
      <H3>with Placeholder</H3>
      <MoleculeAutosuggestWithStateTags
        placeholder="Type a Country name..."
        onChangeTags={(_, {tags, ...args}) => console.log('onChangeTags', {tags, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconCloseTag={iconClose}
        iconClear={iconClose}
        multiselection
      />
      <H3>With preselected Value</H3>
      <MoleculeAutosuggestWithStateTags
        tags={['India', 'Luxembourg']}
        onChangeTags={(_, {tags, ...args}) => console.log('onChangeTags', {tags, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconCloseTag={iconClose}
        iconClear={iconClose}
        multiselection
      />
      <H3>Disabled</H3>
      <MoleculeAutosuggestWithStateTags
        tags={['India', 'Luxembourg']}
        onChangeTags={(_, {tags, ...args}) => console.log('onChangeTags', {tags, ...args})}
        onClear={() => console.log('Clear pressed')}
        iconCloseTag={iconClose}
        iconClear={iconClose}
        multiselection
        disabled
      />
      <H3>With Right Icon and onClick handler</H3>
      <MoleculeAutosuggestWithStateTags
        placeholder="Type a Country name..."
        onChangeTags={(_, {tags, ...args}) => console.log('onChangeTags', {tags, ...args})}
        iconCloseTag={iconClose}
        rightIcon={iconSearch}
        onClickRightIcon={(ev, args) => {
          console.log('Right icon clicked!', args)
        }}
        multiselection
      />
    </Article>
  )
}

ArticleMultipleSelection.propTypes = {}

export default ArticleMultipleSelection
