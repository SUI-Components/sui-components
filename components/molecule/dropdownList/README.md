# MoleculeDropdownList

`MoleculeDropdownList` is a composition of DropdownOptions

## Installation

```sh
$ npm install @s-ui/react-molecule-dropdown-list --save
```

## Usage

```js
import MoleculeDropdownList, {
  moleculeDropdownListSizes
} from '@s-ui/react-molecule-dropdown-list'

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

### Single & Multiple Handler Helpers

The package also provides an easy handler configuration for single or multiple selection behaviors

```js
import MoleculeDropdownList, { moleculeDropdownListSelectHandler } from '@s-ui/react-molecule-dropdown-list';
// Single
<MoleculeDropdownList
  visible={true}
  onSelect={moleculeDropdownListSelectHandler.single(
    {
      value: 'option1',
      onSelect: (event, {value, selected}) => console.log({value, selected})
    })
  }
>
  {countries.map((option, index) => (
    <MoleculeDropdownOption
      value={option}
      key={index}
    >
      {option}
    </MoleculeDropdownOption>
  ))}
</MoleculeDropdownList>
// Multiple
<MoleculeDropdownList
visible={true}
onSelect={moleculeDropdownListSelectHandler.multiple(
{
  value: ['option1', 'option2'],
  onSelect: (event, {value, selected}) => console.log({value, selected})
})
}
>
  {countries.map((option, index) => (
    <MoleculeDropdownOption
      value={option}
      key={index}
    >
      {option}
    </MoleculeDropdownOption>
  ))}
</MoleculeDropdownList>
```

> **Find full description and more examples in the [demo page](#).**
