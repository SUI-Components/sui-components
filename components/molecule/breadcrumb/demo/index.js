import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleCustomIcon from './ArticleCustomIcon.js'
import ArticleDefault from './ArticleDefaut.js'
import ArticleScrollable from './ArticleScrollable.js'
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
      </div>
    </div>
  )
}
