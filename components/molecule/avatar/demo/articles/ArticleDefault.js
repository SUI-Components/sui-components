import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeAvatar from '../../src/index.js'

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
