import {H1, Paragraph} from '@s-ui/documentation-library'
// import AtomValidationCode from 'components/atom/validationCode/src'
import ArticleDefault from './ArticleDefault'
import ArticleSizes from './ArticleSizes'

const BASE_CLASS_DEMO = `DemoAtomValidationCode`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    // <div style={{maxWidth: '400px', padding: '16px'}}>
    //   <h1>Component</h1>
    //   <AtomValidationCode onChange={(_, {value}) => setCode(value)} />
    //   <h1>Code</h1>
    //   <p>{code}</p>
    // </div>
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Validation Code</H1>
        <Paragraph>
          The ValidationCode component is optimized for entering sequences of
          digits. The most common application is for entering OTP or security
          codes.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
        <br />
        <ArticleSizes />
      </div>
    </div>
  )
}
