import {Paragraph, H1, Code, Anchor} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleTarget from './articles/ArticleTarget.js'
import ArticleStateless from './articles/ArticleStateless.js'
import ArticleStateful from './articles/ArticleStateful.js'
import ArticleCloseOnEvent from './articles/ArticleCloseOnEvent.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>usePortal</H1>
      <Paragraph>
        The <Code>usePortal</Code> hook offers the possibility to create a{' '}
        <Anchor href="https://reactjs.org/docs/portals.html">Portal</Anchor> set
        where is defined (default: document.body).
      </Paragraph>
      <ArticleDefault />
      <br/>
      <ArticleTarget />
      <br/>
      <ArticleStateless />
      <br/>
      <ArticleStateful />
      <br/>
      <ArticleCloseOnEvent />
    </div>
  )
}

export default Demo
