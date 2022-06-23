import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomPanel from '../../src/index.js'
import {flexItem, flexWrapper} from '../config.js'

const ArticleResized = ({className}) => {
  return (
    <Article className={className}>
      <H2>Resized</H2>
      <Paragraph>
        {' '}
        The prop <Code>resized</Code> is a boolean
      </Paragraph>
      <div style={flexWrapper}>
        <div style={flexItem}>
          <div>
            <img src="https://picsum.photos/250/200" />
          </div>
          <span>Original</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '200px'})}>
          <AtomPanel src="https://picsum.photos/250/200" resized>
            <div style={{height: '150px'}} />
          </AtomPanel>
          <span>Resized</span>
        </div>
      </div>
    </Article>
  )
}

ArticleResized.propTypes = {
  className: PropTypes.string
}

export default ArticleResized
