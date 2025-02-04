import PropTypes from 'prop-types'

import {Article, H2, ListItem, UnorderedList} from '@s-ui/documentation-library'
import AtomKbd from '@s-ui/react-atom-kbd'

const ArticleKeyboardNavigation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Keyboard Navigation</H2>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Right Arrow</AtomKbd>: Moves the cursor to next character written inside of the input.
        </ListItem>
        <ListItem>
          <AtomKbd>Left Arrow</AtomKbd>: Moves the cursor to previous character written inside of the input.
        </ListItem>
        <ListItem>
          <AtomKbd>Tab</AtomKbd>: Moves to the next focusable element
        </ListItem>
        <ListItem>
          <AtomKbd>Shift</AtomKbd> + <AtomKbd>Tab</AtomKbd>: Moves to the previous focusable element
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleKeyboardNavigation.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboardNavigation
