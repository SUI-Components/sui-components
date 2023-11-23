/* eslint-disable no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleCustomIcons from './articles/ArticleCustomIcons.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDisabled from './articles/ArticleDisabled.js'
import ArticlePlayground from './articles/ArticlePlayground.js'
import ArticleSizes from './articles/ArticleSizes.js'
import ArticleStatus from './articles/ArticleStatus.js'
import ArticleValues from './articles/ArticleValues.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Checkbox</H1>
      <Paragraph>
        The Checkbox component is used in forms when a user needs to select multiple values from several options.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleSizes className={CLASS_SECTION} />
      <br />
      <ArticleValues className={CLASS_SECTION} />
      <br />
      <ArticleDisabled className={CLASS_SECTION} />
      <br />
      <ArticleStatus className={CLASS_SECTION} />
      <br />
      <ArticleCustomIcons className={CLASS_SECTION} />
      <br />
      <ArticlePlayground className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
