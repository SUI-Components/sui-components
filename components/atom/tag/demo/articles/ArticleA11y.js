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
      <UnorderedList>
        <ListItem>
          Focusable for <Strong>Clickable</Strong>, <Strong>Selectable</Strong>.
        </ListItem>
        <ListItem>Clear button keyboard accessible by default when appearing.</ListItem>
        <ListItem>Closing indicator must be focusable.</ListItem>
      </UnorderedList>
      <Paragraph>Chips handle 4 different features:</Paragraph>
      <UnorderedList>
        <ListItem>Display data</ListItem>
        <ListItem>Fire Actions (button role)</ListItem>
        <ListItem>Manage Deletions (clear button)</ListItem>
        <ListItem>Manage Selections (toggle pressed button role)</ListItem>
      </UnorderedList>
      <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
        Tags and buttons are similar in that they both provide visual cues to prompt users to take actions and make
        selections. However, there are important distinctions to be aware of.
      </Box>
      <Paragraph>Combining those features chips give 4 different usages:</Paragraph>
      <UnorderedList>
        <ListItem>Assist</ListItem>
        <ListItem>Filter</ListItem>
        <ListItem>Input</ListItem>
        <ListItem>Suggestion</ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
