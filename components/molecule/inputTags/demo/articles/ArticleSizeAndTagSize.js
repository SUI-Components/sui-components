import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import MoleculeInputTags, {moleculeInputTagsInputSizes, moleculeInputTagsSizes} from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleSizeAndTagSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Input and Tag Sizes</H2>
      <Paragraph>
        Use the prop <Code>size</Code> (enum) to define the input's size. The values are under the{' '}
        <Code>moleculeInputTagsInputSizes</Code> exported enum
      </Paragraph>
      <Paragraph>
        Use the prop <Code>tagSize</Code> (enum) to define the tags' size. The values are under the{' '}
        <Code>moleculeInputTagsSizes</Code> exported enum
      </Paragraph>
      <Grid cols={6} gutter={[8, 8]}>
        {Object.entries(moleculeInputTagsInputSizes).map(
          ([moleculeInputTagsInputName, moleculeInputTagsInputSizeValue]) => (
            <Fragment key={moleculeInputTagsInputSizeValue}>
              <Cell>
                <Label>{moleculeInputTagsInputSizeValue}</Label>
              </Cell>
              <Cell span={5}>
                <MoleculeInputTags
                  defaultTags={Data.beattles}
                  defaultValue="George Martin"
                  name={`ArticleSize-${moleculeInputTagsInputSizeValue}`}
                  size={moleculeInputTagsInputSizeValue}
                  tagSize={moleculeInputTagsSizes[moleculeInputTagsInputName]}
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
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleSizeAndTagSize.displayName = 'ArticleSizeAndTagSize'
ArticleSizeAndTagSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSizeAndTagSize
