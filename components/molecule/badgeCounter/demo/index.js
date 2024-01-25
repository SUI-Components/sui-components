import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './ArticleDefault.js'
import ArticleLabel from './ArticleLabel.js'
import ArticleSizes from './ArticleSizes.js'
import ArticleStatus from './ArticleStatus.js'
import ArticleVariant from './ArticleVariant.js'
import {CLASS_SECTION} from './config.js'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Badge Counter</H1>
      <Paragraph>Component used for warning the user about new content or updates</Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleSizes className={CLASS_SECTION} />
      <br />
      <ArticleLabel className={CLASS_SECTION} />
      <br />
      <ArticleVariant className={CLASS_SECTION} />
      <br />
      <ArticleStatus className={CLASS_SECTION} />
    </div>
  )
}
