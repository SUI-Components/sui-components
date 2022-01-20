import PropTypes from 'prop-types'
import {H2, Article, Paragraph, Code, Box} from '@s-ui/documentation-library'
import AtomSlider from '../src.js'
import {range} from './utils.js'

const ArticleSliderMarks = ({className}) => {
  return (
    <Article className={className}>
      <H2>Marks</H2>
      <Paragraph>
        To modify the ranges, use the <Code>marks</Code> prop.
      </Paragraph>
      <Box>
        <AtomSlider marks={range(10)} />
      </Box>
    </Article>
  )
}

ArticleSliderMarks.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderMarks
