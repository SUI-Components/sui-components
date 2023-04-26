/* eslint-disable  no-console */
import {useState} from 'react'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'

import {
  MoleculeAutosuggestWithDynamicOptions,
  MoleculeAutosuggestWithStateTags
} from '../config.js'
import {iconClose} from '../Icons/index.js'

const IconArrowDown = () => (
  <svg>
    <defs>
      <path
        id="a"
        d="M14.5 18.5a1 1 0 0 1-.71-.29l-4.08-4.08a3 3 0 0 1 0-4.24l4.09-4.1a1 1 0 0 1 1.41 1.41l-4.09 4.1a1 1 0 0 0 0 1.41l4.08 4.08a1 1 0 0 1-.71 1.71h.01z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use
        fill="#666"
        fillRule="nonzero"
        transform="matrix(0 -1 -1 0 24.189 24.189)"
        xlinkHref="#a"
      />
    </g>
  </svg>
)

const ArticleMultipleSelection = () => {
  const [value, setValue] = useState('')
  const [tags, setTags] = useState([])
  return (
    <Article>
      <H2>Multiple Selection</H2>
      <Paragraph>
        This component allows you to add new options (such as tags) even if they
        are not available among the available options of{' '}
        <Code>DropdownList</Code>
      </Paragraph>
      <H3>with Placeholder</H3>
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
      <H3>With preselected Value</H3>
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
      <H3>Disabled</H3>
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
      <H3>Select Mode</H3>
      <MoleculeAutosuggestWithDynamicOptions
        tags={tags}
        onChangeTags={(ev, {tags, selected}) => {
          const {type} = ev
          if (type === 'click' && !selected) setTags(tags)
        }}
        onSelect={(_, {tags, selected, ...args}) => setTags(tags)}
        onClear={() => console.log('Clear pressed')}
        iconCloseTag={iconClose}
        selectMode
        onChange={(_ev, {value}) => setValue(value)}
        value={value}
        rightIcon={<IconArrowDown />}
        multiselection
      />
    </Article>
  )
}

ArticleMultipleSelection.propTypes = {}

export default ArticleMultipleSelection
