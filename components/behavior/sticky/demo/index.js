import cx from 'classnames'

import {Box, Code, H1, H4, ListItem, Paragraph, Separator, UnorderedList} from '@s-ui/documentation-library'

import BehaviorSticky, {BehaviorStickyProvider} from '../src/index.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleGridDemo from './articles/ArticleGridDemo.js'
import ArticleScrollUp from './articles/ArticleScrollUp.js'
import ArticleStacked from './articles/ArticleStacked.js'
import ArticleStickyState from './articles/ArticleStickyState.js'
import LoremIpsum from './LoremIpsum.js'
import {BASE_CLASS_DEMO, CLASS_DEMO_SECTION} from './settings.js'

import './index.scss'

const Demo = () => (
  <div className={cx('sui-StudioPreview', BASE_CLASS_DEMO)}>
    <BehaviorStickyProvider>
      <H1>Behavior Sticky</H1>
      <Paragraph>
        The <Code>BehaviorSticky</Code> package have 3 different components:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>BehaviorStickyProvider</Code>: a logical wrapper
        </ListItem>
        <ListItem>
          <Code>BehaviorSticky</Code> (default): Sticky component like position: sticky with options for elements bigger
          than the viewport.
        </ListItem>
        <ListItem>
          <Code>BehaviorStickyScrollUp</Code> (default): component that is only visible when scrolling up.
        </ListItem>
      </UnorderedList>
      <ArticleDefault className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleStickyState className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleScrollUp className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleStacked className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleGridDemo className={CLASS_DEMO_SECTION} />
      <br />
      <Box
        style={{
          minHeight: '200vh',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-between',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Separator />
          <H4>Next text is just padding added to check the Sticky behavior</H4>
        </div>
        <BehaviorSticky>
          <Box
            mode="dark"
            style={{
              height: 80,
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <H4>BehaviorSticky content with no content ref provided (body).</H4>
          </Box>
        </BehaviorSticky>
        <BehaviorSticky defaultOffsetTop={80 + 8}>
          <Box
            mode="dark"
            style={{
              height: 80,
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <H4>BehaviorSticky content with no content ref provided (body).</H4>
          </Box>
        </BehaviorSticky>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <Paragraph>
          <LoremIpsum units="words" count={200} format="plain" />
        </Paragraph>
        <div>
          <H4>Previous text is just padding added to check the Sticky behavior</H4>
          <Separator />
        </div>
      </Box>
      <br />
    </BehaviorStickyProvider>
  </div>
)

export default Demo
