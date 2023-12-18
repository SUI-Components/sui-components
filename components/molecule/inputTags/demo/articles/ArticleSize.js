import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import MoleculeInputTags, {moleculeInputTagsInputSizes} from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Input's Sizes</H2>
      <Paragraph>
        Use the prop <Code>size</Code> (enum) to define the input's size. The values are under the{' '}
        <Code>moleculeInputTagsInputSizes</Code> exported enum
      </Paragraph>
      <Grid cols={6} gutter={[8, 8]}>
        {Object.values(moleculeInputTagsInputSizes).map(moleculeInputTagsInputSize => (
          <Fragment key={moleculeInputTagsInputSize}>
            <Cell>
              <Label>{moleculeInputTagsInputSize}</Label>
            </Cell>
            <Cell span={5}>
              <MoleculeInputTags
                defaultTags={Data.beattles}
                defaultValue="George Martin"
                name={`ArticleSize-${moleculeInputTagsInputSize}`}
                size={moleculeInputTagsInputSize}
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

ArticleSize.displayName = 'ArticleSize'
ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
