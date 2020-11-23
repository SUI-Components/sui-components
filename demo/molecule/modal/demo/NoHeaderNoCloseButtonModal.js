/* eslint react/prop-types: 0 */
import {Component} from 'react'
import MoleculeModal from '../../../../components/molecule/modal/src'
import {ContentWithCloseButton, LoremIpsumParagraph} from './helperComponents'

class NoHeaderNoCloseButtonModal extends Component {
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
          fitWindow
          onClose={this.handleCloseModal}
        >
          <ContentWithCloseButton>
            <LoremIpsumParagraph />
          </ContentWithCloseButton>
        </MoleculeModal>
      </div>
    )
  }
}

export default NoHeaderNoCloseButtonModal
