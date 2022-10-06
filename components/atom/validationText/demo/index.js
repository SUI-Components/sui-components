import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleNodes from './articles/ArticleNodes.js'
import {CLASS_SECTION} from './settings.js'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Validation Text</H1>
      <Paragraph>
        Validation text is used for indicating whether the entered data is
        correct. It is provided by using the "Help Text" plus one color each.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleNodes className={CLASS_SECTION} />
    </div>
  )
}
