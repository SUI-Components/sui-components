import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomSwitch, {atomSwitchSizes} from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleSizes = ({className}) => (
  <Article className={className}>
    <H2>Sizes</H2>
    <Paragraph>
      We offer 2 different <Code>size</Code> types under the <Code>atomSwitchSizes</Code> exported variable: default and
      large
    </Paragraph>
    <Grid cols={Object.values(atomSwitchSizes).length} style={{width: 800}}>
      {Object.values(atomSwitchSizes).map((size, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <Label>{size}</Label>
        </Cell>
      ))}
      {Object.values(atomSwitchSizes).map((size, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch size={size} name="name" />
        </Cell>
      ))}
    </Grid>
  </Article>
)

ArticleSizes.displayName = 'ArticleSizes'

ArticleSizes.propTypes = {
  className: PropTypes.string
}

export default ArticleSizes
