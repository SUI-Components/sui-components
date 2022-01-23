import {H1} from '@s-ui/documentation-library'

import ArticleInformation from './ArticleInformation.js'
import ArticleSemantic from './ArticleSemantic.js'

const BASE_CLASS_DEMO = 'DemoMoleculeButtonGroupField'

const DemoMoleculeButtonGroupField = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Button Group Field</H1>
        <ArticleInformation className={BASE_CLASS_DEMO} />
        <br />
        <ArticleSemantic className={BASE_CLASS_DEMO} />
      </div>
    </div>
  )
}

export default DemoMoleculeButtonGroupField
