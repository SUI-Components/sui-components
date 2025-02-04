import PropTypes from 'prop-types'

import {Article, Code, H2, H3, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'
import AtomLabel from '@s-ui/react-atom-label/lib'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomInput from '../../src/index.js'

const ArticleInlineForm = ({className}) => (
  <Article className={className}>
    <H2 deprecated>Inline Form</H2>
    <H3>Deprecated</H3>
    <Paragraph>
      Input have its own way of provide a submission using the <Code>button</Code> prop, you can pass a React node.
    </Paragraph>
    <PrimitiveVisuallyHidden>
      <AtomLabel htmlFor="inline-input" text="inline form input" />
    </PrimitiveVisuallyHidden>
    <AtomInput id="inline-input" button={<AtomButton>Send</AtomButton>} />
  </Article>
)

ArticleInlineForm.propTypes = {
  className: PropTypes.node
}

export default ArticleInlineForm
