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
        <ListItem>
          <Strong>Label</Strong>: Ensure text fields are properly labeled using <Code>label</Code> elements, with the
          for attribute linking to the input. This helps screen readers identify the field’s purpose.
        </ListItem>
        <ListItem>
          <Strong>Aria Label</Strong>: Use <Code>aria-label</Code> for inputs without visible labels (e.g., search bars
          with placeholder text only). This attribute provides an accessible name that describes the purpose of the
          input.
        </ListItem>
        <ListItem>
          <Strong>Descriptive Text</Strong>: When additional descriptive text is required, use{' '}
          <Code>aria-describedby</Code> to associate the input field with explanatory content, such as error messages or
          guidelines.
        </ListItem>
        <ListItem>
          <Strong>Error Feedback</Strong>: Use <Code>role="alert"</Code> or <Code>aria-live="assertive"</Code> for error
          messages, ensuring screen readers announce them immediately upon field validation.
        </ListItem>
      </UnorderedList>
      <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
        <Strong>Mandatory / Required</Strong>
        <UnorderedList>
          <ListItem>
            The asterisk * for mandatory needs to be read as <Strong>mandatory</Strong>.
          </ListItem>
        </UnorderedList>
      </Box>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
