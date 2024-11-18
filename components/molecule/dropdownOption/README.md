# MoleculeDropdownOption

`MoleculeDropdownOption` is a component that wraps a composition of checkbox + text. 

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/dropdownOption/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,dropdownOption)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-dropdown-option?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-dropdown-option)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AdropdownOption&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AdropdownOption)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-dropdown-option)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/dropdownOption/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-dropdown-option --save
```

## Usage

### Basic usage
```js
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

return (
  <MoleculeDropdownOption value="option1">
    Option 1
  </MoleculeDropdownOption>
)
```

### With `checkbox`
```js
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

return (
  <MoleculeDropdownOption value="option1" checkbox>
    Option 1
  </MoleculeDropdownOption>
)
```

### With disabled
```js
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

return (
  <MoleculeDropdownOption value="option1" disabled>
    Option 1
  </MoleculeDropdownOption>
)
```

**Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/dropdownOption/demo).**