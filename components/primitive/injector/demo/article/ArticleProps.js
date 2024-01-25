import Injector from 'components/primitive/injector/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, H2, H3, Paragraph} from '@s-ui/documentation-library'

import Child from '../Child.js'

const ArticleProps = ({className}) => {
  return (
    <Article className={className}>
      <H2>Props</H2>
      <Paragraph>
        By default, every single prop will follow the same strategy: the union combination between injector each
        children declared props. In case of having a prop intersection it will take the children prop over the injector.
      </Paragraph>
      <H3>Boolean</H3>
      <Paragraph>
        By default, it will union combined strategy prioritizing the declared children over the injector.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0}}>
        <Injector injector collide={false}>
          <Child name="first child" child={false} collide={true} />
        </Injector>
      </Box>
      <H3>Number</H3>
      <Paragraph>
        By default, it will union combined strategy prioritizing the declared children over the injector.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0}}>
        <Injector injector={1} collide={2}>
          <Child name="first child" child={3} collide={4} />
        </Injector>
      </Box>
      <H3>String</H3>
      <Paragraph>
        By default, it will union combined strategy prioritizing the declared children over the injector.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0}}>
        <Injector injector="injector" collide="collide injector">
          <Child name="first child" child="child" collide="collide child" />
        </Injector>
      </Box>
    </Article>
  )
}
ArticleProps.displayName = 'ArticleProps'

ArticleProps.propTypes = {
  className: PropTypes.string
}

export default ArticleProps
