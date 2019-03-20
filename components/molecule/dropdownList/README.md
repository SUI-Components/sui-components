# MoleculeDropdownList

`MoleculeDropdownList` is a a composition of DropdownOptions

## Installation

```sh
$ npm install @s-ui/react-molecule-dropdown-list --save
```

## Usage

```js
import MoleculeDropdownList, { moleculeDropdownListSizes } from '@s-ui/react-molecule-dropdown-list'

const countries = [
  'Canary Islands',
  'Australia',
  'Northern Mariana Islands',
  'Equatorial Guinea'
]

```

### Basic usage

```js
<MoleculeDropdownList visible={true}>
  {countries.map((option, index) => (
    <MoleculeDropdownOption
      value={option}
      key={index}
      selected={option === 'Canary Islands'}
    >
      {option}
    </MoleculeDropdownOption>
  ))}
</MoleculeDropdownList>
```

### Specifying size
```js
<MoleculeDropdownList visible={true} size={moleculeDropdownListSizes.LARGE}>
  {countries.map((option, index) => (
    <MoleculeDropdownOption
      value={option}
      key={index}
      selected={option === 'Canary Islands'}
    >
      {option}
    </MoleculeDropdownOption>
  ))}
</MoleculeDropdownList>
```

### With `checkbox`
```js
<MoleculeDropdownList visible={true} checkbox>
  {countries.map((option, index) => (
    <MoleculeDropdownOption
      value={option}
      key={index}
      selected={option === 'Canary Islands'}
    >
      {option}
    </MoleculeDropdownOption>
  ))}
</MoleculeDropdownList>
```

> **Find full description and more examples in the [demo page](#).**