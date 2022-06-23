import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleContent from './ArticleContent.js'
import ArticleCustomType from './ArticleCustomType.js'
import ArticleDarkMode from './ArticleDarkMode.js'
import ArticleDesign from './ArticleDesign.js'
import ArticleIsFitted from './ArticleIsFitted.js'
import ArticleSizes from './ArticleSizes.js'
import ArticleType from './ArticleType.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Badge</H1>
        <Paragraph>
          This is an informative UI element, it doesn't change on hover or
          click, so the user can't interact with it.
        </Paragraph>
        <ArticleType className={CLASS_SECTION} />
        <br />
        <ArticleCustomType className={CLASS_SECTION} />
        <br />
        <ArticleDesign className={CLASS_SECTION} />
        <br />
        <ArticleSizes className={CLASS_SECTION} />
        <br />
        <ArticleContent className={CLASS_SECTION} />
        <br />
        <ArticleDarkMode className={CLASS_SECTION} />
        <br />
        <ArticleIsFitted className={CLASS_SECTION} />
      </div>
    </div>
  )
}
export default Demo
