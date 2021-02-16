/* eslint react/prop-types: 0 */
import {useState} from 'react'
import {MoleculeModalWithUrlState} from '../../../../components/molecule/modal/src'
import {Content, LoremIpsumParagraph, IconClose} from './helperComponents'

const ModalWithUrlState = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Open modal
      </button>
      <MoleculeModalWithUrlState
        isOpen={isOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        disableScroll={false}
        iconClose={<IconClose />}
        fitWindow
        header="My new brand modal"
        onClose={handleCloseModal}
        hash="ModalWithUrlState"
        openModalTrigger={handleOpenModal}
      >
        <Content>
          <LoremIpsumParagraph />
        </Content>
      </MoleculeModalWithUrlState>
    </div>
  )
}

export default ModalWithUrlState
