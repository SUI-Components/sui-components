import PropTypes from 'prop-types'

import {Article, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

const ArticleSliderValueLabel = ({className}) => {
  return (
    <Article className={className}>
      <H2>Value Label</H2>
      <Paragraph>
        Slider provides a boolean prop to set a label with the inner value under the <Code>valueLabel</Code> prop. This
        prop is only valid for no-range sliders. You can combine it with the <Code>hideTooltip</Code> boolean prop.
      </Paragraph>
      <Box>
        <AtomSlider valueLabel hideTooltip />
      </Box>
    </Article>
  )
}

ArticleSliderValueLabel.propTypes = {
  className: PropTypes.string
}

export default ArticleSliderValueLabel
