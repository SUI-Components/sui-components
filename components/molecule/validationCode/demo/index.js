import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleAutoFocus from './articles/ArticleAutoFocus.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDisabled from './articles/ArticleDisabled.js'
import ArticleReferenced from './articles/ArticleForwardRef.js'
import ArticleLenght from './articles/ArticleLength.js'
import ArticleMask from './articles/ArticleMask.js'
import ArticleOnlyInput from './articles/ArticleOnlyInput.js'
import ArticlePassword from './articles/ArticlePassword.js'
import ArticlePlaceHolder from './articles/ArticlePlaceholder.js'
import ArticleSizes from './articles/ArticleSizes.js'
import ArticleStatus from './articles/ArticleStatus.js'
import ArticleUncontrolled from './articles/ArticleUncontrolled.js'

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
        <ArticleAutoFocus className={CLASS_SECTION} />
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
        <br />
        <ArticleOnlyInput />
      </div>
    </div>
  )
}
