import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph, RadioButton} from '@s-ui/documentation-library'

import MoleculeCollapsible from '../src/index.js'
import {Text} from './config/index.js'

const ArticleControlled = ({className, icon, showText, hideText}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Article className={className}>
      <H2>Collapsible Controlled</H2>
      <Paragraph>
        These are the options for the prop <Code> isExpanded</Code>
      </Paragraph>
      <RadioButton
        checked={isExpanded}
        label={isExpanded ? 'collapse' : 'expand'}
        onClick={() => setIsExpanded(!isExpanded)}
      />
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
            isExpanded={isExpanded}
            icon={icon}
            showText={showText}
            hideText={hideText}
            alignContainer="left"
            onOpen={() => {
              // eslint-disable-next-line no-console
              console.log('onOpen')
              setIsExpanded(true)
            }}
            onClose={() => {
              // eslint-disable-next-line no-console
              console.log('onClose')
              setIsExpanded(false)
            }}
          >
            <Text />
          </MoleculeCollapsible>
        </div>
      </div>
    </Article>
  )
}

ArticleControlled.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string
}

export default ArticleControlled
