import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeBreadcrumb from '../src/index.js'

const ArticleScrollable = ({className, items}) => {
  return (
    <Article className={className}>
      <H2>Scrollable</H2>
      <Paragraph>
        Breadcrumb can avoid the line break using the <Code>isScrollable</Code> boolean prop.
      </Paragraph>
      <MoleculeBreadcrumb ariaLabelText="breadcrumb" items={items} isScrollable />
    </Article>
  )
}

ArticleScrollable.displayName = 'ArticleScrollable'

ArticleScrollable.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, url: PropTypes.string}))
}

export default ArticleScrollable
