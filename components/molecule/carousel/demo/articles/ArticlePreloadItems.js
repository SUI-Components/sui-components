import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticlePreloadItems = ({className}) => (
  <Article className={className}>
    <H2>Preload images</H2>
    <Paragraph>
      The slider is optimized in order to be lazy loaded and, then, load the images only when needed so you could notice
      an empty image while sliding. You could preload as much as images as you want by using the
      <Code>itemsToPreload</Code> (number) prop in order to avoid that effect if you wish.
    </Paragraph>
    <MoleculeCarousel itemsToPreload={3}>
      <img alt="1" src="https://placehold.co/300x90/808080/000000?text=Item 1" />
      <img alt="2" src="https://placehold.co/300x80/808080/000000?text=Item 2" />
      <img alt="3" src="https://placehold.co/300x100/808080/000000?text=Item 3" />
      <img alt="4" src="https://placehold.co/300x80/808080/000000?text=Item 4" />
    </MoleculeCarousel>
  </Article>
)

ArticlePreloadItems.propTypes = {
  className: PropTypes.string
}

export default ArticlePreloadItems
