# MoleculeDropdownOption

`MoleculeDropdownOption` is a component that wraps a composition of checkbox + text. 

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

### With `checkbox` disabled
```js
import MoleculeDropdownOption from '@s-ui/react-molecule-dropdown-option'

return (
  <MoleculeDropdownOption value="option1" checkbox disabled>
    Option 1
  </MoleculeDropdownOption>
)
```

**Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/dropdownOption/demo).**