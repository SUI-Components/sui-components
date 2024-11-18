# MoleculeModal

> Description

Modal windows focus users' attention to inform them about a specific interaction. They may require users to make a decision or warn them when an error may have very significant consequences.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/modal/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,modal)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-modal?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-modal)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Amodal&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Amodal)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-modal)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/modal/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-modal --save
```

## Usage

⚠️ By default, import will take `MoleculeModalWithAnimation`, if you want to import a speciffic modal, just use named imports.

Those are the named exports enabled:
- MoleculeModal
- MoleculeModalWithURLState
- MoleculeModalWithAnimation
- MoleculeModalWithoutAnimation

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
          header="My new brand modal"
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

### Usage with url state
```js
import {MoleculeModalWithURLState} from '@s-ui/react-molecule-modal'

const ContentWithCloseButton = ({children, onClose}) => (
  <div>
    {children}
    <button type="button" onClick={onClose}>
      close modal
    </button>
  </div>
)

const MODAL_HASH = 'myModal'

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
          Open modal with url state
        </button>
        <MoleculeModalWithURLState
          isOpen={this.state.open}
          closeOnOutsideClick
          closeOnEscKeyDown
          header="My new brand modal"
          iconClose={<IconClose />}
          onClose={this.closeModal}
          hash={MODAL_HASH}
          openModalTrigger={this.openModal}
        >
          <ContentWithCloseButton>
            <p>This is my modal content</p>
          </ContentWithCloseButton>
        </MoleculeModalWithURLState>
      </div>
    )
  }
}

return (<ModalWrapper />)
```


> **Find full description and more examples in the [demo page](#).**
