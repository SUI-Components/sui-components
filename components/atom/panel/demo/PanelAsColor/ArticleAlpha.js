import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'
import AtomPanel from '@s-ui/react-atom-panel'

import {atomPanelAlpha, atomPanelColors} from '../../src/index.js'
import {flexWrapper} from '../config.js'

const ArticleAlpha = ({className}) => {
  return (
    <Article className={className}>
      <H2>Alpha</H2>
      <Paragraph>Alpha style of Panel Component.</Paragraph>
      <div
        style={Object.assign({}, flexWrapper, {
          background: 'white url(https://picsum.photos/1000/800)'
        })}
      >
        {Object.values(atomPanelAlpha).map((alpha, idx) => (
          <div
            key={idx}
            style={{flex: '0 0 auto', textAlign: 'center', margin: '15px'}}
          >
            <AtomPanel alpha={alpha} color={atomPanelColors.CONTRAST}>
              <div
                style={{height: '100px', width: '100px', lineHeight: '100px'}}
              >
                {alpha}
              </div>
            </AtomPanel>
          </div>
        ))}
      </div>
    </Article>
  )
}

ArticleAlpha.propTypes = {
  className: PropTypes.string
}

export default ArticleAlpha
