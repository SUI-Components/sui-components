import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {DemoWrapper, Text} from './config/index.js'

const ArticleAlignment = ({className, icon, showText, hideText}) => {
  return (
    <Article className={className}>
      <H2>Collapsible Alignment</H2>
      <Paragraph>
        These are the options for the prop <Code> alignContainer</Code> and{' '}
        <Code> alignButton</Code> (default left)
      </Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <span>Collapsible Left and Button Left</span>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16
            }}
          >
            <MoleculeCollapsible
              icon={icon}
              showText={showText}
              hideText={hideText}
              alignContainer="left"
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <span>Collapsible Center and Button Center</span>
          <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16}}>
            <MoleculeCollapsible
              icon={icon}
              showText={showText}
              hideText={hideText}
              alignContainer="center"
              alignButton="center"
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <span>Collapsible Right</span>
          <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16}}>
            <MoleculeCollapsible
              icon={icon}
              showText={showText}
              hideText={hideText}
              alignContainer="right"
              alignButton="right"
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleAlignment.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string
}

export default ArticleAlignment
