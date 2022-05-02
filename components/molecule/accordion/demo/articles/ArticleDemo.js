import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

const ArticleDemo = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>paragraph</Paragraph>
    </Article>
  )
}

ArticleDemo.displayName = 'ArticleDemo'

ArticleDemo.propTypes = {
  className: PropTypes.string
}
