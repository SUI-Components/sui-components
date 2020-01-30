/* eslint react/prop-types: 0 */
import React from 'react'
import MoleculeModal from '../../../../components/molecule/modal/src'
import {
  Content,
  ScrollableLoremIpsumParagraph,
  LoremIpsumParagraph,
  IconClose
} from './helperComponents'

class ScrollableChildrenModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpenModal = () => {
    this.setState({
      open: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleOpenModal}>
          Open modal
        </button>
        <MoleculeModal
          isOpen={this.state.open}
          closeOnOutsideClick
          closeOnEscKeyDown
          enableContentScroll
          iconClose={<IconClose />}
          fitWindow
          header={<strong>My new brand modal</strong>}
          onClose={this.handleCloseModal}
        >
          <Content>
            <ScrollableLoremIpsumParagraph />
            <LoremIpsumParagraph />
          </Content>
        </MoleculeModal>
      </div>
    )
  }
}

export default ScrollableChildrenModal
