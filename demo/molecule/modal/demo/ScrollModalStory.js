import {useState} from 'react'
import Lorem from 'react-lorem-component'
import Button from '../../../../components/atom/button'
import Modal, {
  MOLECULE_MODAL_SCROLL
} from '../../../../components/molecule/modal/src'

const ScrollModalStory = () => {
  const [scroll, setScroll] = useState('')
  const isOpen = !!scroll

  const handleClick = scroll => () => {
    setScroll(scroll)
  }

  const handleClose = () => {
    setScroll('')
  }

  return (
    <>
      {Object.values(MOLECULE_MODAL_SCROLL).map(scroll => (
        <Button key="scroll" onClick={handleClick(scroll)}>
          Open {scroll} modal
        </Button>
      ))}

      <Modal
        header="Title"
        isOpen={isOpen}
        scroll={scroll}
        onClose={handleClose}
        closeOnOutsideClick
        closeOnEscKeyDown
        isSimple
      >
        <Modal.Content>
          <Lorem count={10} />
        </Modal.Content>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </>
  )
}

export default ScrollModalStory
