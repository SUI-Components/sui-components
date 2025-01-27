import PropTypes from 'prop-types'

import {Article, H2, ListItem, UnorderedList} from '@s-ui/documentation-library'

import AtomKbd from '@s-ui/react-atom-kbd'

const ArticleKeyboardNavigation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Keyboard Navigation</H2>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Activates the button
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Activates the button
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleKeyboardNavigation.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboardNavigation
