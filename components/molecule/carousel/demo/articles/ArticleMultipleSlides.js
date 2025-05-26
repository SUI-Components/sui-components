import PropTypes from 'prop-types'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleMultipleSlides = ({className}) => (
  <Article className={className}>
    <H2>Multiple Slides</H2>
    <H3>Simple example with 3 slides</H3>
    <Paragraph>
      Use <Code>numOfSlides</Code> prop to determine the number of slides that will be shown at once.
    </Paragraph>
    <MoleculeCarousel arrowLeftLabel="Previous" arrowRightLabel="Next" numOfSlides={3} defaultSlide={4}>
      <img alt="1" src="https://via.placeholder.com/300x90/808000/000000?text=Item 1" />
      <img alt="2" src="https://via.placeholder.com/300x80/008080/000000?text=Item 2" />
      <img alt="3" src="https://via.placeholder.com/300x100/800080/000000?text=Item 3" />
      <img alt="4" src="https://via.placeholder.com/300x80/808080/000000?text=Item 4" />
      <img alt="5" src="https://via.placeholder.com/300x100/808000/000000?text=Item 5" />
      <img alt="6" src="https://via.placeholder.com/300x80/008080/000000?text=Item 6" />
      <img alt="7" src="https://via.placeholder.com/300x100/800080/000000?text=Item 7" />
      <img alt="8" src="https://via.placeholder.com/300x80/808080/000000?text=Item 8" />
      <img alt="9" src="https://via.placeholder.com/300x100/808000/000000?text=Item 9" />
      <img alt="10" src="https://via.placeholder.com/300x80/008080/000000?text=Item 10" />
      <img alt="11" src="https://via.placeholder.com/300x100/800080/000000?text=Item 11" />
      <img alt="12" src="https://via.placeholder.com/300x80/808080/000000?text=Item 12" />
    </MoleculeCarousel>
    <H3>Example with less slides than numOfSlides</H3>
    <Paragraph>
      Using <Code>numOfSlides</Code> with sanitize the number of shown items if there's not enough children available to
      be used. For example, if numOfSlides is 5, but you have only two slides, it will show only two using the full
      width.
    </Paragraph>
    <MoleculeCarousel arrowLeftLabel="Previous" arrowRightLabel="Next" numOfSlides={3}>
      <img alt="1" src="https://via.placeholder.com/300x90/808000/000000?text=Item 1" />
      <img alt="2" src="https://via.placeholder.com/300x80/008080/000000?text=Item 2" />
    </MoleculeCarousel>
    <H3>Example with less slides than numOfSlides but with sanitize as false</H3>
    <Paragraph>
      You could, however, disable the previous behaviour by using the prop
      <Code>isSanitized</Code> in order to avoid changing the <Code>numOfSlides</Code> prop on the fly. This mean the
      space will be divided by the numOfSlides even if there's no slides enough to show.
    </Paragraph>
    <MoleculeCarousel arrowLeftLabel="Previous" arrowRightLabel="Next" numOfSlides={3} isSanitized={false}>
      <img alt="1" src="https://via.placeholder.com/300x90/808000/000000?text=Item 1" />
      <img alt="2" src="https://via.placeholder.com/300x80/008080/000000?text=Item 2" />
    </MoleculeCarousel>
  </Article>
)

ArticleMultipleSlides.propTypes = {
  className: PropTypes.string
}

export default ArticleMultipleSlides
