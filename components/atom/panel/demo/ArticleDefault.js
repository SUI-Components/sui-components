import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import ColorPanel from '../src/ColorPanel'

const ArticleDefault = ({className}) => {


  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>Default style of InputComponent.</Paragraph>
      <ColorPanel color="red"/>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
