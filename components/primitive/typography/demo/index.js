import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import {CLASS_SECTION} from './config.js'
import {useLorem} from './LoremIpsum.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDesign from './articles/ArticleDesign.js'
import ArticleLink from './articles/ArticleLink.js'
import ArticleStyles from './articles/ArticleStyles.js'
import ArticleIsBlurred from './articles/ArticleIsBlurred.js'

export default () => {
  const lorem = useLorem({format: 'plain', units: 'words', count: 50})
  const lorem5 = useLorem({format: 'plain', units: 'words', count: 5})
  return (
    <div className="sui-StudioPreview">
      <H1>PrimitiveTypography</H1>
      <Paragraph>
        PrimitiveTypography is an element capable of rendering a specified html
        tag or component when passed with the <Code>as</Code> property.
      </Paragraph>
      <ArticleDefault lorem={lorem} className={CLASS_SECTION} />
      <br />
      <ArticleDesign lorem={lorem5} className={CLASS_SECTION} />
      <br />
      <ArticleStyles lorem={lorem5} className={CLASS_SECTION} />
      <br />
      <ArticleLink lorem={lorem} className={CLASS_SECTION} />
      <br />
      <ArticleIsBlurred lorem={lorem} className={CLASS_SECTION} />
      <br />
    </div>
  )
}
