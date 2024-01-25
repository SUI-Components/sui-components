import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomPanel, {atomPanelHorizontalAlign} from '../../src/index.js'
import {flexItem, flexWrapper} from '../config.js'

const ArticleHorizontallyCropped = ({className}) => {
  return (
    <Article className={className}>
      <H2>Horizontally Cropped</H2>
      <Paragraph>
        {' '}
        These are the options for the prop <Code>horizontalAlign</Code>{' '}
      </Paragraph>
      <div style={flexWrapper}>
        <div style={flexItem}>
          <div>
            <img src="https://picsum.photos/250/200" />
          </div>
          <span>Original</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '100px'})}>
          <AtomPanel src="https://picsum.photos/250/200" horizontalAlign={atomPanelHorizontalAlign.LEFT}>
            <div style={{height: '100px'}} />
          </AtomPanel>
          <span>Align to the left</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '100px'})}>
          <AtomPanel src="https://picsum.photos/250/200" horizontalAlign={atomPanelHorizontalAlign.CENTER}>
            <div style={{height: '100px'}} />
          </AtomPanel>
          <span>Centered</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '100px'})}>
          <AtomPanel src="https://picsum.photos/250/200" horizontalAlign={atomPanelHorizontalAlign.RIGHT}>
            <div style={{height: '100px'}} />
          </AtomPanel>
          <span>Align to the right</span>
        </div>
      </div>
    </Article>
  )
}

ArticleHorizontallyCropped.propTypes = {
  className: PropTypes.string
}

export default ArticleHorizontallyCropped
