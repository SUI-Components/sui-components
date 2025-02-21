import PropTypes from 'prop-types'

import {Article, H2, H3, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import AtomKbd from '@s-ui/react-atom-kbd'

const ArticleKeyboardNavigation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Keyboard Navigation</H2>
      <H3>Clickable</H3>
      <Paragraph>Tag is focusable.</Paragraph>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Activates the Tag.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Activates the Tag.
        </ListItem>
      </UnorderedList>
      <H3>Selectable</H3>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Toggle its on/off state.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Toggle its on/off state.
        </ListItem>
      </UnorderedList>
      <H3>Cleanable</H3>
      <Paragraph>When the Tag is focused</Paragraph>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Del</AtomKbd>: Removes the Chip and focus the next focusable element.
        </ListItem>
        <ListItem>
          <AtomKbd>Backspace</AtomKbd>: Removes the Chip and focus the previous focusable element.
        </ListItem>
      </UnorderedList>
      <Paragraph>When the CloseButton is focused</Paragraph>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: fires the onClose handler.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: fires the onClose handler.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleKeyboardNavigation.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboardNavigation
