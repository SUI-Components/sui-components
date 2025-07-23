/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y.js'
import ArticleButton from './articles/ArticleButton.js'
import ArticleColorDesign from './articles/ArticleColorDesign.js'
import ArticleCornerSize from './articles/ArticleCornerSize.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleElevation from './articles/ArticleElevation.js'
import ArticleInset from './articles/ArticleInset.js'
import ArticleKeyboardNavigation from './articles/ArticleKeyboardNavigation.js'
import ArticleLinkBox from './articles/ArticleLinkBox.js'
import ArticleWCAGGuidelines from './articles/ArticleWCAGGuidelines.js'
import {CLASS_SECTION} from './config.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Card</H1>
      <Paragraph>Container that groups related content and actions.</Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleColorDesign className={CLASS_SECTION} />
      <br />
      <ArticleElevation className={CLASS_SECTION} />
      <br />
      <ArticleCornerSize className={CLASS_SECTION} />
      <br />
      <ArticleInset className={CLASS_SECTION} />
      <br />
      <ArticleLinkBox className={CLASS_SECTION} />
      <br />
      <ArticleButton className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
      <br />
      <ArticleWCAGGuidelines className={CLASS_SECTION} />
      <br />
      <ArticleKeyboardNavigation className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
