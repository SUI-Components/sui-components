import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Bold,
  Box,
  H2,
  Code,
  ListItem,
  Paragraph,
  Strong,
  UnorderedList
} from '@s-ui/documentation-library'
import AtomKbd from '@s-ui/react-atom-kbd'

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
        Adheres to the{' '}
        <Bold>
          <Anchor href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">Dialog WAI-ARIA design pattern</Anchor>
        </Bold>
        .
      </Paragraph>
      <UnorderedList>
        <ListItem>
          Usage of <Code>Modal.Title</Code> is mandatory. It serves as the accessible name for the modal dialog element.
          If you prefer not to display the title, you can wrap it with a <Code>VisuallyHidden</Code>.
        </ListItem>
        <ListItem>
          Manages screen reader announcements with <Code>Modal.Title</Code> and <Code>Modal.Description</Code>{' '}
          components.
        </ListItem>
        <ListItem>
          <Code>Modal.CloseIconButton</Code> must be rendered as the last child of <Code>Modal.Content</Code>. When
          opening, the dialog forwards the focus to the first interactive element inside of it which might never be the
          close button. User can use <AtomKbd>Shift</AtomKbd> + <AtomKbd>Tab</AtomKbd> to easily access to the close
          button after the dialog has been opened.
        </ListItem>
        <ListItem>
          Be careful not to overlap content with <Code>Modal.CloseIconButton</Code>, which has a large clickable area.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
