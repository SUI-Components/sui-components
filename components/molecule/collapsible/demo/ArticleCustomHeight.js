import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {Text, DemoWrapper} from './config/index.js'

const ArticleCustomHeight = ({className, icon, showText, hideText, height}) => {
  return (
    <Article className={className}>
      <H2>Collapsible setting custom height</H2>
      <Paragraph>
        The prop <Code>height</Code> is type number.
      </Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Collapsible setting custom height</span>
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
              height={height}
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleCustomHeight.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string,
  height: PropTypes.number
}

export default ArticleCustomHeight
