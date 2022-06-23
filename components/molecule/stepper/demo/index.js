import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleCustomStep from './articles/ArticleCustomStep.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDefaultStep from './articles/ArticleDefaultStep.js'
import ArticleDesignAlignment from './articles/ArticleDesignAlignment.js'
import ArticleIconsConnector from './articles/ArticleIconsConnector.js'
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
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleDesignAlignment className={CLASS_SECTION} />
      <br />
      <ArticleIconsConnector className={CLASS_SECTION} />
      <br />
      <H1>MoleculeStep</H1>
      <Paragraph>
        The package offers a default Step content but it can be customized also
        using the <Code>children</Code> prop of the <Code>Step</Code> component.
      </Paragraph>
      <Paragraph>It can be imported using:</Paragraph>
      <Paragraph>
        <Code>import {'{Step}'} from '@s-ui/react-molecule-stepper'</Code>
      </Paragraph>
      <ArticleDefaultStep className={CLASS_SECTION} />
      <br />
      <ArticleCustomStep className={CLASS_SECTION} />
      <br />
      <ArticlePlayground className={CLASS_SECTION} />
    </div>
  )
}
