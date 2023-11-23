import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import PrimitiveTypography from '../../src/index.js'

const ArticleDefault = ({className, lorem}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The <Code>PrimitiveTypography</Code> component is an <Code>span</Code> element styled as <Code>body 1</Code>{' '}
        text style defined.
      </Paragraph>
      <PrimitiveTypography>{lorem}</PrimitiveTypography>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string,
  lorem: PropTypes.node
}

export default ArticleDefault
