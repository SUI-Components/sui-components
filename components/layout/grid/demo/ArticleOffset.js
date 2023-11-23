import LayoutGrid, {LayoutGridItem} from 'components/layout/grid/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import DemoBox from './demoBox.js'
import DemoWrapper from './demoWrapper.js'

const ArticleOffset = ({classname}) => {
  return (
    <Article className={classname}>
      <H2>Offset</H2>
      <Paragraph>
        The column can be moved n columns to its right under the props related for that purpose. Use any of{' '}
        <Code>xxsOffset</Code>, <Code>xsOffset</Code>, <Code>sOffset</Code>, <Code>mOffset</Code>, <Code>lOffset</Code>,{' '}
        <Code>xlOffset</Code>, <Code>xxlOffset</Code> as needed.
      </Paragraph>
      <DemoWrapper>
        <LayoutGrid>
          <LayoutGridItem colSpan={6} xxsOffset={3} lOffset={6}>
            <DemoBox>
              xxs:6 | xxsOffset:3
              <br />
              lOffset:6
            </DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={6} sOffset={6} lOffset={3}>
            <DemoBox>
              s:6 | sOffset: 6<br />
              lOffset:3
            </DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={6}>
            <DemoBox>s:6</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
        </LayoutGrid>
      </DemoWrapper>
    </Article>
  )
}

ArticleOffset.propTypes = {
  classname: PropTypes.string
}

export default ArticleOffset
