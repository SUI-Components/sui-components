import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCollapsible, {
  moleculeCollapsibleButtonAlign
} from '../src/index.js'
import {DemoWrapper, Text} from './config/index.js'

const ArticleButtonTextAlignment = ({className, icon, showText, hideText}) => {
  return (
    <Article className={className}>
      <H2>Collapsible Button Text Alignment</H2>
      <Paragraph>
        These are the options for the prop <Code> alignButtonText</Code>
      </Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <span>Buton Text Left</span>
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
              alignButtonText={moleculeCollapsibleButtonAlign.LEFT}
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <span>Buton Text Center</span>
          <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16}}>
            <MoleculeCollapsible
              icon={icon}
              showText={showText}
              hideText={hideText}
              alignButtonText={moleculeCollapsibleButtonAlign.CENTER}
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <span>Buton Text Right</span>
          <div style={{backgroundColor: '#fff', fontSize: 14, padding: 16}}>
            <MoleculeCollapsible
              icon={icon}
              showText={showText}
              hideText={hideText}
              alignButtonText={moleculeCollapsibleButtonAlign.RIGHT}
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleButtonTextAlignment.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string
}

export default ArticleButtonTextAlignment
