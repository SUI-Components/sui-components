import PropTypes from 'prop-types'
import {H2, Paragraph, Article, Code} from '@s-ui/documentation-library'

import LayoutGrid, {
  LayoutGridItem,
  LayoutGridJustifyContent
} from '../../../../components/layout/grid/src'
import DemoWrapper from './demoWrapper'
import DemoBox from './demoBox'

const ArticleJustifyContent = ({classname}) => {
  return (
    <Article className={classname}>
      <H2>Justify Content</H2>
      <Paragraph>
        Use the <Code>justifyContent</Code> prop to distributes space between
        and around content items. Valid values:
        <Code>center</Code> <Code>flex-end</Code> <Code>flex-start</Code>{' '}
        <Code>space-around</Code> <Code>space-between</Code>
      </Paragraph>
      {Object.values(LayoutGridJustifyContent).map(justifyContent => (
        <div key={justifyContent}>
          <p className="sui-Studio-p">
            <code className="sui-Studio-code">{justifyContent}</code>
          </p>
          <DemoWrapper>
            <LayoutGrid justifyContent={justifyContent}>
              <LayoutGridItem s={3}>
                <DemoBox>s:2</DemoBox>
              </LayoutGridItem>
              <LayoutGridItem s={3}>
                <DemoBox>s:3</DemoBox>
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
