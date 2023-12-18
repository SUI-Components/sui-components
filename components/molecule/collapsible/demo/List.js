import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {DemoWrapper, ListItem} from './config/index.js'

const ArticleAlignment = ({className, icon, showText, hideText}) => {
  return (
    <Article className={className}>
      <H2>Collapsible List</H2>
      <Paragraph>Example when used with a list. And see how the collpasible not render the hidden elements</Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
          <div
            style={{
              backgroundColor: '#fff',
              fontSize: 14,
              padding: 16
            }}
          >
            <MoleculeCollapsible icon={icon} showText={showText} hideText={hideText}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
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
