import {H1, Paragraph} from '@s-ui/documentation-library'
import ArticleUncontrolled from './articles/ArticleUncontrolled'
import ArticleDefault from './articles/ArticleDefault'
import ArticlePlaceHolder from './articles/ArticlePlaceholder'
import ArticlePassword from './articles/ArticlePassword'
import ArticleSizes from './articles/ArticleSizes'
import ArticleLenght from './articles/ArticleLength'
import ArticleMask from './articles/ArticleMask'
import ArticleDisabled from './articles/ArticleDisabled'
import ArticleStatus from './articles/ArticleStatus'
import ArticleReferenced from './articles/ArticleForwardRef'

const BASE_CLASS_DEMO = `DemoMoleculeValidationCode`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Validation Code</H1>
        <Paragraph>
          The ValidationCode component is optimized for entering sequences of
          digits. The most common application is for entering OTP or security
          codes.
        </Paragraph>
        <br />
        <ArticleDefault className={CLASS_SECTION} />
        <br />
        <ArticleUncontrolled />
        <br />
        <ArticlePlaceHolder />
        <br />
        <ArticlePassword />
        <br />
        <ArticleSizes />
        <br />
        <ArticleLenght />
        <br />
        <ArticleMask />
        <br />
        <ArticleDisabled />
        <br />
        <ArticleStatus />
        <br />
        <ArticleReferenced />
      </div>
    </div>
  )
}
