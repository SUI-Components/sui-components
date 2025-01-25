/* eslint-disable no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleKeyboard from './articles/ArticleKeyboard.js'
import ArticleGuidelines from './articles/ArticleGuidelines.js'
import ArticleCombinations from './articles/ArticleCombinations.js'
import ArticleA11y from './articles/ArticleA11y.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Kbd</H1>
      <Paragraph>
        The keyboard key component exists to show which key or combination of keys performs a given action.
      </Paragraph>
      <br />
      <ArticleKeyboard className={CLASS_SECTION} />
      <br />
      <ArticleGuidelines className={CLASS_SECTION} />
      <br />
      <ArticleCombinations className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
