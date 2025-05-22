import PropTypes from 'prop-types'

import {Article, Code, H2, H3} from '@s-ui/documentation-library'

import AtomButton from '@s-ui/react-atom-button'
import {CodeEditor} from '../utils/index.js'
import Modal from '../../src/index.js'

const components = {
  AtomButton,
  Modal
}

const demo = `
<Modal>
  <Modal.OpenTrigger>
    <AtomButton>open the dialog</AtomButton>
  </Modal.OpenTrigger>
  <Modal.Overlay />
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Modal.ScrollArea>
        <Modal.Description>Modal description</Modal.Description>
      </Modal.ScrollArea>
    </Modal.Body>
    <Modal.Footer>
      <Modal.CloseTrigger>
        <AtomButton>close the dialog</AtomButton>
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
      <H3>Modal.Overlay</H3>
      <p>The overlay slot that covers the screen when the dialog is open.</p>
      <H3>Modal.Content</H3>
      <p>The content slot that contains the dialog.</p>
      <H3>Modal.Header</H3>
      <p>The header slot that contains the title and close button.</p>
      <H3>Modal.Title</H3>
      <p>The title slot that contains the title of the dialog.</p>
      <H3>Modal.Body</H3>
      <p>The body slot that contains the content of the dialog.</p>
      <H3>Modal.Description</H3>
      <p>The description slot that contains the description of the dialog.</p>
      <H3>Modal.ScrollArea</H3>
      <p>The scroll area slot that contains the scrollable content of the dialog.</p>
      <H3>Modal.Footer</H3>
      <p>The footer slot that contains the actions of the dialog.</p>
      <H3>Modal.CloseIconButton</H3>
      <p>The close icon button slot that closes the dialog.</p>
      <CodeEditor scope={components} code={demo} />
    </Article>
  )
}

ArticleAPI.propTypes = {
  className: PropTypes.string
}

export default ArticleAPI
