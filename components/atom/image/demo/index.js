import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './article/ArticleDefault.js'
import ArticleFallbackImage from './article/ArticleFallbackImage.js'
import ArticleLazyImage from './article/ArticleLazyImage.js'
import ArticleLcpImage from './article/ArticleLcpImage.js'
import ArticlePlaceHolder from './article/ArticlePlaceHolder.js'
import ArticleSkeleton from './article/ArticleSkeleton.js'
import ArticleSpinner from './article/ArticleSpinner.js'
import ArticleViewport from './article/ArticleViewport.js'
import ArticleA11y from './article/ArticleA11y.js'

import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Image</H1>
      <Paragraph>
        AtomImage is a component that loads an image inside, maintaining all the accessibility attributes. This
        component can be set to show a placeholder image, a skeleton and/or a spinner while the final image is being
        loaded. This component will also show an Error Box if the image couldn't be loaded
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleLcpImage className={CLASS_SECTION} />
      <br />
      <ArticlePlaceHolder className={CLASS_SECTION} />
      <br />
      <ArticleSkeleton className={CLASS_SECTION} />
      <br />
      <ArticleFallbackImage className={CLASS_SECTION} />
      <br />
      <ArticleSpinner className={CLASS_SECTION} />
      <br />
      <ArticleViewport className={CLASS_SECTION} />
      <br />
      <ArticleLazyImage className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
