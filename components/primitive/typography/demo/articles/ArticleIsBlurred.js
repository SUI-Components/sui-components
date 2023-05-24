import {useState} from 'react'
import PropTypes from 'prop-types'
import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import PrimitiveTypography from '../../src/index.js'

const ArticleIsBlurred = ({className, lorem}) => {
  const [isBlurred, setIsBlurred] = useState(true)
  const onMouseHandler = value => () => setIsBlurred(value)
  return (
    <Article className={className}>
      <H2>isBlurred</H2>
      <Paragraph>
        The <Code>isBlurred</Code> boolean prop can create an blur effect on the
        text given.
      </Paragraph>
      <PrimitiveTypography
        onMouseEnter={onMouseHandler(false)}
        onMouseLeave={onMouseHandler(true)}
        isBlurred={isBlurred}
      >
        {lorem}
      </PrimitiveTypography>
    </Article>
  )
}

ArticleIsBlurred.propTypes = {
  className: PropTypes.string,
  lorem: PropTypes.node
}

export default ArticleIsBlurred
