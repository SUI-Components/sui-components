import PropTypes from 'prop-types'

import {Article, Code, H2, H3} from '@s-ui/documentation-library'

import Modal from '../../src/index.js'
import {CodeEditor} from '../../utils/index.js'

const components = {
  Modal
}

const demo = `
<Modal>
  <Modal.OpenTrigger>
    <button>open the dialog</button>
  </Modal.OpenTrigger>
  <Modal.Overlay />
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Modal.Description>Modal description</Modal.Description>
    </Modal.Body>
    <Modal.Footer>
      <Modal.CloseTrigger>
        <button>close the dialog</button>
      </Modal.CloseTrigger>
    </Modal.Footer>
    <Modal.CloseTrigger>
      <Modal.CloseIconButton />
    </Modal.CloseTrigger>
  </Modal.Content>
</Modal>
`

const ArticleAPI = ({className}) => {
  return (
    <Article className={className}>
      <H2>API Reference</H2>
      <H3>Modal</H3>
      <p>
        The <Code>Modal</Code> Root element contains all the parts of a dialog. React context of contained Modal
      </p>
      <H3>Modal.OpenTrigger</H3>
      <p>The trigger slot that opens the dialog.</p>
      <H3>Modal.CloseTrigger</H3>
      <p>The trigger slot that closes the dialog.</p>
      <CodeEditor scope={components} code={demo} />
    </Article>
  )
}

ArticleAPI.propTypes = {
  className: PropTypes.string
}

export default ArticleAPI
