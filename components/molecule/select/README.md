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
  moleculeSelectDropdownListSizes
} from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

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

## Create custom option compatible w/ `MoleculeSelect`

If you need an option that cannot be customized from `MoleculeDropdownOption` you can create your own option compatible w/ `MoleculeSelect` y `MoleculeAutosuggest` by using the `handlersFactory` method available in `MoleculeDropdownOption` that you can use to create proper handlers needed to work properly along w/ `MoleculeSelect` y `MoleculeAutosuggest`

```js
import React from 'react'
import {handlersFactory} from '@s-ui/react-molecule-dropdown-option'

const BASE_CLASS = 'AlternativeOption'

const AlternativeOption = ({children, onSelect, innerRef, value}) => {
  const {handleClick, handleKeyDown, handleFocus} = handlersFactory({
    value,
    onSelect
  })

  return (
    <div
      className={BASE_CLASS}
      ref={innerRef}
      tabIndex="0"
      onFocus={handleFocus}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
}

AlternativeOption.displayName = 'AlternativeOption'

AlternativeOption.defaultProps = {
  onSelect: () => {},
  innerRef: React.createRef()
}

export default AlternativeOption
```

so then you can do something like...

```js
<MoleculeSelect
  placeholder="Select an Option..."
  onChange={(_, {value}) => console.log(value)}
  iconArrowDown={<IconArrowDown />}
>
  {options.map((option, i) => (
    <AlternativeOption key={i} value={option}>
      {option}
    </AlternativeOption>
  ))}
</MoleculeSelect>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/select/demo).**