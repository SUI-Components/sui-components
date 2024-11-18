# MoleculeDropdownList

`MoleculeDropdownList` is a composition of DropdownOptions

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/dropdownList/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,dropdownList)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-dropdown-list?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-dropdown-list)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AdropdownList&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AdropdownList)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-dropdown-list)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/dropdownList/LICENSE.md)

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
