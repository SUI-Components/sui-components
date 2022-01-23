import {H1, Paragraph} from '@s-ui/documentation-library'

import {CLASS_SECTION} from './config.js'

import ArticleDefault from './ArticleDefault.js'
import ArticleSizes from './ArticleSizes.js'
import ArticleLabel from './ArticleLabel.js'
import ArticleVariant from './ArticleVariant.js'
import ArticleStatus from './ArticleStatus.js'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Badge Counter</H1>
        <Paragraph>
          Component used for warning the user about new content or updates
        </Paragraph>
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
    </div>
  )
}
