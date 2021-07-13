import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'

import MoleculeAvatar from '../src/index'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By default the <Code>MoleculeAvatar</Code> component adds a placeholder
        buddy icon.
      </Paragraph>
      <MoleculeAvatar />
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
