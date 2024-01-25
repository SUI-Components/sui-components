import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import MoleculeDataCounter, {moleculeDataCounterSizes} from '../../src/index.js'
import {propsMessages} from '../settings.js'

const ArticleSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        The dataCounter size can be customized using <Code>size</Code> (enum) prop. The valid values are provided by{' '}
        <Code>moleculeDataCounterSizes</Code> enum. The default value is undefined, same as normal size.
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeDataCounterSizes).map(([key, value]) => (
          <ListItem key={key}>
            <Code>
              moleculeDataCounterSizes.{key}:'{value}'
            </Code>
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={4} gutter={[8, 8]}>
        {Object.entries({
          undefined,
          ...moleculeDataCounterSizes
        }).map(([key, value]) => (
          <Cell key={key}>
            <MoleculeDataCounter size={value} label={value ? `${key}: ${value}` : 'default'} {...propsMessages} />
          </Cell>
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
