import {H1, Paragraph} from '@s-ui/documentation-library'
import ArticleDefault from './ArticleDefault'
import ArticleSizes from './ArticleSizes'
import ArticleMask from './ArticleMask'
import ArticleReferenced from './ArticleReferenced'
import ArticleDisabled from './ArticleDisabled'
import ArticleStates from './ArticleStatus'
import ArticleChildren from './ArticleChildren'
import ArticlePlaceHolder from './ArticlePlaceholder'
import ArticlePassword from './ArticlePassword'
import ArticleLength from './ArticleLength'
import ArticleValue from './ArticleValue'
const BASE_CLASS_DEMO = `DemoAtomPinInput`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Pin Input</H1>
        <Paragraph>
          The Pin Input component is optimized for entering sequences of digits.
          The most common application is for entering OTP or security codes.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
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
