/* eslint-disable no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleCheckbox from './articles/ArticleCheckbox.js'
import ArticleInput from './articles/ArticleInput.js'
import ArticleTextArea from './articles/ArticleTextArea.js'
import ArticleA11y from './articles/ArticleA11y.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Help text</H1>
      <Paragraph>
        Help Text is a feedback that the system gives users to make them clearly understand which information is
        required
      </Paragraph>
      <ArticleInput className={CLASS_SECTION} />
      <br />
      <ArticleTextArea className={CLASS_SECTION} />
      <br />
      <ArticleCheckbox className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
