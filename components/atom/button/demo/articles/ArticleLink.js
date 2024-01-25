import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomButton from '../../src/index.js'

const ArticleLink = ({className}) => {
  return (
    <Article className={className}>
      <H2>Link Design</H2>
      <div>
        <Paragraph>
          Buttons, can also look like links in some cases under the <Code>design</Code> 'link' prop value
        </Paragraph>
      </div>
      <Article>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea{' '}
        <AtomButton design="link">commodo</AtomButton> consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{' '}
        <a href="#">proident</a>, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Article>
    </Article>
  )
}

ArticleLink.displayName = 'ArticleLink'

ArticleLink.propTypes = {
  className: PropTypes.string
}

export default ArticleLink
