import {useState} from 'react'

import LayoutGrid, {LayoutGridAlignItems, LayoutGridItem} from 'components/layout/grid/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import DemoBox from './demoBox.js'
import DemoWrapper from './demoWrapper.js'

const ArticleAlignItems = ({classname}) => {
  const [alignItemsState, setAlignItemsState] = useState()
  return (
    <Article className={classname}>
      <H2>Align Items</H2>
      <Paragraph>
        Use the <Code>alignItems</Code> prop to distribute container’s lines. Valid values:
        <Code>center</Code> <Code>flex-end</Code> <Code>flex-start</Code> <Code>space-around</Code>{' '}
        <Code>space-between</Code>
      </Paragraph>
      <RadioButtonGroup value={alignItemsState} fullWidth onChange={(event, value) => setAlignItemsState(value)}>
        {Object.values(LayoutGridAlignItems).map(alignItems => (
          <RadioButton key={alignItems} value={alignItems.toString()} label={alignItems} />
        ))}
      </RadioButtonGroup>
      <div key={alignItemsState}>
        <p className="sui-Studio-p">
          alignItems: <Code>{alignItemsState || 'undefined'}</Code>
        </p>
        <DemoWrapper>
          <LayoutGrid alignItems={alignItemsState}>
            <LayoutGridItem colSpan={4}>
              <DemoBox>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox tiny>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox tiny>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox tiny>s:4</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
        </DemoWrapper>
      </div>
    </Article>
  )
}

ArticleAlignItems.propTypes = {
  classname: PropTypes.string
}

export default ArticleAlignItems
