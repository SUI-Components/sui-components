import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import MoleculeAvatar from '../../src/index.js'

const ArticleLoading = ({className}) => {
  return (
    <Article className={className}>
      <H2>Loading</H2>
      <Paragraph>
        The Avatar also has a <Code>isLoading</Code> (boolean) prop which
        displays its skeleton.
      </Paragraph>
      <MoleculeAvatar isLoading />
    </Article>
  )
}

ArticleLoading.propTypes = {
  className: PropTypes.string
}

export default ArticleLoading
