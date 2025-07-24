import PropTypes from 'prop-types'

import {Article, Bold, Code, H2, H3, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import AtomKbd from '@s-ui/react-atom-kbd'

const ArticleKeyboardNavigation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Interaction</H2>
      <Paragraph></Paragraph>
      <H2>Keyboard Navigation</H2>
      <Paragraph>
        When the modal gets opened, the <Bold>Focus</Bold> of the pages gets trapped into its content. This makes
        impossible get focus on the page layout until the modal get closed. When closed, the focus goes back to the last
        element focussed before.
      </Paragraph>
      <Paragraph>
        When the modal gets opened, the <Bold>Tab</Bold> key is used to navigate through the focusable elements inside
        the modal. The <Bold>Shift</Bold> + <Bold>Tab</Bold> key combination is used to navigate backwards through the
        focusable elements. The <Bold>Esc</Bold> key is used to close the modal.
      </Paragraph>
      <Paragraph>
        The page <Bold>scroll</Bold> gets blocked when the modal is opened if there is a <Code>Modal.Overlay</Code>{' '}
        inside of it.
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Tab</AtomKbd>: Focuses the next element.
        </ListItem>
        <ListItem>
          <AtomKbd>Shift</AtomKbd> + <AtomKbd>Tab</AtomKbd>: Focuses the previous element.
        </ListItem>
        <ListItem>
          <AtomKbd>Esc</AtomKbd>: Closes the modal when its opened.
        </ListItem>
      </UnorderedList>
      <H3>
        <Code>Modal.OpenTrigger</Code>
      </H3>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Closes the Modal.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Closes the Modal.
        </ListItem>
      </UnorderedList>
      <H3>
        <Code>Modal.CloseTrigger</Code>
      </H3>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Closes the Modal.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Closes the Modal.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleKeyboardNavigation.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboardNavigation
