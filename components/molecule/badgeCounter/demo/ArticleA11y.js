import PropTypes from 'prop-types'

import {Anchor, Article, Box, H2, H3, ListItem, Paragraph, Strong, UnorderedList} from '@s-ui/documentation-library'

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
      <H3>Visual indicators</H3>
      <UnorderedList>
        <ListItem>
          Badges use a color intended to stand out against labels, icons, and navigation elements. Use the default color
          mapping to avoid color conflict issues.
        </ListItem>
        <ListItem>Contrast colors below 3:1 are not accessible for this component.</ListItem>
      </UnorderedList>
      <H3>Labeling elements</H3>
      <Paragraph>The accessibility label for a badge item will be read after its navigation destination.</Paragraph>
      <Paragraph>
        Any numerical badges will have their number read, while non-counting badges will simply announce “new
        notification.” If a + counter is displayed or a unit, read it with “More than” or the unit name.
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Strong>Badges with numbers:</Strong> “[n] notifications”.
        </ListItem>
        <ListItem>
          <Strong>Badges with a number greater than (max-label 99 default):</Strong> “More than 99 notifications”.
        </ListItem>
        <ListItem>
          <Strong>Non-counting badges:</Strong> “New notification”.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
