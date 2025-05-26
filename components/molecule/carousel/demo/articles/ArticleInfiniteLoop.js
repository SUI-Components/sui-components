import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleInfiniteLoop = ({className}) => (
  <Article className={className}>
    <H2>Infinite loop</H2>
    <Paragraph>
      You could make your carousel infinite by configuring the <Code>hasInfiniteLoop</Code> boolean prop to true. That
      means when it arrive to the last slide, and the user clicks on next it starts again. And when the carousel is on
      the first slide, and the user clicks on previous, it goes to the last slide.
    </Paragraph>
    <MoleculeCarousel arrowLeftLabel="Previous" arrowRightLabel="Next" hasInfiniteLoop>
      <img alt="1" src="https://placehold.co/300x90/808080/000000?text=Item 1" />
      <img alt="2" src="https://placehold.co/300x80/808080/000000?text=Item 2" />
      <img alt="3" src="https://placehold.co/300x100/808080/000000?text=Item 3" />
      <img alt="4" src="https://placehold.co/300x80/808080/000000?text=Item 4" />
    </MoleculeCarousel>
  </Article>
)

ArticleInfiniteLoop.propTypes = {
  className: PropTypes.string
}

export default ArticleInfiniteLoop
