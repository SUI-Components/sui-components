import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticlePlayground from './articles/ArticlePlayground.js'

const BASE_CLASS_DEMO = `DemoMoleculeStepper`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    <div className="sui-StudioPreview">
      <H1>MoleculeStepper</H1>
      <Paragraph>
        Steppers display progress through a sequence of logical and numbered
        steps. They may also be used for navigation. It provides a wizard-like
        workflow.
      </Paragraph>
      <ArticlePlayground className={CLASS_SECTION} />
    </div>
  )
}
