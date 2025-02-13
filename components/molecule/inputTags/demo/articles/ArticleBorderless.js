import {useRef} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeInputTags from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleDefault = ({className}) => {
  const innerRef = useRef()
  const ref = useRef()
  return (
    <Article className={className}>
      <H2>isBorderless</H2>
      <Paragraph>
        The element can have no borders to be included into other complex components adding the boolean prop{' '}
        <Code>isBorderless</Code>.
      </Paragraph>
      <MoleculeInputTags
        ref={ref}
        name="ArticleDefault1"
        defaultTags={Data.beattles}
        defaultValue="George Martin"
        tagsCloseIcon={closeIcon}
        onChange={(event, {name, tags, value, ...other}) => {
          console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
        onChangeTags={(event, {tags, name, value, ...other}) => {
          console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
        innerRefInput={innerRef}
        isBorderless
      />
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'
ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
