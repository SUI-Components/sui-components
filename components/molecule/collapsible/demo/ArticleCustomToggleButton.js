import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import Button, {
  atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import MoleculeCollapsible from '../src/index.js'
import {DemoWrapper, Text} from './config/index.js'

const ArticleCustomToggleButton = ({className, icon, showText, hideText}) => {
  const ToggleButton = props => {
    return (
      <div style={{paddingTop: '12px'}}>
        <Button
          {...props}
          shape={atomButtonShapes.CIRCULAR}
          design={atomButtonDesigns.OUTLINE}
          size={atomButtonSizes.SMALL}
          role="button"
        ></Button>
      </div>
    )
  }

  return (
    <Article className={className}>
      <H2>Collapsible Gradient</H2>
      <Paragraph>
        The prop <Code>toggleButton</Code> accepts a custom component to toggle
        collapse
      </Paragraph>
      <br />
      <br />
      <DemoWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Custom toggle button</span>
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
              toggleButton={ToggleButton}
              withGradient={false}
              alignButton="center"
            >
              <Text />
            </MoleculeCollapsible>
          </div>
        </div>
      </DemoWrapper>
    </Article>
  )
}

ArticleCustomToggleButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  showText: PropTypes.string,
  hideText: PropTypes.string
}

export default ArticleCustomToggleButton
