import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y'
import ArticleFontSize from './articles/ArticleFontSize'
import ArticleInline from './articles/ArticleInline'
import ArticleType from './articles/ArticleType'
import {CLASS_SECTION} from './settings'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Label</H1>
      <Paragraph>
        The Label is the name of the associated field, that explains what is the about. It should be clear, concise and
        short.
      </Paragraph>
      <ArticleType className={CLASS_SECTION} />
      <br />
      <ArticleInline className={CLASS_SECTION} />
      <br />
      <ArticleFontSize className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
