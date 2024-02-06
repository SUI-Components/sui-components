import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomSwitch, {atomSwitchSizes} from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleLoading = ({className}) => (
  <Article className={className}>
    <H2>IsLoading</H2>
    <Paragraph>
      If <Code>isLoading</Code> is set to <Code>true</Code> the switch will display a loading icon.
    </Paragraph>
    <Grid cols={Object.values(atomSwitchSizes).length} style={{width: 800}}>
      {Object.values(atomSwitchSizes).map((size, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <Label>{size}</Label>
        </Cell>
      ))}
      {Object.values(atomSwitchSizes).map((size, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch isLoading size={size} name="name" />
        </Cell>
      ))}
    </Grid>
  </Article>
)

ArticleLoading.displayName = 'ArticleLoading'

ArticleLoading.propTypes = {
  className: PropTypes.string
}

export default ArticleLoading
