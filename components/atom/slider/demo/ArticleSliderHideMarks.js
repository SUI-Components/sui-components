import PropTypes from 'prop-types'
import {H2, Article, Paragraph, Box} from '@s-ui/documentation-library'
import AtomSlider from '../src.js'

const ArticleSliderHideMarks = ({className}) => {
  return (
    <Article className={className}>
      <H2>Hide marks</H2>
      <Paragraph>Slider provides a boolean prop to hide marks.</Paragraph>
      <Box>
        <AtomSlider hideMarks />
      </Box>
    </Article>
  )
}

ArticleSliderHideMarks.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderHideMarks
