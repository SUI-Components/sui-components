import {useState} from 'react'

import MoleculeTabs, {MoleculeTab} from 'components/molecule/tabs/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, H3, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import Content from '../components/Content.js'
import {CLASS_DEMO_CONTENT_TAB} from '../config.js'

const tabsNumber = 5

const ArticleActiveTabs = ({className}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(3)
  return (
    <Article className={className}>
      <H2>Controlled and uncontrolled active tabs</H2>
      <Paragraph>
        Under <Code>activeTabIndex</Code> (number, default 1) developer can control the active tab. Use the{' '}
        <Code>defaultActiveTabIndex</Code> for defining the initial tab uncontrolled.
      </Paragraph>
      <H3>Uncontrolled</H3>
      <MoleculeTabs defaultActiveTabIndex={3}>
        {Array(tabsNumber)
          .fill(true)
          .map((v, index) => (
            <MoleculeTab
              key={index + 1}
              label={<span style={{padding: '0 8px'}}>Label {index + 1}</span>}
              numTab={index + 1}
              disabled={index + 1 === 4}
            >
              <Content
                title="Title"
                number={index + 1}
                className={CLASS_DEMO_CONTENT_TAB}
                style={{
                  borderTop: 0,
                  borderLeft: '1px solid #e6e6e6',
                  borderRight: '1px solid #e6e6e6',
                  borderBottom: '1px solid #e6e6e6'
                }}
              />
            </MoleculeTab>
          ))}
      </MoleculeTabs>
      <H3>Controlled</H3>
      <RadioButtonGroup
        value={activeTabIndex}
        onChange={(event, value) => {
          setActiveTabIndex(value)
        }}
      >
        {Array(tabsNumber)
          .fill(true)
          .map((v, index) => (
            <RadioButton value={index + 1} checked={index + 1 === activeTabIndex}>{`tab ${index + 1}`}</RadioButton>
          ))}
      </RadioButtonGroup>
      <MoleculeTabs
        activeTabIndex={activeTabIndex}
        onChange={(event, {numTab}) => {
          setActiveTabIndex(numTab)
        }}
      >
        {Array(tabsNumber)
          .fill(true)
          .map((v, index) => (
            <MoleculeTab
              key={index + 1}
              label={<span style={{padding: '0 8px'}}>Label {index + 1}</span>}
              numTab={index + 1}
              disabled={index + 1 === 4}
            >
              <Content
                title="Title"
                number={index + 1}
                className={CLASS_DEMO_CONTENT_TAB}
                style={{
                  borderTop: 0,
                  borderLeft: '1px solid #e6e6e6',
                  borderRight: '1px solid #e6e6e6',
                  borderBottom: '1px solid #e6e6e6'
                }}
              />
            </MoleculeTab>
          ))}
      </MoleculeTabs>
    </Article>
  )
}

ArticleActiveTabs.displayName = 'ArticleActiveTabs'

ArticleActiveTabs.propTypes = {
  className: PropTypes.string
}

export default ArticleActiveTabs
