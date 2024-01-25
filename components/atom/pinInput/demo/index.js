import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleAutoFocus from './ArticleAutoFocus.js'
import ArticleChildren from './ArticleChildren.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleDisabled from './ArticleDisabled.js'
import ArticleLength from './ArticleLength.js'
import ArticleMask from './ArticleMask.js'
import ArticlePassword from './ArticlePassword.js'
import ArticlePlaceHolder from './ArticlePlaceholder.js'
import ArticleReferenced from './ArticleReferenced.js'
import ArticleSizes from './ArticleSizes.js'
import ArticleStates from './ArticleStatus.js'
import ArticleValue from './ArticleValue.js'
const BASE_CLASS_DEMO = `DemoAtomPinInput.js`

const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Pin Input</H1>
        <Paragraph>
          The Pin Input component is optimized for entering sequences of digits. The most common application is for
          entering OTP or security codes.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
        <br />
        <ArticleAutoFocus className={CLASS_SECTION} />
        <br />
        <ArticleValue className={CLASS_SECTION} />
        <br />
        <ArticlePlaceHolder className={CLASS_SECTION} />
        <br />
        <ArticlePassword className={CLASS_SECTION} />
        <br />
        <ArticleSizes className={CLASS_SECTION} />
        <br />
        <ArticleLength className={CLASS_SECTION} />
        <br />
        <ArticleMask className={CLASS_SECTION} />
        <br />
        <ArticleDisabled className={CLASS_SECTION} />
        <br />
        <ArticleStates className={CLASS_SECTION} />
        <br />
        <ArticleChildren className={CLASS_SECTION} />
        <br />
        <ArticleReferenced className={CLASS_SECTION} />
      </div>
    </div>
  )
}
