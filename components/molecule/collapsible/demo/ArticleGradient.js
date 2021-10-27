import PropTypes from 'prop-types'
import {Text, DemoWrapper} from './config'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import MoleculeCollapsible from '../src'

const ArticleGradient = ({className, icon, showText, hideText}) => {
  return (
    <Article className={className}>
      <H2>Collapsible Gradient</H2>
      <Paragraph>
        The prop <Code>withGradient</Code> is a boolean by default true.
      </Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Collapsible with Gradient</span>
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
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Collapsible whithout Gradient</span>
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
              withGradient={false}
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleGradient.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string
}

export default ArticleGradient
