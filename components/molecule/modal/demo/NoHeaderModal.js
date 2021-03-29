/* eslint react/prop-types: 0 */
import {Component} from 'react'
import MoleculeModal from 'components/molecule/modal/src'
import {Content, LoremIpsumParagraph, IconClose} from './helperComponents'

class NoHeaderModal extends Component {
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
          iconClose={<IconClose />}
          fitWindow
          onClose={this.handleCloseModal}
        >
          <Content>
            <LoremIpsumParagraph />
          </Content>
        </MoleculeModal>
      </div>
    )
  }
}

export default NoHeaderModal
