import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

const ArticleTypography = ({className}) => {
  return (
    <Article className={className}>
      <H2>Typography</H2>
      <Paragraph>typography</Paragraph>
    </Article>
  )
}

ArticleTypography.propTypes = {
  className: PropTypes.string
}

export default ArticleTypography
