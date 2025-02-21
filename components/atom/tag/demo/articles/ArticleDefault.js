import AtomTag from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>The default Tag is a flat tag</Paragraph>
      <AtomTag label="Default tag" />
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
