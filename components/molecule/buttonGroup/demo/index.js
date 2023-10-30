import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDesign from './articles/ArticleDesign.js'
import ArticleMode from './articles/ArticleMode.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleSpaced from './articles/ArticleSpaced.js'
import ArticleVertical from './articles/ArticleVertical.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Button Group</H1>
      <Paragraph>
        MoleculeButtonGroup is a component that wraps a group of buttons,
        related in content.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleDesign className={CLASS_SECTION} />
      <br />
      <ArticleSize className={CLASS_SECTION} />
      <br />
      <ArticleSpaced className={CLASS_SECTION} />
      <br />
      <ArticleMode className={CLASS_SECTION} />
      <br />
      <ArticleVertical className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
