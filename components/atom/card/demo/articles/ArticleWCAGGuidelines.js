import PropTypes from 'prop-types'

import {Anchor, Article, H2, ListItem, UnorderedList} from '@s-ui/documentation-library'

const ArticleWCAGGuidelines = ({className}) => {
  return (
    <Article className={className}>
      <H2>WCAG 2.1 Guidelines</H2>
      <UnorderedList>
        <ListItem>
          <Anchor href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#text-equiv">
            1.1.1 Non-text Content
          </Anchor>{' '}
          – All non-text content that is presented to the user has a text alternative that serves the equivalent purpose
          (some exceptions). (Level A). If non-text content is pure decoration, is used only for visual formatting, or
          is not presented to users, then it does not need text alternatives.
        </ListItem>
        <ListItem>
          <Anchor href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#visual-audio-contrast-contrast">
            1.4.3 Contrast (Minimum)
          </Anchor>{' '}
          – The visual presentation of text and images of text has a contrast ratio of at least 4.5:1 (some exceptions).
          (Level AA)
        </ListItem>
        <ListItem>
          <Anchor href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#visual-audio-contrast-text-presentation">
            1.4.5 Images of Text
          </Anchor>{' '}
          – If the technologies being used can achieve the visual presentation, text is used to convey information
          rather than images of text (some exceptions). (Level AA)
        </ListItem>
        <ListItem>
          <Anchor href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#navigation-mechanisms-focus-visible">
            2.4.7 Focus Visible
          </Anchor>{' '}
          - Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
          (Level AA)
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleWCAGGuidelines.propTypes = {
  className: PropTypes.string
}

export default ArticleWCAGGuidelines
