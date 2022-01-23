import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  H2,
  Paragraph,
  Article,
  Code,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import LayoutGrid, {
  LayoutGridAlignContent,
  LayoutGridItem
} from 'components/layout/grid/src/index.js'
import DemoWrapper from './demoWrapper.js'
import DemoBox from './demoBox.js'

const ArticleAlignContent = ({classname}) => {
  const [alignContentState, setAlignContentState] = useState()
  return (
    <Article className={classname}>
      <H2>Align Content</H2>
      <Paragraph>
        Use the <Code>alignContent</Code> prop to distribute container’s lines.
        Valid values: <Code>center</Code> <Code>flex-start</Code>{' '}
        <Code>flex-end</Code> <Code>space-around</Code>{' '}
        <Code>space-between</Code> <Code>space-evenly</Code>{' '}
      </Paragraph>
      <RadioButtonGroup
        value={alignContentState}
        fullWidth
        onChange={(event, value) => setAlignContentState(value)}
      >
        {Object.values(LayoutGridAlignContent).map(alignContent => (
          <RadioButton
            key={alignContent}
            value={alignContent.toString()}
            label={alignContent}
          />
        ))}
      </RadioButtonGroup>
      <div key={alignContentState}>
        <p className="sui-Studio-p">
          alignContent: <Code>{alignContentState || 'undefined'}</Code>
        </p>
        <DemoWrapper style={{height: 300}}>
          <LayoutGrid alignContent={alignContentState}>
            <LayoutGridItem colSpan={4}>
              <DemoBox tiny>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox tiny>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox tiny>s:4</DemoBox>
            </LayoutGridItem>
            <LayoutGridItem colSpan={4}>
              <DemoBox tiny>s:4</DemoBox>
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

ArticleAlignContent.propTypes = {
  classname: PropTypes.string
}

export default ArticleAlignContent
