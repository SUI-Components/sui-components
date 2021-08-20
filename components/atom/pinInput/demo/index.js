import {H1, Paragraph} from '@s-ui/documentation-library'
import ArticleDefault from './ArticleDefault'
import ArticleSizes from './ArticleSizes'
import ArticleMask from './ArticleMask'
import ArticleReferenced from './ArticleReferenced'
import ArticleDisabled from './ArticleDisabled'
import ArticleStates from './ArticleStatus'
const BASE_CLASS_DEMO = `DemoAtomValidationCode`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Pin Input</H1>
        <Paragraph>
          The ValidationCode component is optimized for entering sequences of
          digits. The most common application is for entering OTP or security
          codes.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
        <br />
        <ArticleSizes className={CLASS_SECTION} />
        <br />
        <ArticleMask className={CLASS_SECTION} />
        <ArticleDisabled />
        <ArticleStates />
        <br />
        <ArticleReferenced className={CLASS_SECTION} />
      </div>
    </div>
  )
}
