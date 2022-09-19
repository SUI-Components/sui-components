import {
  Anchor,
  Bold,
  Code,
  Emphasis,
  H1,
  Paragraph
} from '@s-ui/documentation-library'

import ArticleCloseOnEvent from './articles/ArticleCloseOnEvent.js'
import ArticleCustom from './articles/ArticleCustom.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleStateful from './articles/ArticleStateful.js'
import ArticleStateless from './articles/ArticleStateless.js'
import ArticleTarget from './articles/ArticleTarget.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>usePortal</H1>
      <Paragraph>
        The <Code>usePortal</Code> <Bold>hook</Bold> offers the possibility to
        create a{' '}
        <Anchor href="https://reactjs.org/docs/portals.html">Portal</Anchor> set
        where is defined (default: document.body).
      </Paragraph>
      <Emphasis>
        * Portals will be displayed in a dark Box to identify them.
      </Emphasis>
      <br />
      <br />
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleTarget className={CLASS_SECTION} />
      <br />
      <ArticleStateless className={CLASS_SECTION} />
      <br />
      <ArticleStateful className={CLASS_SECTION} />
      <br />
      <ArticleCloseOnEvent className={CLASS_SECTION} />
      <br />
      <ArticleCustom className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
