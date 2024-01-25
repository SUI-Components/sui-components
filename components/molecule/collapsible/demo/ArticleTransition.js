import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {DemoWrapper, Text} from './config/index.js'

const ArticleTransition = ({className, icon, showText, hideText}) => {
  return (
    <Article className={className}>
      <H2>Collapsible Transition</H2>
      <Paragraph>
        The prop <Code>withTransition</Code> is a boolean by default true.
      </Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Collapsible with Transition</span>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left',
              maxWidth: 400
            }}
          >
            <MoleculeCollapsible icon={icon} showText={showText} hideText={hideText}>
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Collapsible without Transition</span>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left',
              maxWidth: 400
            }}
          >
            <MoleculeCollapsible icon={icon} showText={showText} hideText={hideText} withTransition={false}>
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleTransition.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string
}

export default ArticleTransition
