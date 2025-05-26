import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleControlled = ({className}) => {
  const [index, setIndex] = useState(undefined)
  const handleOnChange = (event, value) => setIndex(value)
  const handle =
    handlerName =>
    (...args) => {
      console.log(handlerName, ...args) // eslint-disable-line no-console
    }
  return (
    <Article className={className}>
      <H2>Controlled</H2>
      <Paragraph>
        Take control of visible element using the <Code>slide</Code> (number) prop
      </Paragraph>
      <div>
        <RadioButtonGroup value={index} onChange={handleOnChange}>
          {new Array(4).fill('').map((_, currentIndex) => (
            <RadioButton checked={index === currentIndex} label={`${currentIndex}`} value={currentIndex} />
          ))}
        </RadioButtonGroup>
      </div>
      <br />
      <MoleculeCarousel
        slide={index}
        onSlideAfter={handle('onSlideAfter')}
        onSlideBefore={handle('onSlideBefore')}
        onPrevious={handle('onPrevious')}
        onNext={handle('onNext')}
        onSlide={handle('onSlide')}
      >
        <img alt="1" src="https://placehold.co/300x90/808080/000000?text=Item 1" />
        <img alt="2" src="https://placehold.co/300x80/808080/000000?text=Item 2" />
        <img alt="3" src="https://placehold.co/300x100/808080/000000?text=Item 3" />
        <img alt="4" src="https://placehold.co/300x80/808080/000000?text=Item 4" />
      </MoleculeCarousel>
    </Article>
  )
}

ArticleControlled.propTypes = {
  className: PropTypes.string
}

export default ArticleControlled
