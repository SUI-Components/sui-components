/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y.js'
import ArticleAlignment from './articles/ArticleAlignment.js'
import ArticleColor from './articles/ArticleColor.js'
import ArticleDesign from './articles/ArticleDesign.js'
import ArticleDesignColor from './articles/ArticleDesignColor.js'
import ArticleElevation from './articles/ArticleElevation.js'
import ArticleKeyboardNavigation from './articles/ArticleKeyboardNavigation.js'
import ArticleLink from './articles/ArticleLink.js'
import ArticleNegative from './articles/ArticleNegative.js'
import ArticlePlayground from './articles/ArticlePlayground.js'
import ArticleShape from './articles/ArticleShape.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleSocialColor from './articles/ArticleSocialColor.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Button</H1>
      <Paragraph>A button means an operation. Clicking a button will trigger corresponding business logic.</Paragraph>
      <ArticleDesign className={CLASS_SECTION} />
      <br />
      <ArticleColor className={CLASS_SECTION} />
      <br />
      <ArticleSocialColor className={CLASS_SECTION} />
      <br />
      <ArticleDesignColor className={CLASS_SECTION} />
      <br />
      <ArticleNegative className={CLASS_SECTION} />
      <br />
      <ArticleSize className={CLASS_SECTION} />
      <br />
      <ArticleElevation className={CLASS_SECTION} />
      <br />
      <ArticleAlignment className={CLASS_SECTION} />
      <br />
      <ArticleShape className={CLASS_SECTION} />
      <br />
      <ArticleLink className={CLASS_SECTION} />
      <br />
      <ArticlePlayground className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
      <br />
      <ArticleKeyboardNavigation className={CLASS_SECTION} />
      <br />
    </div>
  )
}

export default Demo
