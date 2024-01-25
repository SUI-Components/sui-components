import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import MoleculeInputTags, {moleculeInputTagsSizes} from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleTagsSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Tag's Sizes</H2>
      <Paragraph>
        Use the prop <Code>tagSize</Code> (enum) to define the tags' size. The values are under the{' '}
        <Code>moleculeInputTagsSizes</Code> exported enum
      </Paragraph>
      <Grid cols={6} gutter={[8, 8]}>
        {Object.values(moleculeInputTagsSizes).map(moleculeInputTagsSize => (
          <Fragment key={moleculeInputTagsSize}>
            <Cell>
              <Label>{moleculeInputTagsSize}</Label>
            </Cell>
            <Cell span={5}>
              <MoleculeInputTags
                defaultTags={Data.beattles}
                defaultValue="George Martin"
                name={`ArticleTagsSize-${moleculeInputTagsSize}`}
                tagSize={moleculeInputTagsSize}
                tagsCloseIcon={closeIcon}
                onChange={(event, {name, tags, value, ...other}) => {
                  console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
                }}
                onChangeTags={(event, {tags, name, value, ...other}) => {
                  console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
                }}
              />
            </Cell>
          </Fragment>
        ))}
      </Grid>
    </Article>
  )
}

ArticleTagsSize.displayName = 'ArticleTagsSize'
ArticleTagsSize.propTypes = {
  className: PropTypes.string
}

export default ArticleTagsSize
