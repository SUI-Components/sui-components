import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import {atomPanelColors} from '../../src'
import AtomPanel from '@s-ui/react-atom-panel'

const ArticleColor = ({className}) => {
  return (
    <Article className={className}>
      <H2>Color</H2>
      <Paragraph>
        {' '}
        These are the available <Code>colors</Code>
      </Paragraph>
      <div
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {Object.keys(atomPanelColors).map((color, idx) => (
          <div
            key={idx}
            style={{flex: '0 0 auto', textAlign: 'center', margin: '15px'}}
          >
            <AtomPanel color={atomPanelColors[color]}>
              <div style={{height: '100px', width: '100px'}} />
            </AtomPanel>
            <span style={{color: 'grey'}}>{atomPanelColors[color]}</span>
          </div>
        ))}
      </div>
    </Article>
  )
}

ArticleColor.propTypes = {
  className: PropTypes.string
}

export default ArticleColor
