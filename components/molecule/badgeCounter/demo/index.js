import {H1, Paragraph} from '@s-ui/documentation-library'

import {CLASS_SECTION} from './config'

import ArticleDefault from './ArticleDefault'
import ArticleSizes from './ArticleSizes'
import ArticleLabel from './ArticleLabel'
import ArticleVariant from './ArticleVariant'
import ArticleStatus from './ArticleStatus'

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
