import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleMultipleNesting from './articles/ArticleMultipleNesting.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Nested Checkboxes</H1>
      <Paragraph>
        This component shows a checkboxField with children. All given descendant checkbox elements can control and
        become controlled by the main checkbox.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleMultipleNesting className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
