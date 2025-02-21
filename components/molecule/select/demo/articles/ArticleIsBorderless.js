import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

const ArticleIsBorderless = ({className}) => (
  <Article className={className}>
    <H2>Default</H2>
    <Paragraph>By default, the element gets the following look and feel.</Paragraph>
  </Article>
)

ArticleIsBorderless.displayName = 'ArticleIsBorderless'

ArticleIsBorderless.propTypes = {
  className: PropTypes.string
}

export default ArticleIsBorderless
