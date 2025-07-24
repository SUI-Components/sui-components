import PropTypes from 'prop-types'

import {Anchor, Article, Box, Code, H2, ListItem, Paragraph, Strong, UnorderedList} from '@s-ui/documentation-library'

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
      <UnorderedList>
        <ListItem>Make sure you have tabbing focus indicators for all elements that need to be highlighted.</ListItem>
        <ListItem>
          Ensure that the card's content is accessible to screen readers, including any text, links, or buttons within
          the card. Every media (carrusel, images, videos...) you add to your site needs to have an alt attribute.
        </ListItem>
        <UnorderedList>
          <ListItem>If the media content is informational, check it has proper alt elements on each.</ListItem>
          <ListItem>
            If the media content is decorative or redundant to adjacent text, set alt="", which conveys to assistive
            technology users that the image isn’t necessary for understanding the page.
          </ListItem>
          <ListItem>
            Use the <Strong>aria-label</Strong> attribute to provide a descriptive label for the card when necessary.
          </ListItem>
        </UnorderedList>
        <ListItem>
          Avoid using generic strings like photo, image, or icon as alt values, as they don’t communicate valuable
          content to the user. Be as descriptive as possible.
        </ListItem>
        <ListItem>
          You can use <Code>VisuallyHidden</Code> component wrapper with descriptive text to give more context to a
          button or link's purpose.
        </ListItem>
      </UnorderedList>

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
