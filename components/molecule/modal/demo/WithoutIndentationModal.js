/* eslint react/prop-types: 0 */
import {Component} from 'react'
import MoleculeModal from 'components/molecule/modal/src'
import {
  Content,
  LoremIpsumParagraph,
  LoremPicsumImage,
  IconClose
} from './helperComponents'

class WithoutIndentationModal extends Component {
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
          floatingIconClose
          iconClose={<IconClose />}
          fitWindow
          withoutIndentation
          onClose={this.handleCloseModal}
        >
          <Content>
            <LoremPicsumImage />
            <LoremIpsumParagraph />
          </Content>
        </MoleculeModal>
      </div>
    )
  }
}

export default WithoutIndentationModal
