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
const IconClose = () => <span>X</span>

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  openModal = () =>  {
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
          open={this.state.open}
          centerVertically
          closeOnOutsideClick
          closeOnEscKeyDown
          iconClose={<IconClose />}
          fitWindow
          header={<strong>My new brand modal</strong>}
          onClose={this.closeModal}
        >
          <div>I'm a content</div>
        </MoleculeModal>
      </div>
    )
  }
}
return (<ModalWrapper />)
```


> **Find full description and more examples in the [demo page](#).**
