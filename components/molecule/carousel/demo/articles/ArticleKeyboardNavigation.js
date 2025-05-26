import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleKeyboardNavigation = ({className}) => (
  <Article className={className}>
    <H2>Keyboard navigation</H2>
    <Paragraph>
      You could use the <Code>keyboardNavigation</Code> prop in order to activate keyboard navigation. Try to use the
      left and right arrow in order to navigate the next slider.
    </Paragraph>
    <MoleculeCarousel arrowLeftLabel="Previous" arrowRightLabel="Next" hasKeyboardNavigation>
      <img alt="1" src="https://via.placeholder.com/300x90/808080/000000?text=Item 1" />
      <img alt="2" src="https://via.placeholder.com/300x80/808080/000000?text=Item 2" />
      <img alt="3" src="https://via.placeholder.com/300x100/808080/000000?text=Item 3" />
      <img alt="4" src="https://via.placeholder.com/300x80/808080/000000?text=Item 4" />
    </MoleculeCarousel>
  </Article>
)

ArticleKeyboardNavigation.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboardNavigation
