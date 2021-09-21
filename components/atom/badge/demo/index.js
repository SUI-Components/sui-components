import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleType from './ArticleType'
import ArticleCustomType from './ArticleCustomType'
import ArticleDesign from './ArticleDesign'
import ArticleSizes from './ArticleSizes'
import ArticleContent from './ArticleContent'
import ArticleDarkMode from './ArticleDarkMode'

const BASE_CLASS_DEMO = `DemoAtomBadge`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

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
      </div>
    </div>
  )
}
export default Demo
