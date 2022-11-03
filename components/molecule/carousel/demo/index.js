import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './articles/ArticleDefault.js'
import ArticleHandlers from './articles/ArticleHandlers.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>MoleculeCarousel</H1>
    <Paragraph>
      Minimalistic and smooth touch carousel component for React
    </Paragraph>
    <ArticleDefault className={CLASS_SECTION} />
    <br />
    <ArticleHandlers className={CLASS_SECTION} />
  </div>
)

export default Demo
