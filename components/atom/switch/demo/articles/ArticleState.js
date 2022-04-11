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

import AtomSwitch from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleState = ({className}) => (
  <Article className={className}>
    <H2>State</H2>
    <Paragraph>
      We can distinguish between 2 different toogle states using the{' '}
      <Code>value</Code> boolean prop given.
    </Paragraph>
    <Grid cols={3} style={{width: 400}}>
      {[
        ['value', {...flexCenteredStyle, justifyContent: 'flex-start'}],
        ['true', flexCenteredStyle],
        ['false', flexCenteredStyle]
      ].map(([key, style], index) => (
        <Cell key={index} style={style}>
          <Label>{key}</Label>
        </Cell>
      ))}
      <Cell />
      {[{value: true}, {value: false}].map((props, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch {...props} />
        </Cell>
      ))}
    </Grid>
  </Article>
)

ArticleState.displayName = 'ArticleState'
ArticleState.propTypes = {
  className: PropTypes.string
}

export default ArticleState
