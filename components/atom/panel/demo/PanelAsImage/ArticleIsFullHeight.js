import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomPanel, {atomPanelColors} from '../../src/index.js'
import {flexItem, flexWrapper} from '../config.js'

const Panel = ({isFullHeight, children}) => (
  <div style={flexItem}>
    <div style={{width: '200px', height: '100%'}}>
      <AtomPanel
        src="https://picsum.photos/250/200"
        color={atomPanelColors.DEFAULT}
        isFullHeight={isFullHeight}
      >
        <div
          style={{
            color: '#000',
            fontSize: '24px',
            fontWeight: 600,
            margin: 'auto',
            padding: '16px'
          }}
        >
          <p>{children}</p>
        </div>
      </AtomPanel>
    </div>
  </div>
)

Panel.propTypes = {
  isFullHeight: PropTypes.bool,
  children: PropTypes.node
}

const ArticleIsFullHeight = ({className}) => {
  return (
    <Article className={className}>
      <H2>IsFullHeight</H2>
      <Paragraph>
        These are the available options for <Code>isFullHeight</Code>
      </Paragraph>
      <div
        style={Object.assign({}, flexWrapper, {
          gap: '10px'
        })}
      >
        <div
          style={Object.assign({}, flexWrapper, {
            flexDirection: 'column',
            gap: '10px'
          })}
        >
          <div
            style={Object.assign({}, flexWrapper, {
              alignItems: 'stretch',
              border: '1px solid grey'
            })}
          >
            <Panel isFullHeight>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Panel>
            <Panel isFullHeight>Lorem ipsum dolor sit amet</Panel>
          </div>
          <div
            style={{
              textAlign: 'center'
            }}
          >
            IsFullHeight
          </div>
        </div>

        <div
          style={Object.assign({}, flexWrapper, {
            flexDirection: 'column',
            gap: '10px'
          })}
        >
          <div
            style={Object.assign({}, flexWrapper, {
              alignItems: 'stretch',
              border: '1px solid grey'
            })}
          >
            <Panel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Panel>
            <Panel>Lorem ipsum dolor sit amet</Panel>
          </div>
          <div
            style={{
              textAlign: 'center'
            }}
          >
            Original
          </div>
        </div>
      </div>
    </Article>
  )
}

ArticleIsFullHeight.propTypes = {
  className: PropTypes.string
}

export default ArticleIsFullHeight
