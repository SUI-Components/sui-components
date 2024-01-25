import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Button, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeBadgeCounter, {moleculeBadgeCounterSizes, moleculeBadgeCounterVariants} from '../src/index.js'

const ArticleVariant = ({className}) => {
  return (
    <Article className={className}>
      <H2>Variant</H2>
      <Paragraph>
        There are {Object.values(moleculeBadgeCounterVariants).length} possibles values under the <Code>variant</Code>{' '}
        (enum) prop.
      </Paragraph>
      <Grid cols={Object.values(moleculeBadgeCounterVariants).length + 1} gutter={[8, 8]}>
        {Object.values(moleculeBadgeCounterSizes).map(sizesValue => (
          <Fragment key={sizesValue}>
            {[undefined, ...Object.values(moleculeBadgeCounterVariants)].map(variantsValue => (
              <Cell key={`${sizesValue}-${variantsValue}`}>
                <MoleculeBadgeCounter variant={variantsValue} size={sizesValue}>
                  <Button>{`${sizesValue}-${variantsValue}`}</Button>
                </MoleculeBadgeCounter>
              </Cell>
            ))}
          </Fragment>
        ))}
      </Grid>
    </Article>
  )
}

ArticleVariant.propTypes = {
  className: PropTypes.string
}

export default ArticleVariant
