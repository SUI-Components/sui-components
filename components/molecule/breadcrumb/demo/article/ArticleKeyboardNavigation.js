import PropTypes from 'prop-types'

import {Article, Bold, Box, H2, H3, Code, ListItem, UnorderedList} from '@s-ui/documentation-library'
import AtomKbd from '@s-ui/react-atom-kbd'

const ArticleKeyboardNavigation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Keyboard Navigation</H2>
      <UnorderedList>
        <ListItem>
          <AtomKbd>Tab</AtomKbd>: Moves focus from breadcrumb to breadcrumb link.
        </ListItem>
        <ListItem>
          <AtomKbd>Shift</AtomKbd> + <AtomKbd>Tab</AtomKbd>: Moves focus backwards.
        </ListItem>
        <ListItem>
          <AtomKbd>Enter</AtomKbd>: Activates the breadcrumb link.
        </ListItem>
        <ListItem>
          <AtomKbd>Space</AtomKbd>: Activates the breadcrumb link.
        </ListItem>
      </UnorderedList>
      <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
        <H3>
          <Bold>What to Avoid</Bold>
        </H3>
        <UnorderedList>
          <ListItem>Using only visual separators like slashed (/) without semantic list structure.</ListItem>
          <ListItem>
            Using only <Code>&#60;div&#62;</Code> or <Code>&#60;span&#62;</Code> without proper semantic roles.
          </ListItem>
          <ListItem>Making breadcrumb links non-interactive or not focusable.</ListItem>
          <ListItem>
            Making the current page a link unless it truly leads somewhere different. It should be a static text
            element.
          </ListItem>
        </UnorderedList>
      </Box>
    </Article>
  )
}

ArticleKeyboardNavigation.propTypes = {
  className: PropTypes.string
}

export default ArticleKeyboardNavigation
