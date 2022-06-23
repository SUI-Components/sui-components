import LayoutGrid, {LayoutGridItem} from 'components/layout/grid/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph, Text} from '@s-ui/documentation-library'

import DemoBox from './demoBox.js'
import DemoWrapper from './demoWrapper.js'

const ArticleGutter = ({classname}) => {
  return (
    <Article className={classname}>
      <H2>Gutter</H2>
      <Paragraph>
        The <Code>gutter</Code> prop offers the possibility to tackle the
        spacing between elements. Its possible values are integers between 0 and
        10. Each of the values represents the number of times the base design
        system margin (8px) is multiplied by.
      </Paragraph>
      <Paragraph>
        You can even pass an object which sets the desired gutter for each
        breakpoint as key:value pair.
      </Paragraph>
      <DemoWrapper>
        <Text>
          gutter:{' '}
          {JSON.stringify({xxs: 0, xs: 1, s: 2, m: 3, l: 4, xl: 5, xxl: 6})}
        </Text>
        <LayoutGrid gutter={{xxs: 0, xs: 1, s: 2, m: 3, l: 4, xl: 5, xxl: 6}}>
          <LayoutGridItem colSpan={6}>
            <DemoBox>s:6</DemoBox>
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
          <LayoutGridItem colSpan={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
          <LayoutGridItem colSpan={3}>
            <DemoBox>s:3</DemoBox>
          </LayoutGridItem>
        </LayoutGrid>
        <Text>* resize the browser to check the behaviour.</Text>
      </DemoWrapper>
    </Article>
  )
}

ArticleGutter.propTypes = {
  classname: PropTypes.string
}

export default ArticleGutter
