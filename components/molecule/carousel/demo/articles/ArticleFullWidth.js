import PropTypes from 'prop-types'

import {Article, Box, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleFullWidth = ({className}) => (
  <Article className={className}>
    <H2>FullWidth</H2>
    <Paragraph>
      By default, slides uses the full width of the container. So, if you're using an image, it uses all the width
      available. You could avoid this by using the prop <Code>isFullWidth</Code>.
    </Paragraph>
    <MoleculeCarousel isFullWidth arrowLeftLabel="Previous" arrowRightLabel="Next">
      <img alt="1" src="https://via.placeholder.com/300x90/808080/000000?text=Item 1" />
      <img alt="2" src="https://via.placeholder.com/300x80/808080/000000?text=Item 2" />
      <img alt="3" src="https://via.placeholder.com/300x100/808080/000000?text=Item 3" />
      <img alt="4" src="https://via.placeholder.com/300x80/808080/000000?text=Item 4" />
    </MoleculeCarousel>
    <H3>Adapt slides to use the height available</H3>
    <Paragraph>
      If you have slides with different heights you need to specify the maxHeight to be used for each slide, in order to
      avoid inner images or content to make the slider jump as they will automatically adapt to the available width and
      automatically detect the height.
    </Paragraph>
    <Box styles={{padding: 0, height: 300}}>
      <MoleculeCarousel isFullWidth arrowLeftLabel="Previous" arrowRightLabel="Next">
        <img style={{height: 300}} alt="1" src="https://via.placeholder.com/300x90/808080/000000?text=Item 1" />
        <img style={{height: 300}} alt="2" src="https://via.placeholder.com/300x80/808080/000000?text=Item 2" />
        <img style={{height: 300}} alt="3" src="https://via.placeholder.com/300x100/808080/000000?text=Item 3" />
        <img style={{height: 300}} alt="4" src="https://via.placeholder.com/300x80/808080/000000?text=Item 4" />
      </MoleculeCarousel>
    </Box>
  </Article>
)

ArticleFullWidth.propTypes = {
  className: PropTypes.string
}

export default ArticleFullWidth
