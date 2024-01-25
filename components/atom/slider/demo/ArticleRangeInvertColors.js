import PropTypes from 'prop-types'

import {Article, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomSlider from '../src/index.js'

const ArticleRangeInvertColors = ({className}) => {
  return (
    <Article className={className}>
      <H2>Invert colors</H2>
      <Paragraph>
        Slider ranged provides a boolean prop to also set an alternative colors configuration inverting the track and
        rail colors under the <Code>invertColors</Code> prop.
      </Paragraph>
      <Box>
        <AtomSlider range invertColors defaultValue={[20, 80]} />
      </Box>
    </Article>
  )
}

ArticleRangeInvertColors.propTypes = {
  className: PropTypes.string
}

export default ArticleRangeInvertColors
