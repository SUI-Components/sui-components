/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleAnimation from './ArticleAnimation.js'
import ArticleCount from './ArticleCount.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleSize from './ArticleSize.js'
import ArticleVariant from './ArticleVariant.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Skeleton</H1>
        <Paragraph>Skeleton is used to display the loading state of a component while avoiding layout shift.</Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
        <br />
        <ArticleVariant className={CLASS_SECTION} />
        <br />
        <ArticleSize className={CLASS_SECTION} />
        <br />
        <ArticleAnimation className={CLASS_SECTION} />
        <br />
        <ArticleCount className={CLASS_SECTION} />
        <br />
      </div>
    </div>
  )
}

export default Demo
