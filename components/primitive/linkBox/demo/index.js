import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './article/ArticleDefault.js'
import ArticleNesting from './article/ArticleNesting.js'
import ArticleA11y from './article/ArticleA11y.js'
import {demoBaseClassName} from './config.js'

export default () => (
  <div className="sui-StudioPreview">
    <H1>LinkBox</H1>
    <Paragraph>Semantic component used to wrap elements (cards, blog posts, articles, etc.) in a link.</Paragraph>
    <ArticleDefault className={demoBaseClassName} />
    <br />
    <ArticleNesting className={demoBaseClassName} />
    <br />
    <ArticleA11y className={demoBaseClassName} />
  </div>
)
