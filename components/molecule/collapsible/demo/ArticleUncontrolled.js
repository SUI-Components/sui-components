import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {Text} from './config/index.js'

const ArticleUncontrolled = ({className, icon, showText, hideText}) => {
  return (
    <Article className={className}>
      <H2>Collapsible Controlled</H2>
      <Paragraph>
        These are the options for the prop <Code> isCollapsible</Code> that might be renamed to isDefaultExpanded in
        future versions.
      </Paragraph>
      <br />
      <br />
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
            isCollapsible={true}
            icon={icon}
            showText={showText}
            hideText={hideText}
            alignContainer="left"
            onOpen={() => {
              console.log('onOpen')
            }}
            onClose={() => {
              console.log('onClose')
            }}
          >
            <Text />
          </MoleculeCollapsible>
        </div>
      </div>
    </Article>
  )
}

ArticleUncontrolled.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string
}

export default ArticleUncontrolled
