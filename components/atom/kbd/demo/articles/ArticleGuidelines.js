import PropTypes from 'prop-types'

import {Article, H2, Paragraph, UnorderedList, ListItem, Anchor} from '@s-ui/documentation-library'

const ArticleGuidelines = ({className}) => {
  return (
    <Article className={className}>
      <H2>Guideline</H2>
      <Paragraph>All shortcuts should do their best to match what appears on the user’s keyboard.</Paragraph>
      <UnorderedList>
        <ListItem>All single letters A-Z are uppercase.</ListItem>
        <UnorderedList>
          <ListItem>
            Do NOT use{' '}
            <Anchor href="https://en.wikipedia.org/wiki/List_of_Unicode_characters">
              Glyph unicode representations
            </Anchor>{' '}
            for the special key symbols.
          </ListItem>
        </UnorderedList>
        <ListItem>For non-letter keys such as enter, esc and shift, stick to lowercase.</ListItem>
        <ListItem>Use the arrow symbol as opposed to spelling things out.</ListItem>
        <ListItem>For function keys, stick to uppercase.</ListItem>
        <ListItem>
          For combination between keys and mouse events type the mouse event name upper-cased preceded by the 🖱️unicode
          glyph.
        </ListItem>
      </UnorderedList>
    </Article>
  )
}

ArticleGuidelines.propTypes = {
  className: PropTypes.string
}

export default ArticleGuidelines
