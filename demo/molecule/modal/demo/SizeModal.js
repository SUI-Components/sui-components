import {useState} from 'react'
import MoleculeModal, {
  MODAL_SIZES
} from '../../../../components/molecule/modal/src'

const SizeModal = () => {
  const [size, setSize] = useState('')
  const isOpen = !!size

  const handleClick = size => () => {
    setSize(size)
  }

  const handleClose = () => {
    setSize('')
  }

  return (
    <>
      {Object.values(MODAL_SIZES).map(size => (
        <button key={size} onClick={handleClick(size)}>
          Open {size} modal
        </button>
      ))}

      <MoleculeModal
        isOpen={isOpen}
        size={size}
        onClose={handleClose}
        closeOnOutsideClick
        closeOnEscKeyDown
        isContentless
      >
        <MoleculeModal.Content>Content</MoleculeModal.Content>
        <MoleculeModal.Footer>Footer</MoleculeModal.Footer>
      </MoleculeModal>
    </>
  )
}

export default SizeModal
