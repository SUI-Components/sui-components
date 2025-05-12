/* eslint-disable no-console */
import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleA11y from './ArticleA11y.js'
import ArticleDisabled from './ArticleDisabled.js'
import ArticleSize from './ArticleSize.js'
import ArticleStatus from './ArticleStatus.js'
import ArticleWithCustomCheckedIcon from './ArticleWithCustomCheckedIcon.js'
import ArticleWithHelpText from './ArticleWithHelpText.js'
import ArticleWithLabelFullWidth from './ArticleWithLabelFullWidth.js'

import './index.scss'

const CLASS_NAME = 'DemoAtomCheckboxField'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Checkbox Field</H1>
        <Paragraph>"MoleculeCheckboxField" is the combination of and "AtomCheckbox" and a "MoleculeField"</Paragraph>
        <ArticleWithHelpText className={CLASS_NAME} />
        <br />
        <ArticleWithLabelFullWidth className={CLASS_NAME} />
        <br />
        <ArticleSize className={CLASS_NAME} />
        <br />
        <ArticleStatus className={CLASS_NAME} />
        <br />
        <ArticleDisabled className={CLASS_NAME} />
        <br />
        <ArticleWithCustomCheckedIcon className={CLASS_NAME} />
        <br />
        <ArticleA11y className={CLASS_NAME} />
      </div>
    </div>
  )
}

export default Demo
