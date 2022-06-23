import {H1} from '@s-ui/documentation-library'

import CompressedProgressBarArticle from './CompressedProgressBarArticle.js'
import ContentTypeProgressStepsArticle from './ContentTypeProgressStepsArticle.js'
import CustomIconsProgressStepsArticle from './CustomIconsProgressStepsArticle.js'
import DefaultProgressStepsArticle from './DefaultProgressStepsArticle.js'
import JustifyContentProgressBarArticle from './JustifyContentProgressBarArticle.js'
import OnChangeHandlerProgressStepsArticle from './OnChangeHandlerProgressStepsArticle.js'
import VerticalProgressBarArticle from './VerticalProgressBarArticle.js'

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
        <ContentTypeProgressStepsArticle className={articleClass} />
        <br />
        <OnChangeHandlerProgressStepsArticle className={articleClass} />
        <br />
      </div>
    </div>
  )
}

export default Demo
