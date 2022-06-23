import Injector from 'components/primitive/injector/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, H2, Paragraph} from '@s-ui/documentation-library'

import Child from '../Child.js'

const ArticleStyles = ({className}) => {
  return (
    <Article className={className}>
      <H2>styles</H2>
      <Paragraph>
        Injector will combine existing children styles rule attribute over the
        given styles prop to all of them.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0}}>
        <Injector style={{fontSize: '2em', fontColor: 'red'}}>
          <Child
            name="result"
            style={{fontSize: '3em', fontFamily: 'Helvetica'}}
          />
        </Injector>
      </Box>
    </Article>
  )
}
ArticleStyles.displayName = 'ArticleStyles'

ArticleStyles.propTypes = {
  className: PropTypes.string
}

export default ArticleStyles
