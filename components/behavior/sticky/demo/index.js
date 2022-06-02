import cx from 'classnames'

import {
  H1,
  // H4,
  Paragraph,
  Code,
  ListItem,
  UnorderedList
  // Box,
  // Separator
} from '@s-ui/documentation-library'
// import BehaviorSticky, {BehaviorStickyProvider} from '../src/index.js'

// import LoremIpsum from './LoremIpsum.js'
import {BASE_CLASS_DEMO, CLASS_DEMO_SECTION} from './settings.js'
import ArticleDefault from './articles/ArticleDefault.js'
// import ArticleScrollUp from './articles/ArticleScrollUp.js'
// import ArticleStacked from './articles/ArticleStacked.js'
// import ArticleGridDemo from './articles/ArticleGridDemo.js'

import './index.scss'

const Demo = () => (
  <div className={cx('sui-StudioPreview', BASE_CLASS_DEMO)}>
    <H1>Behavior Sticky</H1>
    <Paragraph>
      The <Code>BehaviorSticky</Code> package have 3 different components:
    </Paragraph>
    <UnorderedList>
      <ListItem>
        <Code>BehaviorStickyProvider</Code>: a logical wrapper
      </ListItem>
      <ListItem>
        <Code>BehaviorSticky</Code> (default): Sticky component like position:
        sticky with options for elements bigger than the viewport.
      </ListItem>
      <ListItem>
        <Code>BehaviorStickyScrollUp</Code> (default): component that is only
        visible when scrolling up.
      </ListItem>
    </UnorderedList>
    <ArticleDefault className={CLASS_DEMO_SECTION} />
    <br />
  </div>
)

export default Demo
