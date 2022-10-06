import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomInput from '@s-ui/react-atom-input'

import AtomHelpText from '../../src/index.js'
import {nodeText} from '../settings.js'

const ArticleInput = ({className}) => (
  <Article className={className}>
    <H2>Text</H2>
    <Paragraph>
      The prop <Code>text</Code> is used to set the text included in.
    </Paragraph>
    <AtomInput type="text" />
    <AtomHelpText text="Add something here to help your users" />
    <Paragraph>The component also admits a react node as a text</Paragraph>
    <AtomInput type="text" />
    <AtomHelpText text={nodeText} />
  </Article>
)

ArticleInput.propTypes = {
  className: PropTypes.string
}

export default ArticleInput
