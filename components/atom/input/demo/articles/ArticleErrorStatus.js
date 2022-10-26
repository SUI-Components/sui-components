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

import AtomInput from '../../src/index.js'

const ArticleErrorStatus = ({className}) => {
  return (
    <Article className={className}>
      <H2>Error State</H2>
      <Paragraph>
        Input can show its error mode using the boolean prop{' '}
        <Code>errorStatus</Code>
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label>true</Label>
        </Cell>
        <Cell>
          <Label>undefined</Label>
        </Cell>
        <Cell>
          <Label>false</Label>
        </Cell>
        <Cell>
          <AtomInput errorState />
        </Cell>
        <Cell>
          <AtomInput errorState={undefined} />
        </Cell>
        <Cell>
          <AtomInput errorState={false} />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleErrorStatus.propTypes = {
  className: PropTypes.string
}

ArticleErrorStatus.displayName = 'ArticleErrorStatus'

export default ArticleErrorStatus
