import PropTypes from 'prop-types'

import {Article, H2, Paragraph, Strong} from '@s-ui/documentation-library'

import AtomKbd from '../../src/index.js'

const ArticleCombinations = ({className}) => {
  return (
    <Article className={className}>
      <H2>Combinations</H2>
      <Paragraph>
        The only punctuation you should need is the + to indicate that a combination of keys will activate the shortcut.
      </Paragraph>
      <Article style={{display: 'block', width: '100%'}}>
        <AtomKbd>shift</AtomKbd> + <AtomKbd>H</AtomKbd>
      </Article>
      <Paragraph>
        If two different keys can execute the same action or the shortcut itself may look different on the user's
        keyboard, write "or" in between.
      </Paragraph>
      <Article style={{display: 'block', width: '100%'}}>
        <AtomKbd>shift</AtomKbd> or <AtomKbd>H</AtomKbd>
      </Article>
      <Paragraph>
        When combining a keyboard key and a mouse action combine it using the previous rules and the action name bold
        and uppercase preceded by the 🖱 symbol glyph.
      </Paragraph>
      <Article style={{display: 'block', width: '100%'}}>
        <AtomKbd>option</AtomKbd> + 🖱 <Strong>SCROLL</Strong>
      </Article>
    </Article>
  )
}

ArticleCombinations.propTypes = {
  className: PropTypes.string
}

export default ArticleCombinations
