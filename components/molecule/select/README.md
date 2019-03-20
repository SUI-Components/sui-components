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
      placeholder="Select a Country..."
      onChange={(_, {value}) => console.log(value)}
      iconArrowDown={<IconArrowDown />}
    >
  {options.map((option, i) => (
    <MoleculeSelectOption key={i} value={option}>
      {option}
    </MoleculeSelectOption>
  ))}
</MoleculeSelect>
```

#### With default value
```js
<MoleculeSelect
      placeholder="Select a Country..."
      onChange={(_, {value}) => console.log(value)}
      iconArrowDown={<IconArrowDown />}
      value='John'
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
      placeholder="Select a Country..."
      onChange={(_, {value}) => console.log(value)}
      iconArrowDown={<IconArrowDown />}
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

## Managing State

### Custom component from `MoleculeSelect` that handle State

`MoleculeSelect` is a stateless component, so to manage dynamic options we need to create a wrapper component that manages this and pass proper `props` and proper children (`MoleculeSelectOption`) to `MoleculeSelect`

Example:

```js
import React, {Component} from 'react'

import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

const options = ['John','Paul','George','Ringo']

export default class SelectSingleWithAsyncOptions extends Component {
  state = {value: ''}

  onChange = async (e, {value}) => {
    this.setState({value})
  }

  render() {
    const {value} = this.state
    const {onChange, props} = this

    return (
      <MoleculeSelect {...props} value={value} onChange={onChange}>
        {options.map((option, i) => (
          <MoleculeSelectOption key={i} value={option}>
            {option}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelect>
    )
  }
}

```

so then, the `SelectSingleWithAsyncOptions` can used in this way...

```js
  <SelectSingleWithAsyncOptions iconClear={<IconClear />} />
```

### Using the hoc `withStateValue`

There's a hoc called `withStateValue` available at `@s-ui/hoc` 
that can be used to simplify the use of this component with internal state 

```js

import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import withDynamicOptions from './hoc/withDynamicOptions'
import {withStateValue} from '@s-ui/hoc'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)
const options = ['John','Paul','George','Ringo']

```

so then, the `MoleculeSelectWithState` can be used in this way...

```js
<MoleculeSelectWithState
  placeholder="Type a Country name..."
  onChange={(_, {value}) => console.log(value)}
  iconClear={<IconClear />}
>
  {options.map((option, i) => (
    <MoleculeSelectOption key={i} value={option}>
      {option}
    </MoleculeSelectOption>
  ))}
</MoleculeSelectWithState>
```

## Create custom option compatible w/ `MoleculeSelect`

If you need an option that cannot be customized from `MoleculeDropdownOption` you can create your own option compatible w/ `MoleculeSelect` y `MoleculeSelect` by using the `handlersFactory` method available in `MoleculeDropdownOption` that you can use to create proper handlers needed to work properly along w/ `MoleculeSelect` y `MoleculeSelect`

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