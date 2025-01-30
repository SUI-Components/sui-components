/* eslint-disable no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleVisuallyHidden from './articles/ArticleVisuallyHidden.js'
import ArticleA11y from './articles/ArticleA11y.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Visually Hidden</H1>
      <Paragraph>Hides content from the screen in an accessible way.</Paragraph>
      <Paragraph>
        Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
      </Paragraph>
      <Paragraph>
        It is useful in certain scenarios as an alternative to traditional labelling with aria-label or aria-labelledby
        and it is the logical opposite of the aria-hidden attribute.
      </Paragraph>
      <br />
      <ArticleVisuallyHidden className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
