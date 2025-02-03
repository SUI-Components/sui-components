import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomInput from '../../src/index.js'

const ArticleErrorStatus = ({className}) => {
  return (
    <Article className={className}>
      <H2>Error State</H2>
      <Paragraph>
        Input can show its error mode using the boolean prop <Code>errorStatus</Code>
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label htmlFor={`errorState-${true}`}>true</Label>
        </Cell>
        <Cell>
          <Label htmlFor={`errorState-${undefined}`}>undefined</Label>
        </Cell>
        <Cell>
          <Label htmlFor={`errorState-${false}`}>false</Label>
        </Cell>
        <Cell>
          <AtomInput id={`errorState-${true}`} errorState />
        </Cell>
        <Cell>
          <AtomInput id={`errorState-${undefined}`} errorState={undefined} />
        </Cell>
        <Cell>
          <AtomInput id={`errorState-${false}`} errorState={false} />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleErrorStatus.propTypes = {
  className: PropTypes.node
}

export default ArticleErrorStatus
