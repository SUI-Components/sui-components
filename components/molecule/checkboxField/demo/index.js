/* eslint-disable no-console */
import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleAlertHelpText from './ArticleAlertHelpText.js'
import ArticleDisabled from './ArticleDisabled.js'
import ArticleErrorHelpText from './ArticleErrorHelpText.js'
import ArticleSuccessHelpText from './ArticleSuccessHelpText.js'
import ArticleWithHelpText from './ArticleWithHelpText.js'
import ArticleWithLabelFullWidth from './ArticleWithLabelFullWidth.js'

import './index.scss'

const CLASS_NAME = 'DemoAtomCheckboxField'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Checkbox Field</H1>
        <Paragraph>
          "MoleculeCheckboxField" is the combination of and "AtomCheckbox" and a
          "MoleculeField"
        </Paragraph>
        <ArticleWithHelpText className={CLASS_NAME} />
        <br />
        <ArticleWithLabelFullWidth className={CLASS_NAME} />
        <br />
        <ArticleSuccessHelpText className={CLASS_NAME} />
        <br />
        <ArticleErrorHelpText className={CLASS_NAME} />
        <br />
        <ArticleAlertHelpText className={CLASS_NAME} />
        <br />
        <ArticleDisabled className={CLASS_NAME} />
      </div>
    </div>
  )
}

export default Demo
