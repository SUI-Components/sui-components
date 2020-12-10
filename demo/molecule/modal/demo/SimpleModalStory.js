import {useState} from 'react'
import {IconClose} from './helperComponents'
import Button from '../../../../components/atom/button'
import Modal from '../../../../components/molecule/modal/src'

const SimpleModalStory = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={handleClick}>Open</Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        closeOnOutsideClick
        closeOnEscKeyDown
        isSimple
      >
        <Modal.Header close={<Modal.Close icon={<IconClose />} />}>
          Content
        </Modal.Header>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </>
  )
}

export default SimpleModalStory
