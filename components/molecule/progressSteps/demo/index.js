import {H1} from '@s-ui/documentation-library'

import DefaultProgressStepsArticle from './DefaultProgressStepsArticle.js'
import CustomIconsProgressStepsArticle from './CustomIconsProgressStepsArticle.js'
import VerticalProgressBarArticle from './VerticalProgressBarArticle.js'
import CompressedProgressBarArticle from './CompressedProgressBarArticle.js'
import JustifyContentProgressBarArticle from './JustifyContentProgressBarArticle.js'

import './index.scss'

const baseClass = 'DemoMoleculeProgressSteps'
const articleClass = `${baseClass}-article`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Progress Steps</H1>
        <DefaultProgressStepsArticle className={articleClass} />
        <br />
        <VerticalProgressBarArticle className={articleClass} />
        <br />
        <CompressedProgressBarArticle className={articleClass} />
        <br />
        <CustomIconsProgressStepsArticle className={articleClass} />
        <br />
        <JustifyContentProgressBarArticle className={articleClass} />
        <br />
      </div>
    </div>
  )
}

export default Demo
