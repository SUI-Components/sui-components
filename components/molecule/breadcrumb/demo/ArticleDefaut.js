import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeBreadcrumb from '../src/index.js'

const ArticleDefault = ({className, items}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        MoleculeBreadcrumb must have valid <Code>items</Code>, which is an array of elements (object) with label and
        url.
      </Paragraph>
      <MoleculeBreadcrumb aria-label="breadcrumb" items={items} />
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, url: PropTypes.string}))
}

export default ArticleDefault
