import {useState} from 'react'

import MoleculeTabs, {MoleculeTab} from 'components/molecule/tabs/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'

import {CLASS_DEMO_CONTENT_TAB} from '../config.js'

const TabContentWithState = ({title, number}) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <div
      className={CLASS_DEMO_CONTENT_TAB}
      style={{
        borderTop: 0,
        borderLeft: '1px solid #e6e6e6',
        borderRight: '1px solid #e6e6e6',
        borderBottom: '1px solid #e6e6e6',
        padding: '16px'
      }}
    >
      <h3>
        {title} {number}
      </h3>
      <div style={{marginBottom: '16px'}}>
        <label style={{display: 'block', marginBottom: '8px'}}>Counter: {count}</label>
        <button onClick={() => setCount(count + 1)} style={{padding: '8px 16px'}}>
          Increment
        </button>
      </div>
      <div>
        <label style={{display: 'block', marginBottom: '8px'}}>Text input:</label>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type something..."
          style={{padding: '8px', width: '100%', maxWidth: '300px'}}
        />
      </div>
    </div>
  )
}

TabContentWithState.displayName = 'TabContentWithState'

TabContentWithState.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number
}

const ArticleKeepTabsContentMounted = ({className}) => {
  return (
    <Article className={className}>
      <H2>Keep Tabs Content Mounted</H2>
      <Paragraph>
        The <Code>keepTabsContentMounted</Code> (boolean) prop controls whether tab contents remain mounted in the DOM
        when switching between tabs. This is useful when you want to preserve the internal state of each tab's content.
      </Paragraph>

      <H3>Without keepTabsContentMounted (default: false)</H3>
      <Paragraph>
        By default, when you switch tabs, the previous tab's content is unmounted and its state is lost. Try
        incrementing the counter or typing text, then switch tabs and come back - the state will be reset.
      </Paragraph>
      <MoleculeTabs>
        {Array(3)
          .fill(true)
          .map((v, index) => (
            <MoleculeTab
              key={index + 1}
              label={<span style={{padding: '0 8px'}}>Tab {index + 1}</span>}
              numTab={index + 1}
              active={index + 1 === 1}
            >
              <TabContentWithState title="Content" number={index + 1} />
            </MoleculeTab>
          ))}
      </MoleculeTabs>

      <H3>
        With keepTabsContentMounted={'{'}true{'}'}
      </H3>
      <Paragraph>
        When enabled, all tab contents remain mounted (but hidden) in the DOM. The state is preserved when switching
        between tabs. Try incrementing the counter or typing text, then switch tabs and come back - the state will be
        maintained.
      </Paragraph>
      <MoleculeTabs keepTabsContentMounted>
        {Array(3)
          .fill(true)
          .map((v, index) => (
            <MoleculeTab
              key={index + 1}
              label={<span style={{padding: '0 8px'}}>Tab {index + 1}</span>}
              numTab={index + 1}
              active={index + 1 === 1}
            >
              <TabContentWithState title="Content" number={index + 1} />
            </MoleculeTab>
          ))}
      </MoleculeTabs>

      <Paragraph>
        <strong>Use cases:</strong> This prop is particularly useful when tab contents have:
      </Paragraph>
      <ul>
        <li>Form inputs that users fill across multiple tabs</li>
        <li>Interactive components with internal state (counters, toggles, etc.)</li>
        <li>Media players or timers that should continue running</li>
        <li>Complex components with expensive initialization</li>
      </ul>
      <Paragraph>
        <strong>Note:</strong> When <Code>keepTabsContentMounted</Code> is true, inactive tabs are hidden using
        visibility techniques (visually hidden) but remain in the DOM, which may have performance implications if tabs
        contain heavy content.
      </Paragraph>
    </Article>
  )
}

ArticleKeepTabsContentMounted.displayName = 'ArticleKeepTabsContentMounted'

ArticleKeepTabsContentMounted.propTypes = {
  className: PropTypes.string
}

export default ArticleKeepTabsContentMounted
