import PropTypes from 'prop-types'

import {Article, Box, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

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
