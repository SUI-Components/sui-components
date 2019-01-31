# MoleculeModal

> Description

Modal windows focus users' attention to inform them about a specific interaction. They may require users to make a decision or warn them when an error may have very significant consequences.


## Installation

```sh
$ npm install @s-ui/react-molecule-modal --save
```

## Usage

### Basic usage
```js
import MoleculeModal from '@s-ui/react-molecule-modal'

const ContentWithCloseButton = ({children, onClose}) => (
  <div>
    {children}
    <button type="button" onClick={onClose}>
      close modal
    </button>
  </div>
)

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  openModal = () => {
    this.setState({
      open: true
    })
  }

  closeModal = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Open modal
        </button>
        <MoleculeModal
          isOpen={this.state.open}
          closeOnOutsideClick
          closeOnEscKeyDown
          header={<strong>My new brand modal</strong>}
          iconClose={<IconClose />}
          onClose={this.closeModal}
        >
          <ContentWithCloseButton>
            <p>This is my modal content</p>
          </ContentWithCloseButton>
        </MoleculeModal>
      </div>
    )
  }
}

return (<ModalWrapper />)
```


> **Find full description and more examples in the [demo page](#).**
