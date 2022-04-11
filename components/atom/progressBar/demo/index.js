import {H1, Paragraph} from '@s-ui/documentation-library'

import {CLASS_SECTION} from './settings.js'
import ArticleTypes from './articles/ArticleTypes.js'
import ArticleLinearDefault from './articles/ArticleLinearDefault.js'
import ArticleCircleDefault from './articles/ArticleCircleDefault.js'
import ArticleLinearDoubleDefault from './articles/ArticleLinearDoubleDefault.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Progress Bar</H1>
      <Paragraph>
        A Progress bar is a visual representation of a specified wait time or
        the current status of a process.
      </Paragraph>
      <ArticleTypes className={CLASS_SECTION} />
      <br />
      <ArticleLinearDefault className={CLASS_SECTION} />
      <br />
      <ArticleCircleDefault className={CLASS_SECTION} />
      <br />
      <ArticleLinearDoubleDefault className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
