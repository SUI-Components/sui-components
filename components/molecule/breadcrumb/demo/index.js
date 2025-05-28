import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleCustomIcon from './article/ArticleCustomIcon.js'
import ArticleDefault from './article/ArticleDefaut.js'
import ArticleScrollable from './article/ArticleScrollable.js'
import ArticleA11y from './article/ArticleA11y.js'
import ArticleKeyboardNavigation from './article/ArticleKeyboardNavigation.js'

import {breadcrumbItems, CLASS_SECTION} from './settings.js'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>BreadCrumb</H1>
        <Paragraph>
          Breadcrumbs, or a breadcrumb navigation, can help to enhance how users navigate to previous page levels of a
          website, especially if that website has many pages or products.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} items={breadcrumbItems} />
        <br />
        <ArticleScrollable className={CLASS_SECTION} items={breadcrumbItems} />
        <br />
        <ArticleCustomIcon className={CLASS_SECTION} items={breadcrumbItems} />
        <br />
        <ArticleA11y className={CLASS_SECTION} />
        <br />
        <ArticleKeyboardNavigation className={CLASS_SECTION} />
      </div>
    </div>
  )
}
