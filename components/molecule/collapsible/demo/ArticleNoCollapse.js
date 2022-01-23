import PropTypes from 'prop-types'
import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {DemoWrapper} from './config/index.js'

const ArticleNoCollapse = ({className, icon, showText, hideText, height}) => {
  return (
    <Article className={className}>
      <H2>No need to collapse</H2>
      <Paragraph>The text is not long enough to need to collapse</Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>No need to collapse</span>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16,
              textAlign: 'left',
              maxWidth: 400
            }}
          >
            <MoleculeCollapsible
              icon={icon}
              showText={showText}
              hideText={hideText}
            >
              <p style={{margin: 0}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleNoCollapse.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string,
  height: PropTypes.number
}

export default ArticleNoCollapse
