import PropTypes from 'prop-types'
import {H2, Paragraph, Article, Code} from '@s-ui/documentation-library'

import LayoutGrid, {
  LayoutGridAlignItems,
  LayoutGridItem
} from '../../../../components/layout/grid/src'
import DemoWrapper from './demoWrapper'
import DemoBox from './demoBox'

const ArticleJustifyContent = ({classname}) => {
  return (
    <Article className={classname}>
      <H2>Align Items</H2>
      <Paragraph>
        Use the <Code>justifyContent</Code> prop to distributes space between
        and around content items. Valid values:
        <Code>center</Code> <Code>flex-end</Code> <Code>flex-start</Code>{' '}
        <Code>space-around</Code> <Code>space-between</Code>
      </Paragraph>
      {Object.values(LayoutGridAlignItems).map(alignItems => (
        <div key={alignItems}>
          <p className="sui-Studio-p">
            <code className="sui-Studio-code">{alignItems}</code>
          </p>
          <DemoWrapper>
            <LayoutGrid alignItems={alignItems}>
              <LayoutGridItem s={4}>
                <DemoBox>s:4</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem s={4}>
                <DemoBox tiny>s:4</DemoBox>
              </LayoutGridItem>
            </LayoutGrid>
          </DemoWrapper>
        </div>
      ))}
    </Article>
  )
}

ArticleJustifyContent.propTypes = {
  classname: PropTypes.string
}

export default ArticleJustifyContent
