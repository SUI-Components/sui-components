import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'

import MoleculeBreadcrumb from '../src/index.js'

const ArticleDefault = ({className, items, icon}) => {
  return (
    <Article className={className}>
      <H2>Scrollable</H2>
      <Paragraph>
        Breadcrumb can avoid the line break using the <Code>isScrollable</Code>{' '}
        boolean prop.
      </Paragraph>
      <MoleculeBreadcrumb items={items} icon={icon} isScrollable />
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({label: PropTypes.string, url: PropTypes.string})
  ),
  icon: PropTypes.func
}

export default ArticleDefault
