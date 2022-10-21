import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomPanel, {atomPanelColors} from '../../src/index.js'

const ArticlePlaceholder = ({className}) => {
  return (
    <Article className={className}>
      <H2>Placeholder</H2>
      <Paragraph>
        {' '}
        This is the structure for the <Code>placeholder</Code>
      </Paragraph>
      <div style={{backgroundColor: 'white'}}>
        <div style={{width: '100px', margin: 'auto'}}>
          <AtomPanel
            src="https://satyr.io/100/a3a3a3?delay=3g"
            color={atomPanelColors.BASE}
          >
            <div style={{height: '100px'}} />
          </AtomPanel>
        </div>
      </div>
    </Article>
  )
}

ArticlePlaceholder.propTypes = {
  className: PropTypes.string
}

export default ArticlePlaceholder
