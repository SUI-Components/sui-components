# MoleculeSelectPopover

A component that shows a popover to select data.

## Installation

```sh
$ npm install @s-ui/react-molecule-select-popover --save
```

## Usage

### Basic usage
```js
import MoleculeSelectPopover from '@s-ui/react-molecule-select-popover'

return (      
  <MoleculeSelectPopover
    acceptButtonText="Aceptar"
    cancelButtonText="Cancelar"
    iconArrowDown={IconArrowDown}
    isSelected={isSelected}
    onAccept={() => setItems(unconfirmedItems)}
    onCancel={() => setUnconfirmedItems(items)}
    selectText={selectText}
  >
    {children}
  </MoleculeSelectPopover>)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/selectPopover/demo).**