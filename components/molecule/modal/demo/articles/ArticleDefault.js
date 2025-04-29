import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import Modal from '../../src/index.js'
import LoremIpsum from '../utils/LoremIpsum.js'

const ArticleDefault = ({className}) => {
  const [paragraphs, setParagraphs] = useState(8)
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        By default the modal is uncontrolled, so it can be opened and closed by the user wrapping the Call to action
        Trigger with the <Code>Modal.OpenTrigger</Code> and <Code>Modal.CloseTrigger</Code> compound sub-components
        inside on the <Code>Modal</Code> context component.
      </Paragraph>
      <Modal>
        <Modal.OpenTrigger>
          <AtomButton>Open the Modal</AtomButton>
        </Modal.OpenTrigger>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{gap: 16}}>
            <Modal.ScrollArea>
              <Modal.Description as="div" style={{display: 'grid', flexFlow: 'column nowrap', gap: 16}}>
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
            <Modal.CloseTrigger>
              <AtomButton>Close the Modal</AtomButton>
            </Modal.CloseTrigger>
          </Modal.Footer>
          <Modal.CloseTrigger>
            <Modal.CloseIconButton ariaLabel="close the modal" />
          </Modal.CloseTrigger>
        </Modal.Content>
      </Modal>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
