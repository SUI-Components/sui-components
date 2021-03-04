/* eslint react/prop-types: 0 */
/* eslint no-console: 0 */
import {useState} from 'react'
import MoleculeModal from '../../../../components/molecule/modal/src'
import {IconClose} from './helperComponents'
import Lorem from 'react-lorem-component'

const ContentlessModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Open modal
      </button>
      <MoleculeModal
        isOpen={isOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        iconClose={<IconClose />}
        header="Title"
        onClose={handleClose}
        isContentless
        fitContent
      >
        <MoleculeModal.Content>
          <Lorem count={30} />
        </MoleculeModal.Content>

        <MoleculeModal.Footer>Footer</MoleculeModal.Footer>
      </MoleculeModal>
    </>
  )
}

export default ContentlessModal
