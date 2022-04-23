import {H1, Paragraph, Code} from '@s-ui/documentation-library'

import ArticleDefault from './article/ArticleDefault.js'
import ArticleClassName from './article/ArticleClassName.js'
import ArticleStyles from './article/ArticleStyles.js'
import ArticleProps from './article/ArticleProps.js'
import ArticleHandlers from './article/ArticleHandlers.js'
import ArticleFragment from './article/ArticleFragment.js'

import {demoBaseClassName} from './settings.js'

export default () => (
  <div className="sui-StudioPreview">
    <H1>Primitive Injector</H1>
    <Paragraph>
      The default exported <Code>PrimitiveInjector</Code> from
      @s-ui/react-primitive-injector package injects its declared props to its
      direct valid descendant <Code>children</Code> elements combining it via{' '}
      <Code>combineProps</Code>(function) prop method.
    </Paragraph>
    <ArticleDefault className={demoBaseClassName} />
    <br />
    <ArticleClassName className={demoBaseClassName} />
    <br />
    <ArticleStyles className={demoBaseClassName} />
    <br />
    <ArticleProps className={demoBaseClassName} />
    <br />
    <ArticleHandlers className={demoBaseClassName} />
    <br />
    <ArticleFragment className={demoBaseClassName} />
  </div>
)
