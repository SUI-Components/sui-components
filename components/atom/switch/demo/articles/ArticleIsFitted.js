import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSwitch from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleIsFitted = ({className}) => (
  <Article className={className}>
    <H2>IsFitted</H2>
    <Paragraph>
      <Code>isFitted</Code> prop remove all spacing rules of arround the component in order to move this responsibility
      to parent component. As you can see at the default demo, the current spacing is causing a misalignment with label.
      This prop fixes this.
    </Paragraph>
    <Grid cols={2} style={{width: 400}}>
      <Cell style={flexCenteredStyle}>
        <AtomSwitch label="default" name="name" />
      </Cell>
      <Cell style={flexCenteredStyle}>
        <AtomSwitch isFitted label="isFitted" name="name" />
      </Cell>
    </Grid>
  </Article>
)

ArticleIsFitted.displayName = 'ArticleIsFitted'

ArticleIsFitted.propTypes = {
  className: PropTypes.string
}

export default ArticleIsFitted
