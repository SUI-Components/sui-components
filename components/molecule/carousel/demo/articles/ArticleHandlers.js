import PropTypes from 'prop-types'

import {Article, Code, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import MoleculeCarousel from '../../src/index.js'

const ArticleHandlers = ({className}) => {
  const handle =
    handlerName =>
    (...args) => {
      console.log(handlerName, ...args) // eslint-disable-line no-console
    }
  return (
    <Article className={className}>
      <H2>Handlers</H2>
      <Paragraph>The carousel has teh following handlers:</Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>onInit</Code>: Function that will be executed AFTER initializing the slider
        </ListItem>
        <ListItem>
          <Code>onDestroy</Code>: Function that will be executed AFTER destroying the slider. Useful for clean up stuff
        </ListItem>
        <ListItem>
          <Code>onSlide</Code>: Function that will be executed every time the index position changes
        </ListItem>
      </UnorderedList>
      <MoleculeCarousel
        arrowLeftLabel="Previous"
        arrowRightLabel="Next"
        onInit={handle('onInit')}
        onDestroy={handle('onDestroy')}
        onSlideAfter={handle('onSlideAfter')}
        onSlideBefore={handle('onSlideBefore')}
        onPrevious={handle('onPrevious')}
        onNext={handle('onNext')}
        onSlide={handle('onSlide')}
      >
        <img alt="1" src="https://via.placeholder.com/300x90/808080/000000?text=Item 1" />
        <img alt="2" src="https://via.placeholder.com/300x80/808080/000000?text=Item 2" />
        <img alt="3" src="https://via.placeholder.com/300x100/808080/000000?text=Item 3" />
        <img alt="4" src="https://via.placeholder.com/300x80/808080/000000?text=Item 4" />
      </MoleculeCarousel>
    </Article>
  )
}

ArticleHandlers.propTypes = {
  className: PropTypes.string
}

export default ArticleHandlers
