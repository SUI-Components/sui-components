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

import AtomInput, {inputSizes} from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleSize = ({className}) => (
  <Article className={className}>
    <H2>Size</H2>
    <Paragraph>
      The element gets {Object.values(inputSizes).length} different size
      configurations using its <Code>size</Code> prop.
    </Paragraph>
    <Grid gutter={[8, 8]} cols={Object.values(inputSizes).length + 1}>
      {[['default', undefined], ...Object.entries(inputSizes)].map(
        ([key], index) => (
          <Cell
            style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
            key={index}
          >
            <Label>{key}</Label>
          </Cell>
        )
      )}
      {[['default', undefined], ...Object.entries(inputSizes)].map(
        ([key, value], index) => (
          <Cell style={flexCenteredStyle} key={index}>
            <AtomInput size={value} />
          </Cell>
        )
      )}
    </Grid>
  </Article>
)

ArticleSize.propTypes = {
  className: PropTypes.string
}

ArticleSize.displayName = 'ArticleSize'

export default ArticleSize
