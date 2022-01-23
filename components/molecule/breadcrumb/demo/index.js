import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './ArticleDefaut.js'
import ArticleScrollable from './ArticleScrollable.js'

const BASE_CLASS_DEMO = `DemoAtomValidationCode`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" d="M0,0h24v24H0V0z" />
    <path d="M16.6,12l-8.2,8.2c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L15,12L7.6,4.6C7.4,4.4,7.4,4,7.6,3.8	c0.2-0.2,0.6-0.2,0.8,0L16.6,12z" />
  </svg>
)

const breadcrumbItems = [
  {
    label: 'accusantium',
    url: '#'
  },
  {
    label: 'et quibusdam',
    url: '#'
  },
  {
    label: 'dolores vitae',
    url: '#'
  },
  {
    label: 'reprehenderit',
    url: '#'
  },
  {
    label: 'ullam hic',
    url: '#'
  },
  {
    label: 'current section'
  }
]

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>BreadCrumb</H1>
        <Paragraph>
          Breadcrumbs, or a breadcrumb navigation, can help to enhance how users
          navigate to previous page levels of a website, especially if that
          website has many pages or products.
        </Paragraph>
        <ArticleDefault
          className={CLASS_SECTION}
          items={breadcrumbItems}
          icon={ArrowRight}
        />
        <br />
        <ArticleScrollable
          className={CLASS_SECTION}
          items={breadcrumbItems}
          icon={ArrowRight}
        />
        <br />
      </div>
    </div>
  )
}
