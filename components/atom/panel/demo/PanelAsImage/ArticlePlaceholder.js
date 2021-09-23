import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import AtomPanel from '@s-ui/react-atom-panel'
import {atomPanelColors} from '../../src'

const ArticlePlaceholder = ({className}) => {
  return (
    <Article className={className}>
      <H2>Placeholder</H2>
      <Paragraph>
        {' '}
        This is the structure for the <Code>placeholder</Code>
      </Paragraph>
      <div style={{backgroundColor: 'white'}}>
        <div style={{width: '200px', margin: 'auto'}}>
          <AtomPanel
            src="https://satyr.io/200/a3a3a3?delay=3g"
            color={atomPanelColors.BASE}
          >
            <div style={{height: '210px'}} />
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
