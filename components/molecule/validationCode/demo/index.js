import {H1, Paragraph} from '@s-ui/documentation-library'
import ArticleDefault from './ArticleDefault'

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
      </div>
    </div>
  )
}
