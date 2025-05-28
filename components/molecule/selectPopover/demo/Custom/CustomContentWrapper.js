import PropTypes from 'prop-types'

import MoleculeModal from '@s-ui/react-molecule-modal'

const CustomContentWrapper = ({actions, content, isOpen, id, setIsOpen}) => {
  return (
    <MoleculeModal isOpen={isOpen}>
      <MoleculeModal.Overlay />
      <MoleculeModal.Portal>
        <MoleculeModal.Content id={id}>
          <MoleculeModal.Header>
            <MoleculeModal.Title>Custom select popover</MoleculeModal.Title>
          </MoleculeModal.Header>
          <MoleculeModal.Body>
            <MoleculeModal.ScrollArea>
              <MoleculeModal.Description>choose the proper options</MoleculeModal.Description>
            </MoleculeModal.ScrollArea>
            {content}
          </MoleculeModal.Body>
          <MoleculeModal.Footer isInset>{actions}</MoleculeModal.Footer>
          <MoleculeModal.CloseTrigger>
            <MoleculeModal.CloseIconButton ariaLabel="close the modal" />
          </MoleculeModal.CloseTrigger>
        </MoleculeModal.Content>
      </MoleculeModal.Portal>
    </MoleculeModal>
  )
}

CustomContentWrapper.displayName = 'CustomContentWrapper'

CustomContentWrapper.propTypes = {
  actions: PropTypes.any,
  content: PropTypes.any,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

export default CustomContentWrapper
