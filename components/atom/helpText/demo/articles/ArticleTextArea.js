import PropTypes from 'prop-types'

import {Article, H2} from '@s-ui/documentation-library'
import AtomTextarea from '@s-ui/react-atom-textarea'

import AtomHelpText from '../../src/index.js'

const ArticleTextArea = ({className}) => (
  <Article className={className}>
    <H2>Text-area</H2>
    <AtomTextarea placeholder="Write something cool here..." />
    <AtomHelpText text="Additional information for your textarea input" />
  </Article>
)

ArticleTextArea.propTypes = {
  className: PropTypes.string
}

export default ArticleTextArea
