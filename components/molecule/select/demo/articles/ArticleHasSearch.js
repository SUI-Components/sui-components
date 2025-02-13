import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelect from '../../src/index.js'
import {getFullNames} from '../data/fullNames.js'
import {IconArrowDown} from '../Icons/index.js'

const names = getFullNames(12)

const ArticleHasSearch = ({className}) => {
  const [searchSingleQuery, setSearchSingleQuery] = useState('')
  const [searchMultipleQuery, setSearchMultipleQuery] = useState('')
  return (
    <Article className={className}>
      <H2>hasSearch</H2>
      <Paragraph>
        The select includes an optional search filter by adding <Code>hasSearch</Code> boolean flag.
      </Paragraph>
      <H3 id="single-select">Single selection</H3>
      <MoleculeSelect
        hasSearch
        iconArrowDown={<IconArrowDown />}
        placeholder="Select a person..."
        onSearch={({value}) => setSearchSingleQuery(value)}
        onToggle={() => setSearchMultipleQuery('')}
      >
        {names
          .filter(({name, code}) => name.includes(searchSingleQuery))
          .map(({name, code}) => (
            <MoleculeSelectOption key={code} value={name}>
              {name}
            </MoleculeSelectOption>
          ))}
      </MoleculeSelect>
      <H3 id="multiple-select">Multiple selection</H3>
      <MoleculeSelect
        hasSearch
        multiselection
        iconArrowDown={<IconArrowDown />}
        placeholder="Select a person..."
        onSearch={({value}) => setSearchMultipleQuery(value)}
      >
        {names
          .filter(({name, code}) => name.includes(searchMultipleQuery))
          .map(({name, code}) => (
            <MoleculeSelectOption key={code} value={name}>
              {name}
            </MoleculeSelectOption>
          ))}
      </MoleculeSelect>
    </Article>
  )
}

ArticleHasSearch.displayName = 'ArticleHasSearch'

ArticleHasSearch.propTypes = {
  className: PropTypes.string
}

export default ArticleHasSearch
