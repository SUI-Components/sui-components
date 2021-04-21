import PropTypes from 'prop-types'
import {H2, H4, Paragraph, Article, Code} from '@s-ui/documentation-library'

import {
  DeprecatedLayoutGrid,
  LayoutGridItem
} from '../../../../components/layout/grid/src'
import DemoWrapper from './demoWrapper'
import DemoBox from './demoBox'

const ArticleIsGapless = ({classname}) => {
  return (
    <Article className={classname}>
      <H2>isGapless</H2>
      <H4 deprecated>Deprecated</H4>
      <Paragraph>
        Please, replace it to <Code>gutter</Code>: 0 as soon as possible.
      </Paragraph>
      <DemoWrapper>
        <DeprecatedLayoutGrid isGapless>
          <LayoutGridItem s={6}>
            <DemoBox>s:6</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem s={6}>
            <DemoBox>s:6</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem s={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem s={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem s={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem s={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
        </DeprecatedLayoutGrid>
      </DemoWrapper>
    </Article>
  )
}

ArticleIsGapless.propTypes = {
  classname: PropTypes.string
}

export default ArticleIsGapless
