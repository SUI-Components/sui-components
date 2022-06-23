import Injector from 'components/primitive/injector/src/index.js'
import PropTypes from 'prop-types'

import {Article, Box, H2, Paragraph} from '@s-ui/documentation-library'

import Child from '../Child.js'

const ArticleHandlers = ({className}) => {
  const onHandler =
    (eventName, elementName) =>
    (...args) =>
      console.log(eventName, elementName, ...args) // eslint-disable-line no-console
  return (
    <Article className={className}>
      <H2>Handlers</H2>
      <Paragraph>
        Injector will preserve every existing children handler prop and also the
        given handler prop to all of them.
      </Paragraph>
      <Box style={{paddingLeft: 0, paddingRight: 0}}>
        <Injector
          onClick={onHandler('onClick', 'Injector')}
          onMouseEnter={onHandler('onMouseEnter', 'Injector')}
          onMouseLeave={onHandler('onMouseLeave', 'Injector')}
        >
          <Child
            name="result"
            onClick={onHandler('onClick', 'Child')}
            onMouseEnter={onHandler('onMouseEnter', 'Child')}
            onMouseLeave={onHandler('onMouseLeave', 'Child')}
          />
        </Injector>
      </Box>
    </Article>
  )
}
ArticleHandlers.displayName = 'ArticleHandlers'

ArticleHandlers.propTypes = {
  className: PropTypes.string
}

export default ArticleHandlers
