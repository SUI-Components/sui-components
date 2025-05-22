import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import Modal from '../../src/index.js'
import {getPhoto} from '../data/photos.js'
import {LoremIpsum} from '../utils/index.js'

const photo = getPhoto({id: 'NE0XGVKTmcA'})

const ArticleInset = ({className}) => {
  return (
    <Article className={className}>
      <H2>Inset</H2>
      <Paragraph>
        Sometimes the design requires to include a modal with no borders. This can be achieved by using the{' '}
        <Code>isInset</Code> boolean prop.
      </Paragraph>
      <Paragraph>
        Whenever no header needed visually, the <Code>Modal.Header</Code> MUST NEVER be removed. The
        PrimitiveVisuallyHidden component gives the opportunity to add it to the DOM without showing it to the user for
        preserving Accessibility structure.
      </Paragraph>
      <Modal>
        <Modal.OpenTrigger>
          <AtomButton>Open Modal Body Inset</AtomButton>
        </Modal.OpenTrigger>
        <Modal.Overlay />
        <Modal.Content>
          <PrimitiveVisuallyHidden>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
          </PrimitiveVisuallyHidden>
          <Modal.Body isInset>
            <img src={`${photo?.urls.small}`} alt={photo?.alt_description} style={{width: '100%', height: 'auto'}} />
            <Modal.ScrollArea isInset={false}>
              <Modal.Description as="div">
                <LoremIpsum count={8} />
              </Modal.Description>
            </Modal.ScrollArea>
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseTrigger>
              <AtomButton>Close the Modal</AtomButton>
            </Modal.CloseTrigger>
          </Modal.Footer>
          <Modal.CloseTrigger>
            <Modal.CloseIconButton />
          </Modal.CloseTrigger>
        </Modal.Content>
      </Modal>
      <Paragraph>Combine the isInset prop and the Scroll area to suit your proper design</Paragraph>
      <Modal>
        <Modal.OpenTrigger>
          <AtomButton>Open Modal Body Inset</AtomButton>
        </Modal.OpenTrigger>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body isInset>
            <Modal.ScrollArea isInset={false}>
              <img src={`${photo?.urls.small}`} alt={photo?.alt_description} style={{width: '100%', height: 'auto'}} />
              <Modal.Description as="div">
                <LoremIpsum count={8} />
              </Modal.Description>
            </Modal.ScrollArea>
          </Modal.Body>
          <Modal.Footer>
            <Modal.CloseTrigger>
              <AtomButton>Close the Modal</AtomButton>
            </Modal.CloseTrigger>
          </Modal.Footer>
          <Modal.CloseTrigger>
            <Modal.CloseIconButton />
          </Modal.CloseTrigger>
        </Modal.Content>
      </Modal>
    </Article>
  )
}

ArticleInset.propTypes = {
  className: PropTypes.string
}

export default ArticleInset
