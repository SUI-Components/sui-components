import Injector from 'components/primitive/injector/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, H2, Paragraph} from '@s-ui/documentation-library'

import Child from '../Child.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The Injector adds all its declared props to all its children if they are not declared keeping its own value
        (does not replace its own value).
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0, display: 'flex'}}>
        <Injector injectorProp="injectorProp" collidingProp="collidingPropInjector">
          <Child name="first child" childProp="childProp1" collidingProp="collidingPropChild1" />
          <Child name="second child" childProp="childProp2" collidingProp="collidingPropChild2" />
          <Child name="third child" childProp="childProp3" collidingProp="collidingPropChild3" />
        </Injector>
      </Box>
    </Article>
  )
}
ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
