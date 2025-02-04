import PropTypes from 'prop-types'

import {Anchor, Article, Box, H2, ListItem, Paragraph, Strong, UnorderedList} from '@s-ui/documentation-library'

const ArticleA11y = ({className}) => {
  return (
    <Article className={className}>
      <H2>
        Accessibility –{' '}
        <Anchor href="https://github.com/SUI-Components/sui-components/blob/master/contributor-docs/Accessibility%20Standards.md">
          <Strong>Guidelines</Strong>
        </Anchor>
      </H2>
      <Box style={{backgroundColor: 'color-mix(in srgb, #00FF00 10%, transparent)'}}>
        <Paragraph>
          ✅ This component has been successfully tested for{' '}
          <Strong>WCAG 2.0 levels A and AA, WCAG 2.1 levels A and AA</Strong> and for common accessibility best
          practices.
        </Paragraph>
      </Box>
      <Paragraph>
        The accessibility label for a button comes from the visible label text on the button such as Done, Send, or
        Reply.
      </Paragraph>
      <Paragraph>
        Consider aligning the accessibility label (used for assistive technology devices like screen readers) with the
        visible label text.
      </Paragraph>
      <Paragraph>
        If the button doesn’t have visible label text, which is the case for icon buttons, have the accessibility label
        describe the action that the button is executing, such as Favourite, Bookmark, or Send message.
      </Paragraph>
      <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
        <Strong>Size</Strong>
        <UnorderedList>
          <ListItem>
            We recommend using the size <Strong>Medium</Strong> (default)
          </ListItem>
          <ListItem>On Apps, the touch area is 44px height</ListItem>
        </UnorderedList>
      </Box>
      <Paragraph>
        This component adheres to the button{' '}
        <Anchor href="https://www.w3.org/WAI/ARIA/apg/patterns/button/">role requirements</Anchor>.
      </Paragraph>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
