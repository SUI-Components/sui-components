# MoleculeSelectPopover

A component that shows a popover to select data.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/selectPopover/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,selectPopover)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-select-popover?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-select-popover)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AselectPopover&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AselectPopover)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-select-popover)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/selectPopover/LICENSE.md)

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