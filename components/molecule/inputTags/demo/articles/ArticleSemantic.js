import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import MoleculeInputTags from '../../src/index.js'
import Data from '../Data.js'
import {closeIcon} from '../settings.js'

const ArticleSemantic = ({className}) => {
  return (
    <Article className={className}>
      <H2>Semantic</H2>
      <Paragraph>
        The element can determine its status using the <Code>errorState</Code>{' '}
        (boolean) prop. Default undefined
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        {[undefined, true, false].map(value => (
          <Fragment key={`${value}`}>
            <Cell>
              <Code>
                <Label>{`${value}`}</Label>
              </Code>
            </Cell>
            <Cell>
              <MoleculeInputTags
                errorState={value}
                name="ArticleSemantic1"
                defaultTags={Data.beattles}
                defaultValue="George Martin"
                tagsCloseIcon={closeIcon}
                onChange={(event, {name, tags, value, ...other}) => {
                  console.log('onChange', {value, name, tags, ...other}) // eslint-disable-line no-console
                }}
                onChangeTags={(event, {tags, name, value, ...other}) => {
                  console.log('onChangeTags', {value, name, tags, ...other}) // eslint-disable-line no-console
                }}
              />
            </Cell>
          </Fragment>
        ))}
      </Grid>
    </Article>
  )
}

ArticleSemantic.displayName = 'ArticleSemantic'
ArticleSemantic.propTypes = {
  className: PropTypes.string
}

export default ArticleSemantic
