import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import AtomInput from '../../src/index.js'

const ArticleDefault = ({className}) => (
  <Article className={className}>
    <H2>Default</H2>
    <Paragraph>
      By default, the element gets the following look and feel.
    </Paragraph>
    <div>
      <AtomInput />
    </div>
  </Article>
)

ArticleDefault.propTypes = {
  className: PropTypes.string
}

ArticleDefault.displayName = 'ArticleDefault'

export default ArticleDefault
