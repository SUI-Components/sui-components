import PropTypes from 'prop-types'

import {
  Article,
  Button,
  Code,
  H2,
  H3,
  Paragraph
} from '@s-ui/documentation-library'

import AtomInput from '../../src/index.js'

const ArticleInlineForm = ({className}) => (
  <Article className={className}>
    <H2 deprecated>Inline Form</H2>
    <H3>Deprecated</H3>
    <Paragraph>
      Input have its own way of provide a submision using the{' '}
      <Code>button</Code> prop, you can pass a React node.
    </Paragraph>
    <AtomInput
      button={<Button style={{height: '100%', borderRadius: 0}}>Send</Button>}
    />
  </Article>
)

ArticleInlineForm.propTypes = {
  className: PropTypes.string
}

ArticleInlineForm.displayName = 'ArticleInlineForm'

export default ArticleInlineForm
