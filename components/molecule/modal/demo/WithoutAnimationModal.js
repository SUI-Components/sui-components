/* eslint react/prop-types: 0 */
/* eslint no-console: 0 */
import {Component} from 'react'
import {MoleculeModalWithoutAnimation} from 'components/molecule/modal/src'
import {Content, LoremIpsumParagraph, IconClose} from './helperComponents'

class WithoutAnimationModal extends Component {
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
        <MoleculeModalWithoutAnimation
          isOpen={this.state.open}
          closeOnOutsideClick
          closeOnEscKeyDown
          iconClose={<IconClose />}
          fitWindow
          header="My new brand modal"
          onClose={this.handleCloseModal}
        >
          <Content>
            {[...Array(1).keys()].map(index => (
              <LoremIpsumParagraph key={index} />
            ))}
          </Content>
        </MoleculeModalWithoutAnimation>
      </div>
    )
  }
}

export default WithoutAnimationModal
