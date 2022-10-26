import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomPanel, {atomPanelVerticalAlign} from '../../src/index.js'
import {flexItem} from '../config.js'

const ArticleVerticallyCropped = ({className}) => {
  return (
    <Article className={className}>
      <H2>Vertically Cropped</H2>
      <Paragraph>
        {' '}
        These are the options for the prop <Code>verticalAlign</Code>
      </Paragraph>
      <div
        style={{
          background: 'white',
          color: 'grey',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <div style={flexItem}>
          <div>
            <img src="https://picsum.photos/250/200" />
          </div>
          <span>Original</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '100px'})}>
          <AtomPanel
            src="https://picsum.photos/250/200"
            verticalAlign={atomPanelVerticalAlign.TOP}
          >
            <div style={{height: '100px'}} />
          </AtomPanel>
          <span>Top</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '100px'})}>
          <AtomPanel
            src="https://picsum.photos/250/200"
            verticalAlign={atomPanelVerticalAlign.CENTER}
          >
            <div style={{height: '100px'}} />
          </AtomPanel>
          <span>Center</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '100px'})}>
          <AtomPanel
            src="https://picsum.photos/250/200"
            verticalAlign={atomPanelVerticalAlign.BOTTOM}
          >
            <div style={{height: '100px'}} />
          </AtomPanel>
          <span>Bottom</span>
        </div>
      </div>
    </Article>
  )
}

ArticleVerticallyCropped.propTypes = {
  className: PropTypes.string
}

export default ArticleVerticallyCropped
