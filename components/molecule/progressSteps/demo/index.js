import {H1} from '@s-ui/documentation-library'

import DefaultProgressStepsArticle from './DefaultProgressStepsArticle'
import CustomIconsProgressStepsArticle from './CustomIconsProgressStepsArticle'
import VerticalProgressBarArticle from './VerticalProgressBarArticle'
import CompressedProgressBarArticle from './CompressedProgressBarArticle'
import JustifyContentProgressBarArticle from './JustifyContentProgressBarArticle'

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
