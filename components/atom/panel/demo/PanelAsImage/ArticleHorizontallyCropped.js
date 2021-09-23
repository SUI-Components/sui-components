import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import AtomPanel from '@s-ui/react-atom-panel'
import {flexWrapper, flexItem} from '../config'
import atomPanelHorizontalAlign from '../../src'

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
        <div style={Object.assign({}, flexItem, {width: '180px'})}>
          <AtomPanel
            src="https://picsum.photos/250/200"
            horizontalAlign={atomPanelHorizontalAlign.LEFT}
          >
            <div style={{height: '200px'}} />
          </AtomPanel>
          <span>Align to the left</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '180px'})}>
          <AtomPanel
            src="https://picsum.photos/250/200"
            horizontalAlign={atomPanelHorizontalAlign.CENTER}
          >
            <div style={{height: '200px'}} />
          </AtomPanel>
          <span>Centered</span>
        </div>
        <div style={Object.assign({}, flexItem, {width: '180px'})}>
          <AtomPanel
            src="https://picsum.photos/250/200"
            horizontalAlign={atomPanelHorizontalAlign.RIGHT}
          >
            <div style={{height: '200px'}} />
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
