import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import Modal from '../../src/index.js'
import {LoremIpsum} from '../utils/index.js'

const ArticleControlled = ({className}) => {
  const [isOpen, setIsOpen] = useState(undefined)
  const fieldToFocus = useRef()
  const [paragraphs, setParagraphs] = useState(8)
  return (
    <Article className={className}>
      <H2>Controlled and Uncontrolled</H2>
      <Paragraph>
        MoleculeModal can be managed under the <Code>isOpen</Code> boolean prop when it's necessary for controlled mode
        not requiring the <Code>Modal.OpenTrigger</Code> or <Code>Modal.CloseTrigger</Code> compound sub-comonents.
      </Paragraph>
      <Paragraph>
        The Modal has also an <Code>onOpenChange</Code> handler in order to manage the isOpen state of the modal when
        clicking outside of it (on the <Code>Modal.Overlay</Code> sub-component).
      </Paragraph>
      <AtomButton
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        Open the Modal
      </AtomButton>
      <Modal isOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <Modal.Overlay />
        <Modal.Content
          onOpenAutoFocus={e => {
            e.preventDefault()
            fieldToFocus.current?.focus()
          }}
        >
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{gap: 16}}>
            <Modal.ScrollArea isInset>
              <Modal.Description as="div">
                <LoremIpsum count={paragraphs} />
              </Modal.Description>
            </Modal.ScrollArea>
            <div style={{display: 'flex', gap: 8}}>
              <AtomButton
                onClick={() => {
                  setParagraphs(paragraphs + 1)
                }}
                style={{flexGrow: 1}}
              >
                Add paragraph
              </AtomButton>
              <AtomButton
                style={{flexGrow: 1}}
                onClick={() => {
                  setParagraphs(paragraphs - 1)
                }}
                disabled={paragraphs <= 1}
              >
                Remove paragraph
              </AtomButton>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <AtomButton onClick={() => setIsOpen(!isOpen)} ref={fieldToFocus}>
              Close the Modal
            </AtomButton>
          </Modal.Footer>
          <Modal.CloseIconButton
            ariaLabel="close the modal"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        </Modal.Content>
      </Modal>
      <Paragraph>
        The <Code>Modal.Content</Code> has also an <Code>onOpenAutoFocus</Code>, <Code>onCloseAutoFocus</Code> and{' '}
        <Code>onEscapeKeyDown</Code> handler in order to manage the proper focuses when teh modal is opened or closed.
      </Paragraph>
      <Paragraph>
        In the previous example the close trigger button is focused when the modal is opened and the focus is returned
        to the button that opened the modal when it is closed.
      </Paragraph>
    </Article>
  )
}

ArticleControlled.propTypes = {
  className: PropTypes.string
}

export default ArticleControlled
