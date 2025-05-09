import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSwitch from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleFullWidth = ({className}) => (
  <Article className={className}>
    <H2>fullWidth</H2>
    <Paragraph>
      Use <Code>fullWidth</Code> to fill the container
    </Paragraph>
    <Grid cols={1} style={{width: 400}}>
      <Cell style={{...flexCenteredStyle, border: '1px solid var(--c-base-inverse)', padding: 10}}>
        <AtomSwitch
          fullWidth
          type="single"
          label="fullWidth"
          name="name"
          id="switch-full-width"
          labelRight="off"
          labelLeft="on"
        />
      </Cell>
    </Grid>
  </Article>
)

ArticleFullWidth.displayName = 'ArticleFullWidth'

ArticleFullWidth.propTypes = {
  className: PropTypes.string
}

export default ArticleFullWidth
