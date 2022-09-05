import {H1, Paragraph} from '@s-ui/documentation-library'

import {CLASS_SECTION} from './settings.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleCustomChildren from './articles/ArticleCustomChildren.js'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>Image Editor</H1>
    <Paragraph>
      This component allows selecting an image (both from an existing public URL
      and by getting a blob object url from a local file), edit it, and then
      receive the edited image as a blob object to store it or send to any kind
      of service.
    </Paragraph>
    <ArticleDefault className={CLASS_SECTION} />
    <br />
    <ArticleCustomChildren className={CLASS_SECTION} />
  </div>
)

export default Demo
