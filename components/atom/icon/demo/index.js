/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {Code, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y.js'
import ArticleColorInheritance from './articles/ArticleColorInheritance.js'
import ArticleColorsAndSizes from './articles/ArticleColorsAndSizes.js'
import ArticleLazy from './articles/ArticleLazy.js'
import ArticlePolymorphic from './articles/ArticlePolymorphic.js'
import ArticleSpan from './articles/ArticleSpan.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

export default function () {
  return (
    <div className="sui-StudioPreview">
      <H1>Icon</H1>
      <Paragraph>
        <Code>&#60;AtomIcon&#62;</Code> wraps a <Code>&#60;svg&#62;</Code> that follows the rules defined on the UX
        Definition and give you some colors, sizes and interesting features like lazy-load rendering.
      </Paragraph>
      <ArticleColorsAndSizes className={CLASS_SECTION} />
      <br />
      <ArticleColorInheritance className={CLASS_SECTION} />
      <br />
      <ArticlePolymorphic className={CLASS_SECTION} />
      <br />
      <ArticleLazy className={CLASS_SECTION} />
      <br />
      <ArticleSpan className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}
