import PropTypes from 'prop-types'

import {Article, H2, H3, Paragraph} from '@s-ui/documentation-library'

import MoleculeInputTags from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleDisableReadOnly = ({className}) => {
  return (
    <Article className={className}>
      <H2>ReadOnly and Disabled</H2>
      <Paragraph></Paragraph>
      <H3>ReadOnly</H3>
      <MoleculeInputTags
        readOnly
        name="ArticleDisableReadOnly1"
        defaultTags={Data.beattles}
        defaultValue={'George Martin'}
        tagsCloseIcon={closeIcon}
        onChange={(event, {name, tags, value, ...other}) => {
          console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
        onChangeTags={(event, {tags, name, value, ...other}) => {
          console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
      />
      <H3>Disabled</H3>
      <MoleculeInputTags
        disabled
        name="ArticleDisableReadOnly2"
        defaultTags={Data.beattles}
        defaultValue={'George Martin'}
        tagsCloseIcon={closeIcon}
        onChange={(event, {name, tags, value, ...other}) => {
          console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
        onChangeTags={(event, {tags, name, value, ...other}) => {
          console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
        }}
      />
    </Article>
  )
}

ArticleDisableReadOnly.displayName = 'ArticleDisableReadOnly'
ArticleDisableReadOnly.propTypes = {
  className: PropTypes.string
}

export default ArticleDisableReadOnly
