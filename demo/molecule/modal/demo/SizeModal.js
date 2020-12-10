import {useState} from 'react'
import Button from '../../../../components/atom/button'
import Modal, {MODAL_SIZES} from '../../../../components/molecule/modal/src'

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
        <Button key="size" onClick={handleClick(size)}>
          Open {size} modal
        </Button>
      ))}

      <Modal
        isOpen={isOpen}
        size={size}
        onClose={handleClose}
        closeOnOutsideClick
        closeOnEscKeyDown
        isContentless
      >
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </>
  )
}

export default SizeModal
