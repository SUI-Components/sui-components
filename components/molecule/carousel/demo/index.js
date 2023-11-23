import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleControlled from './articles/ArticleControlled.js'
import ArticleCustomArrows from './articles/ArticleCustomArrows.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDynamicContent from './articles/ArticleDynamicContent.js'
import ArticleFullWidth from './articles/ArticleFullWidth.js'
import ArticleHandlers from './articles/ArticleHandlers.js'
import ArticleInfiniteLoop from './articles/ArticleInfiniteLoop.js'
import ArticleKeyboardNavigation from './articles/ArticleKeyboardNavigation.js'
import ArticleMultipleSlides from './articles/ArticleMultipleSlides.js'
import ArticlePreloadItems from './articles/ArticlePreloadItems.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>MoleculeCarousel</H1>
    <Paragraph>Minimalistic and smooth touch carousel component for React</Paragraph>
    <ArticleDefault className={CLASS_SECTION} />
    <br />
    <ArticleHandlers className={CLASS_SECTION} />
    <br />
    <ArticleControlled className={CLASS_SECTION} />
    <br />
    <ArticlePreloadItems className={CLASS_SECTION} />
    <br />
    <ArticleKeyboardNavigation className={CLASS_SECTION} />
    <br />
    <ArticleDynamicContent className={CLASS_SECTION} />
    <br />
    <ArticleInfiniteLoop className={CLASS_SECTION} />
    <br />
    <ArticleMultipleSlides className={CLASS_SECTION} />
    <br />
    <ArticleFullWidth className={CLASS_SECTION} />
    <br />
    <ArticleCustomArrows className={CLASS_SECTION} />
  </div>
)

export default Demo
