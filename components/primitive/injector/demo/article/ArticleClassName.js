import Injector from 'components/primitive/injector/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, H2, Paragraph} from '@s-ui/documentation-library'

import Child from '../Child.js'

const ArticleClassName = ({className}) => {
  return (
    <Article className={className}>
      <H2>className</H2>
      <Paragraph>
        Injector will preserve every existing children className prop appending
        the given prop to all of them.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0}}>
        <Injector className="injectorClassName">
          <Child name="result" className="childClassName" />
        </Injector>
      </Box>
    </Article>
  )
}
ArticleClassName.displayName = 'ArticleClassName'

ArticleClassName.propTypes = {
  className: PropTypes.string
}

export default ArticleClassName
