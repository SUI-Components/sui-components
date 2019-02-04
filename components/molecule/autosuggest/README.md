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

### Managing State

#### Using the hoc `withDynamicOptions`

`MoleculeAutosuggest` offers a hoc that combined with other hoc from `@s-ui/hoc` can be used to simplify the use of this component with dinamyc suggestions based on the `value`

```js

import MoleculeAutosuggest, {withDynamicOptions} from '@s-ui/react-molecule-autosuggest'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import {withStateValue, withStateValueTags} from '@s-ui/hoc'

// some function that gets a `{query}` and returns asynchronoudly a list of values
import {getAsyncCountriesFromQuery} from './services'

const MoleculeAutosuggestWithDynamicOptions = withDynamicOptions(
  MoleculeAutosuggest,
  MoleculeAutosuggestOption
)(getAsyncCountriesFromQuery)


const MoleculeAutosuggestWithState = withStateValue(
  MoleculeAutosuggestWithDynamicOptions
)
```

so then, this can used like...

```js
<MoleculeAutosuggestWithState
  placeholder="Type a Country name..."
  onChange={(_, {value}) => console.log(value)}
  iconClear={<IconClose />}
/>
```


#### Custom component from `MoleculeAutosuggest` that handle State

`MoleculeAutosuggest` is a stateless component so to manage dynamic options we need to create a wrapper component that manages this and pass proper `props` and proper children (`MoleculeAutosuggestOption`) to `MoleculeAutosuggest`

Example:

```js
import React, {Component} from 'react'

import MoleculeAutosuggest from '@s-ui/react-molecule-autosuggest'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import {getAsyncCountriesFromQuery} from '../services'

export default class AutosuggestSingleWithAsyncOptions extends Component {
  state = {value: '', options: []}

  onChange = async (e, {value}) => {
    const options = await getAsyncCountriesFromQuery({query: value})
    this.setState({value, options})
  }

  render() {
    const {options, value} = this.state
    const {onChange, props} = this

    return (
      <MoleculeAutosuggest {...props} value={value} onChange={onChange}>
        {options.map((option, i) => (
          <MoleculeAutosuggestOption key={i} value={option}>
            {option}
          </MoleculeAutosuggestOption>
        ))}
      </MoleculeAutosuggest>
    )
  }
}

```

so then, this can used like...

```js
  const IconCloseTag = () => <span>x</span>  
  <AutosuggestSingleWithAsyncOptions iconClear={<IconClose />} />
```



> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/autosuggest/demo).**