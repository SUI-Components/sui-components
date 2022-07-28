import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeInputTags from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleMaxTagsAndAllowDuplicates = ({className}) => {
  return (
    <Article className={className}>
      <H2>MaxTags and AllowDuplicates</H2>
      <Paragraph>
        For indicating the max amount of tags contained in the component use the{' '}
        <Code>maxTags</Code> (number) prop. Default undefined (infinite)
      </Paragraph>
      <Paragraph>
        For indicating if a tag value can be repeated or not use the{' '}
        <Code>allowDuplicates</Code> (boolean) prop. Default true
      </Paragraph>
      <MoleculeInputTags
        name="ArticleMaxTagsAndAllowDuplicates1"
        defaultTags={Data.beattles}
        defaultValue="George Martin"
        tagsCloseIcon={closeIcon}
        maxTags={6}
        allowDuplicates={false}
        onEnterKey={['Tab', 'Enter', ',']}
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

ArticleMaxTagsAndAllowDuplicates.displayName =
  'ArticleMaxTagsAndAllowDuplicates'
ArticleMaxTagsAndAllowDuplicates.propTypes = {
  className: PropTypes.string
}

export default ArticleMaxTagsAndAllowDuplicates
