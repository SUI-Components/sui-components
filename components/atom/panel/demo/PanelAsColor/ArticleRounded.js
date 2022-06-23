import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomPanel from '@s-ui/react-atom-panel'

import {atomPanelRounded} from '../../src/index.js'

const ArticleRounded = ({className}) => {
  return (
    <Article className={className}>
      <H2>Rounded</H2>
      <Paragraph>
        {' '}
        These are the options for the prop <Code>rounded</Code>{' '}
      </Paragraph>
      <div
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {Object.keys(atomPanelRounded).map((rounded, idx) => (
          <div
            key={idx}
            style={{flex: '0 0 auto', textAlign: 'center', margin: '15px'}}
          >
            <AtomPanel rounded={atomPanelRounded[rounded]} floating>
              <div style={{height: '100px', width: '100px'}} />
            </AtomPanel>
            <span style={{color: 'grey'}}>{atomPanelRounded[rounded]}</span>
          </div>
        ))}
      </div>
    </Article>
  )
}

ArticleRounded.propTypes = {
  className: PropTypes.string
}

export default ArticleRounded
