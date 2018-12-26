# MoleculeSelect

`MoleculeSelect` is a customized `select` created from a combination of `AtomInput`, `MoleculeInputTags`, `MoleculeDropdownList` and `MoleculeDropdownOption`

It allows Single and Multiple Selection

## Installation

```sh
$ npm install @s-ui/react-molecule-select --save
```

## Usage

```js
import MoleculeSelect, {
  moleculeSelectDropdownListSizes,
  MoleculeSelectOption
} from '@s-ui/react-molecule-select'

const IconCloseTag = () => <span>x</span>  
const IconArrowDown = () => <span>▼</span>  

const options = ['John','Paul','George','Ringo']
```

### Single Selection

#### Basic usage
```js
 <MoleculeSelect
  iconCloseTag={<IconCloseTag />}
  iconArrowDown={<IconArrowDown />}
  value={'Paul'}
>
  {options.map((option, i) => (
    <MoleculeSelectOption key={i} value={option}>
      {option}
    </MoleculeSelectOption>
  ))}
</MoleculeSelect>
```

#### Close List on Selection
```js
 <MoleculeSelect
  iconCloseTag={<IconCloseTag />}
  iconArrowDown={<IconArrowDown />}
  value={'Paul'}
  closeOnSelect
>
  {options.map((option, i) => (
    <MoleculeSelectOption key={i} value={option}>
      {option}
    </MoleculeSelectOption>
  ))}
</MoleculeSelect>
```

#### Large List
```js
 <MoleculeSelect
  iconCloseTag={<IconCloseTag />}
  iconArrowDown={<IconArrowDown />}
  value={'Paul'}
  closeOnSelect
  size={moleculeSelectDropdownListSizes.LARGE}
>
  {options.map((option, i) => (
    <MoleculeSelectOption key={i} value={option}>
      {option}
    </MoleculeSelectOption>
  ))}
</MoleculeSelect>
```

### Multiple Selection

#### Basic usage
```js
 <MoleculeSelect
  iconCloseTag={<IconCloseTag />}
  iconArrowDown={<IconArrowDown />}
  multiselection
  value={['John','Paul']}
>
  {options.map((option, i) => (
    <MoleculeSelectOption key={i} value={option}>
      {option}
    </MoleculeSelectOption>
  ))}
</MoleculeSelect>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/select/demo).**