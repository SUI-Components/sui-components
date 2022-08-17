import {H1, Paragraph} from '@s-ui/documentation-library'

import DefaultArticle from './articles/DefaultArticle.js'
import {CLASS_SECTION} from './config'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>PrimitivePortal</H1>
      <Paragraph>
        Renders a React subtree in a different part of the DOM.
      </Paragraph>
      <DefaultArticle className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
