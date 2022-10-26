import PropTypes from 'prop-types'

import {
  Article,
  Code,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomInput, {inputStates} from '../../src/index.js'
import {stackMap} from '../settings.js'

const ArticleState = ({className}) => {
  return (
    <Article className={className}>
      <H2>State</H2>
      <Paragraph>
        Input has {Object.values(inputStates).length} different values. It can
        be used giving a valid <Code>state</Code> prop to the component.
      </Paragraph>
      <Grid cols={Object.values(inputStates).length + 1} gutter={[8, 8]}>
        {stackMap(
          [['undefined', undefined], ...Object.entries(inputStates)],
          ([key], index) => (
            <Label key={index}>{key}</Label>
          ),
          ([key, value], index) => (
            <AtomInput key={index} state={value} />
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleState.propTypes = {
  className: PropTypes.string
}

ArticleState.displayName = 'ArticleState'

export default ArticleState
