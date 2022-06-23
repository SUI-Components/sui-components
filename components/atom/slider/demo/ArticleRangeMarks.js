import PropTypes from 'prop-types'

import {Article, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'
import {range} from './utils.js'

const ArticleRangeMarks = ({className}) => {
  return (
    <Article className={className}>
      <H2>Marks</H2>
      <Paragraph>
        To modify the ranges, use the <Code>marks</Code> prop.
      </Paragraph>
      <Box>
        <AtomSlider range marks={range(10)} />
      </Box>
    </Article>
  )
}

ArticleRangeMarks.propTypes = {
  className: PropTypes.string
}

export default ArticleRangeMarks
