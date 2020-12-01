/* eslint react/prop-types: 0 */
/* eslint no-console: 0 */
import {Component} from 'react'
import MoleculeModal from '../../../../components/molecule/modal/src'
import {Content, LoremIpsumParagraph, IconClose} from './helperComponents'

class ScrollModal extends Component {
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
          onAnimationEnd={() =>
            console.log('demo animation end', this.state.open)
          }
          header={<strong>My new brand modal</strong>}
          onClose={this.handleCloseModal}
        >
          <Content>
            {[...Array(1).keys()].map(index => (
              <LoremIpsumParagraph key={index} />
            ))}
          </Content>
        </MoleculeModal>
      </div>
    )
  }
}

export default ScrollModal
