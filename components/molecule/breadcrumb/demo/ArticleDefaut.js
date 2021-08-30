import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import MoleculeBreadcrumb from '../src/index'

const ArticleDefault = ({className, items, icon}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        MoleculeBreadcrumb must have valid <Code>items</Code>, which is an array
        of elements (object) with label and url.
      </Paragraph>
      <MoleculeBreadcrumb items={items} icon={icon} />
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
