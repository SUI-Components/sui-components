/* eslint react/prop-types: 0 */
import {useState} from 'react'

import {MoleculeModalWithURLState} from 'components/molecule/modal/src/index.js'

import {Content, LoremIpsumParagraph} from './helperComponents.js'

const ModalWithUrlState = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Open modal
      </button>
      <MoleculeModalWithURLState
        isOpen={isOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        disableScroll={false}
        fitWindow
        header="My new brand modal"
        onClose={handleCloseModal}
        hash="ModalWithUrlState"
        openModalTrigger={handleOpenModal}
      >
        <Content>
          <LoremIpsumParagraph />
        </Content>
      </MoleculeModalWithURLState>
    </div>
  )
}

export default ModalWithUrlState
