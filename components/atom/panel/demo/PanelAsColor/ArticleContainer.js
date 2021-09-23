import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import {atomPanelColors} from '../../src'
import AtomPanel from '@s-ui/react-atom-panel'
import {flexWrapper, flexItem} from '../config'

const ArticleContainer = ({className}) => {
  return (
    <Article className={className}>
      <H2>Container</H2>
      <Paragraph>
        These are the available options for <Code>container</Code>
      </Paragraph>
      <div style={flexWrapper}>
        <div style={flexItem}>
          <div style={{width: '200px'}}>
            <AtomPanel color={atomPanelColors.DARK}>
              <div
                style={{
                  height: '150px',
                  width: '200px',
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 600,
                  margin: 'auto',
                  padding: '16px'
                }}
              >
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </AtomPanel>
          </div>
          <span>Light text on dark background</span>
        </div>
        <div style={flexItem}>
          <div style={{width: '200px'}}>
            <AtomPanel color={atomPanelColors.DEFAULT}>
              <div
                style={{
                  height: '150px',
                  width: '200px',
                  color: '#000',
                  fontSize: '24px',
                  fontWeight: 600,
                  margin: 'auto',
                  padding: '16px'
                }}
              >
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </AtomPanel>
          </div>
          <span>Dark text on light background</span>
        </div>
        <div style={flexItem}>
          <div style={{width: '200px'}}>
            <AtomPanel src="https://picsum.photos/g/250/200?image=10">
              <div
                style={{
                  height: '150px',
                  width: '200px',
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 600,
                  margin: 'auto',
                  padding: '16px'
                }}
              >
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </AtomPanel>
          </div>
          <span>Light text on Image</span>
        </div>
      </div>
    </Article>
  )
}

ArticleContainer.propTypes = {
  className: PropTypes.string
}

export default ArticleContainer
