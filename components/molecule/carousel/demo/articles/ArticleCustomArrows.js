import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'
import CustomArrow from './components/CustomArrow.js'

const ArticleCustomArrows = ({className}) => {
  return (
    <Article className={className}>
      <H2>Custom Arrows</H2>
      <Paragraph>By default, the component expect to receive as child some images.</Paragraph>
      <MoleculeCarousel arrowLeft={<CustomArrow>👈</CustomArrow>} arrowRight={<CustomArrow>👉</CustomArrow>}>
        <img alt="1" src="https://placehold.co/300x90/808080/000000?text=Item 1" />
        <img alt="2" src="https://placehold.co/300x80/808080/000000?text=Item 2" />
        <img alt="3" src="https://placehold.co/300x100/808080/000000?text=Item 3" />
        <img alt="4" src="https://placehold.co/300x80/808080/000000?text=Item 4" />
      </MoleculeCarousel>
    </Article>
  )
}

ArticleCustomArrows.propTypes = {
  className: PropTypes.string
}

export default ArticleCustomArrows
