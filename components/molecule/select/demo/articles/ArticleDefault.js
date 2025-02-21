import PropTypes from 'prop-types'

import {Article, H2, H3, Paragraph} from '@s-ui/documentation-library'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import MoleculeSelect from '../../src/index.js'
import {getFullNames} from '../data/fullNames.js'
import {IconArrowDown} from '../Icons/index.js'

const names = getFullNames(12)

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>By default, the element gets the following look and feel.</Paragraph>
      <H3 id="single-select">Single selection</H3>
      <MoleculeSelect iconArrowDown={<IconArrowDown />} placeholder="Select a person...">
        {names.map(({name, code}) => (
          <MoleculeSelectOption key={code} value={name}>
            {name}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
      <H3 id="multiple-select">Multiple selection</H3>
      <MoleculeSelect multiselection iconArrowDown={<IconArrowDown />} placeholder="Select a person...">
        {names.map(({name, code}) => (
          <MoleculeSelectOption key={code} value={name}>
            {name}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
