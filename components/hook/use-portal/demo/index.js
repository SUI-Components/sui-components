import {
  Paragraph,
  H1,
  Code,
  Anchor,
  Emphasis
} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleTarget from './articles/ArticleTarget.js'
import ArticleStateless from './articles/ArticleStateless.js'
import ArticleStateful from './articles/ArticleStateful.js'
import ArticleCloseOnEvent from './articles/ArticleCloseOnEvent.js'
import ArticleCustom from './articles/ArticleCustom.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>usePortal</H1>
      <Paragraph>
        The <Code>usePortal</Code> hook offers the possibility to create a{' '}
        <Anchor href="https://reactjs.org/docs/portals.html">Portal</Anchor> set
        where is defined (default: document.body).
      </Paragraph>
      <Emphasis>
        * Portals will be displayed in a dark Box to identify them.
      </Emphasis>
      <br />
      <br />
      {/*<ArticleDefault />*/}
      <br />
      {/*<ArticleTarget />*/}
      <br />
      {/*<ArticleStateless />*/}
      <br />
      {/*<ArticleStateful />*/}
      <br />
      {/*<ArticleCloseOnEvent />*/}
      <br />
      <ArticleCustom />
    </div>
  )
}

export default Demo
