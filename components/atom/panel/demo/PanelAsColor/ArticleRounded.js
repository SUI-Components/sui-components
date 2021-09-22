import PropTypes from 'prop-types'
import {atomPanelRounded} from '../../src'
import {Article, H2, Paragraph} from '@s-ui/documentation-library'
import AtomPanel from '@s-ui/react-atom-panel'

const ArticleRounded = ({className}) => {
  return (
    <Article className={className}>
      <H2>Rounded</H2>
      <Paragraph>Structure - Rounded.</Paragraph>
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
