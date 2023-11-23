import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDisableReadOnly from './articles/ArticleDisableReadOnly.js'
import ArticleHandlers from './articles/ArticleHandlers.js'
import ArticleMaxTagsAndAllowDuplicates from './articles/ArticleMaxTagsAndAllowDuplicates.js'
import ArticleSemantic from './articles/ArticleSemantic.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleTagsSize from './articles/ArticleTagsSize.js'
import {CLASS_DEMO_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Input Tags</H1>
      <Paragraph>
        <Code>MoleculeInputTags</Code> is an <Code>AtomInput</Code> with the behavior of adding/removing `AtomTag` as a
        list.
      </Paragraph>
      <ArticleDefault className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleDisableReadOnly className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleSize className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleTagsSize className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleHandlers className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleMaxTagsAndAllowDuplicates className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleSemantic className={CLASS_DEMO_SECTION} />
    </div>
  )
}

export default Demo
