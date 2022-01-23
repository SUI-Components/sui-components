import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './ArticleDefault.js'
import ArticleOffset from './ArticleOffset.js'
import ArticleResponsive from './ArticleResponsive.js'
import ArticleIsGapless from './ArticleIsGapless.js'
import ArticleGutter from './ArticleGutter.js'
import ArticleCombine from './ArticleCombine.js'
import ArticleJustifyContent from './ArticleJustifyContent.js'
import ArticleAlignItems from './ArticleAlignItems.js'
import ArticleAlignContent from './ArticleAlignContent.js'

const BASE_CLASS_DEMO = `DemoLayoutGrid`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => (
  <div className="sui-StudioPreview">
    <H1>Grid</H1>
    <Paragraph>
      Layout grids are used for design projects that have as little as one page
      or as many as hundreds. The @s-ui grid creates visual consistency between
      multiple layouts.
    </Paragraph>
    <ArticleDefault classname={CLASS_SECTION} />
    <br />
    <ArticleResponsive classname={CLASS_SECTION} />
    <br />
    <ArticleOffset classname={CLASS_SECTION} />
    <br />
    <ArticleIsGapless classname={CLASS_SECTION} />
    <br />
    <ArticleGutter classname={CLASS_SECTION} />
    <br />
    <ArticleCombine classname={CLASS_SECTION} />
    <br />
    <ArticleJustifyContent classname={CLASS_SECTION} />
    <br />
    <ArticleAlignItems classname={CLASS_SECTION} />
    <br />
    <ArticleAlignContent classname={CLASS_SECTION} />
    <br />
  </div>
)
