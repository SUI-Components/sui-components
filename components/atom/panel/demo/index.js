import {H1, Paragraph} from '@s-ui/documentation-library'
const BASE_CLASS_DEMO = `DemoAtomPinInput`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

import ArticleDefault from './ArticleDefault'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Panel</H1>
        <Paragraph>
          Just a background for your component, can be a color or an image with background/overlay
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
      </div>
    </div>
  )
}
