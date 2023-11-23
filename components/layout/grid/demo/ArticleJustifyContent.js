import {useState} from 'react'

import LayoutGrid, {LayoutGridItem, LayoutGridJustifyContent} from 'components/layout/grid/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import DemoBox from './demoBox.js'
import DemoWrapper from './demoWrapper.js'

const ArticleJustifyContent = ({classname}) => {
  const [justifyContentState, setJustifyContentState] = useState()
  return (
    <Article className={classname}>
      <H2>Justify Content</H2>
      <Paragraph>
        Use the <Code>justifyContent</Code> prop to distributes space between and around content items. Valid values:
        <Code>center</Code> <Code>flex-end</Code> <Code>flex-start</Code> <Code>space-around</Code>{' '}
        <Code>space-between</Code>
      </Paragraph>
      <RadioButtonGroup
        value={justifyContentState}
        fullWidth
        onChange={(event, value) => setJustifyContentState(value)}
      >
        {Object.values(LayoutGridJustifyContent).map(justifyContent => (
          <RadioButton key={justifyContent} value={justifyContent.toString()} label={justifyContent} />
        ))}
      </RadioButtonGroup>
      <div key={justifyContentState}>
        <p className="sui-Studio-p">
          justifyContent: <Code>{justifyContentState || 'undefined'}</Code>
        </p>
        <DemoWrapper>
          <LayoutGrid justifyContent={justifyContentState}>
            <LayoutGridItem colSpan={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={1}>
              <DemoBox>s:1</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={2}>
              <DemoBox>s:2</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={3}>
              <DemoBox>s:3</DemoBox>
            </LayoutGridItem>
          </LayoutGrid>
        </DemoWrapper>
      </div>
    </Article>
  )
}

ArticleJustifyContent.propTypes = {
  classname: PropTypes.string
}

export default ArticleJustifyContent
