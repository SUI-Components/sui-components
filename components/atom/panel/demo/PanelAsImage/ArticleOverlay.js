import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import AtomPanel from '@s-ui/react-atom-panel'
import {atomPanelColors, atomPanelAlpha} from '../../src'
import {flexWrapper, flexItem} from '../config'

const ArticleOverlay = ({className}) => {
  return (
    <Article className={className}>
      <H2>Overlay</H2>
      <Paragraph>
        {' '}
        These are the options for the prop <Code>horizontalAlign</Code>{' '}
      </Paragraph>
      <div>
        {Object.keys(atomPanelColors).map((color, idx) => (
          <div style={flexWrapper} key={idx}>
            {Object.keys(atomPanelAlpha).map((alpha, index) => (
              <div
                key={index}
                style={Object.assign({}, flexItem, {width: '250px'})}
              >
                <AtomPanel
                  src="https://picsum.photos/250/200"
                  overlayColor={color}
                  overlayAlpha={alpha}
                >
                  <div style={{height: '150px'}} />
                </AtomPanel>
                <span>
                  {color} {alpha}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Article>
  )
}

ArticleOverlay.propTypes = {
  className: PropTypes.string
}

export default ArticleOverlay
