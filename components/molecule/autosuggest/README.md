# MoleculeAutosuggest

`MoleculeAutosuggest` is an input that will display a list of suggestions while values are entered
It allows Single and Multiple Selection

## Installation

```sh
$ npm install @s-ui/react-molecule-autosuggest --save
```

## Usage

```js
import MoleculeAutosuggest, { MoleculeAutosuggestDropdownListSizes } from '@s-ui/react-molecule-autosuggest'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

const IconCloseTag = () => <span>x</span>  

const suggestions = ['John','Johnny']
```

### Single Selection

#### Basic usage
```js
 <MoleculeAutosuggest
  value={'Jo'}
>
  {suggestions.map((suggestion, i) => (
    <MoleculeAutosuggestOption key={i} value={suggestion}>
      {option}
    </MoleculeAutosuggestOption>
  ))}
</MoleculeAutosuggest>
```

#### Close List on Selection
```js
<MoleculeAutosuggest
  value={'Jo'}
  closeOnSelect
>
  {suggestions.map((suggestion, i) => (
    <MoleculeAutosuggestOption key={i} value={suggestion}>
      {option}
    </MoleculeAutosuggestOption>
  ))}
</MoleculeAutosuggest>
```

#### Large List
```js
<MoleculeAutosuggest
  value={'Jo'}
  closeOnSelect
  size={MoleculeAutosuggestDropdownListSizes.LARGE}
>
  {suggestions.map((suggestion, i) => (
    <MoleculeAutosuggestOption key={i} value={suggestion}>
      {option}
    </MoleculeAutosuggestOption>
  ))}
</MoleculeAutosuggest>
```

### Multiple Selection

#### Basic usage
```js
<MoleculeAutosuggest
  value={'Jo'}
  iconCloseTag={<IconCloseTag />}
  closeOnSelect
  multiselection
  size={MoleculeAutosuggestDropdownListSizes.LARGE}
>
  {suggestions.map((suggestion, i) => (
    <MoleculeAutosuggestOption key={i} value={suggestion}>
      {option}
    </MoleculeAutosuggestOption>
  ))}
</MoleculeAutosuggest>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/autosuggest/demo).**