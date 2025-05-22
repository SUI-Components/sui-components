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

```js
import MoleculeModal from '@s-ui/react-molecule-modal'

const Foo = () => {
  return (
    <MoleculeModal>
      <MoleculeModal.OpenTrigger>
        <button>open the dialog</button>
      </MoleculeModal.OpenTrigger>
      <MoleculeModal.Content>
        <MoleculeModal.Header>
          <MoleculeModal.Title>Modal title</MoleculeModal.Title>
        </MoleculeModal.Header>
        <MoleculeModal.Body>
          <MoleculeModal.ScrollArea>
            <MoleculeModal.Description>Modal description</MoleculeModal.Description>
          </MoleculeModal.ScrollArea>
        </MoleculeModal.Body>
        <MoleculeModal.Footer>
          <MoleculeModal.CloseTrigger>
            <button>close the dialog</button>
          </MoleculeModal.CloseTrigger>
        </MoleculeModal.Footer>
        <MoleculeModal.CloseTrigger>
          <MoleculeModal.CloseIconButton />
        </MoleculeModal.CloseTrigger>
      </MoleculeModal.Content>
    </MoleculeModal>
  )
}
```
