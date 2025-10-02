import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomPanel, {atomPanelAlpha, atomPanelColors} from '../../src/index.js'
import {flexItem, flexWrapper} from '../config.js'

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
              <div key={index} style={Object.assign({}, flexItem, {width: '100px'})}>
                <AtomPanel
                  src="https://picsum.photos/100/100"
                  overlayColor={atomPanelColors[color]}
                  overlayAlpha={atomPanelAlpha[alpha]}
                >
                  <div style={{height: '100px'}} />
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
