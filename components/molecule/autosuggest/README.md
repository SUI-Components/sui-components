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
const IconClear = () => <span>x</span>  

const suggestions = ['John','Johnny']
```

### Single Selection

#### Basic usage
```js
 <MoleculeAutosuggest
  value={'Jo'}
  placeholder="Select an option..."
  iconClear={<IconClose />}
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
  placeholder="Select an option..."
  iconClear={<IconClose />}
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
  placeholder="Select some options..."
  iconCloseTag={<IconCloseTag />}
  iconClear={<IconClear />}
  multiselection
>
  {suggestions.map((suggestion, i) => (
    <MoleculeAutosuggestOption key={i} value={suggestion}>
      {option}
    </MoleculeAutosuggestOption>
  ))}
</MoleculeAutosuggest>
```

### Managing State

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

so then, the `AutosuggestSingleWithAsyncOptions` can used in this way...

```js
  <AutosuggestSingleWithAsyncOptions iconClear={<IconClear />} />
```

#### Using an hoc like `withDynamicOptions`

It can be useful creating a hoc (like the one `withDynamicOptions` available in the demo) that combined with other hoc from `@s-ui/hoc` can be used to simplify the use of this component with dinamyc suggestions based on the `value`

**`withDynamicOptions`**
```js
import React, {Component} from 'react'

export default (BaseComponent, BaseChildComponent) => getDynamicOptions => {
  const displayName = BaseComponent.displayName

  return class withDynamicOptions extends Component {
    static displayName = `withDynamicOptions(${displayName})`

    state = { options: []}

    async componentDidUpdate({value: prevQuery}) {
      const {value: query} = this.props
      if (query !== prevQuery) {
        const options = await getDynamicOptions({query})
        this.setState({options}) // eslint-disable-line
      }
    }

    render() {
      const {props} = this
      const {options} = this.state
      return (
        <BaseComponent {...props}>
          {options.map((option, i) => (
            <BaseChildComponent key={i} value={option}>
              {option}
            </BaseChildComponent>
          ))}
        </BaseComponent>
      )
    }
  }
}

```

use of `withDynamicOptions` for creating a stateful version of `MoleculeAutosuggest`
```js

import MoleculeAutosuggest from '@s-ui/react-molecule-autosuggest'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import withDynamicOptions from './hoc/withDynamicOptions'
import {withStateValue} from '@s-ui/hoc'

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

so then, the `MoleculeAutosuggestWithState` can used in this way...

```js
<MoleculeAutosuggestWithState
  placeholder="Type a Country name..."
  onChange={(_, {value}) => console.log(value)}
  iconClear={<IconClear />}
/>
```





> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/autosuggest/demo).**