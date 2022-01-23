import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {Text, DemoWrapper} from './config/index.js'

const ArticleAlignment = ({className, icon, showText, hideText}) => {
  return (
    <Article className={className}>
      <H2>Collapsible Alignment</H2>
      <Paragraph>
        These are the options for the prop <Code> alignContainer</Code>
      </Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <span>Collapsible Left</span>
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
          <span>Collapsible Center</span>
          <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16}}>
            <MoleculeCollapsible
              icon={icon}
              showText={showText}
              hideText={hideText}
              alignContainer="center"
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
