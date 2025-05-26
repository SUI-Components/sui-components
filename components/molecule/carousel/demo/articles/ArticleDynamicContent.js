import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Button, ButtonGroup, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleDynamicContent = ({className}) => {
  const [itemsNumber, setItemsNumber] = useState(1)
  const removeItem = () => setItemsNumber(value => (value <= 1 ? 1 : value - 1))
  const addItem = () => setItemsNumber(value => value + 1)
  return (
    <Article className={className}>
      <H2>Dynamic Content</H2>
      <Paragraph>
        You could easily add more content to the slider and it will adapt automatically for you. Try to click the button
        in order to add more content and check that how the new slides are being added.
      </Paragraph>
      <ButtonGroup>
        <Button onClick={removeItem} disabled={itemsNumber <= 1} style={{...(itemsNumber <= 1 && {opacity: 0.6})}}>
          Remove item
        </Button>
        <Button onClick={addItem}>Add item</Button>
      </ButtonGroup>
      <br />
      <br />
      <MoleculeCarousel>
        {new Array(itemsNumber).fill('').map((_, index) => (
          <img key={index} alt={`${index}`} src={`https://placehold.co/300x90/808080/000000?text=Item ${index + 1}`} />
        ))}
      </MoleculeCarousel>
    </Article>
  )
}

ArticleDynamicContent.propTypes = {
  className: PropTypes.string
}

export default ArticleDynamicContent
