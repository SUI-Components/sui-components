import {Anchor, Code, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleInformation from './ArticleInformation.js'
import ArticleSemantic from './ArticleSemantic.js'

const BASE_CLASS_DEMO = 'DemoMoleculeButtonGroupField'

const DemoMoleculeButtonGroupField = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Button Group Field</H1>
      <Paragraph>
        <Code>MoleculeButtonGroupField</Code> is the combination of and{' '}
        <Anchor href="/workbench/molecule/buttonGroup">
          <Code>MoleculeButtonGroup</Code>
        </Anchor>{' '}
        and a{' '}
        <Anchor href="/workbench/molecule/field">
          <Code>MoleculeField</Code>
        </Anchor>
      </Paragraph>
      <ArticleInformation className={BASE_CLASS_DEMO} />
      <br />
      <ArticleSemantic className={BASE_CLASS_DEMO} />
    </div>
  )
}

export default DemoMoleculeButtonGroupField
