import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Grid,
  Cell,
  Paragraph,
  Code,
  Button
} from '@s-ui/documentation-library'
import MoleculeBadgeCounter, {moleculeBadgeCounterStatus} from '../src'

const ArticleStatus = ({className}) => {
  return (
    <Article className={className}>
      <H2>Status</H2>
      <Paragraph>
        There are {Object.values(moleculeBadgeCounterStatus).length} different
        defined status under the <Code>status</Code> enum prop (
        {Object.values(moleculeBadgeCounterStatus).join(', ')}). You can get the
        enum using the <Code>moleculeBadgeCounterStatus</Code> exported value.
      </Paragraph>
      <Grid
        cols={Object.values(moleculeBadgeCounterStatus).length}
        gutter={[8, 8]}
      >
        {Object.values(moleculeBadgeCounterStatus).map(statusValue => (
          <Cell key={statusValue}>
            <MoleculeBadgeCounter status={statusValue}>
              <Button>{statusValue}</Button>
            </MoleculeBadgeCounter>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleStatus.propTypes = {
  className: PropTypes.string
}

export default ArticleStatus
