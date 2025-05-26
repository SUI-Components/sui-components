import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleDefault = ({className}) => (
  <Article className={className}>
    <H2>Default</H2>
    <Paragraph>By default, the component expect to receive as child some images.</Paragraph>
    <MoleculeCarousel arrowLeftLabel="Previous" arrowRightLabel="Next">
      <img alt="1" src="https://via.placeholder.com/300x90/808080/000000?text=Item 1" />
      <img alt="2" src="https://via.placeholder.com/300x80/808080/000000?text=Item 2" />
      <img alt="3" src="https://via.placeholder.com/300x100/808080/000000?text=Item 3" />
      <img alt="4" src="https://via.placeholder.com/300x80/808080/000000?text=Item 4" />
    </MoleculeCarousel>
  </Article>
)

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
