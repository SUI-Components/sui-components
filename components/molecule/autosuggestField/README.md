# MoleculeAutosuggestField


`MoleculeAutosuggestField` is a component that wraps a composition of Label + some input (input, textarea, ...) + Validations  Messages for a [`MoleculeAutosuggest`](https://sui-components.now.sh/workbench/molecule/autosuggest/demo) component


## Installation

```sh
$ npm install @s-ui/react-molecule-autosuggest-field --save
```

## Usage

After importing the component `MoleculeAutosuggestField` like this

```javascript
import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

const IconCloseTag = () => <span>x</span>  
const IconArrowDown = () => <span>▼</span>  

const options = ['John','Paul','George','Ringo']

```

### Basic usage
    
```js
<MoleculeAutosuggestField
  label="Country"
  placeholder="Select a Country..."
  onChange={(_, {value}) => console.log(value)}
  iconArrowDown={<IconArrowDown />}
>
  {options.map((option, i) => (
    <MoleculeAutosuggestOption key={i} value={option}>
      {option}
    </MoleculeAutosuggestOption>
  ))}
</MoleculeAutosuggestField>
```

### Basic usage with multiselection
    
```js
<MoleculeAutosuggestField
  label="Country"
  placeholder="Select a Country..."
  onChange={(_, {value}) => console.log(value)}
  iconArrowDown={<IconArrowDown />}
  iconCloseTag={<IconCloseTag />}
  multiselection
>
  {options.map((option, i) => (
    <MoleculeAutosuggestOption key={i} value={option}>
      {option}
    </MoleculeAutosuggestOption>
  ))}
</MoleculeAutosuggestField>
```

### With Error Message 

```js
<MoleculeAutosuggestField
    label="Country"
    placeholder="Select a Country..."
    onChange={(_, {value}) => console.log(value)}
    iconArrowDown={<IconArrowDown />}
    errorText="Error!"
  >
    {options.map((option, i) => (
      <MoleculeAutosuggestOption key={i} value={option}>
        {option}
      </MoleculeAutosuggestOption>
    ))}
</MoleculeAutosuggestField>
```

### With Success Message 

```js
<MoleculeAutosuggestField
    label="Country"
    placeholder="Select a Country..."
    onChange={(_, {value}) => console.log(value)}
    iconArrowDown={<IconArrowDown />}
    successText="Success!"
  >
    {options.map((option, i) => (
      <MoleculeAutosuggestOption key={i} value={option}>
        {option}
      </MoleculeAutosuggestOption>
    ))}
</MoleculeAutosuggestField>
```

### With Help Text

```js
<MoleculeAutosuggestField
    label="Country"
    placeholder="Select a Country..."
    onChange={(_, {value}) => console.log(value)}
    iconArrowDown={<IconArrowDown />}
    helpText="Read the instructions to write proper format"
  >
    {options.map((option, i) => (
      <MoleculeAutosuggestOption key={i} value={option}>
        {option}
      </MoleculeAutosuggestOption>
    ))}
</MoleculeAutosuggestField>
```


## State Management for this component

Like `MoleculeAutosuggest`, `MoleculeAutosuggestField` can also use the `withStateValue` hoc to create a stateful version of this component 

```js
import {withStateValue} from '@s-ui/hoc'
import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'

...

const MoleculeAutosuggestFieldWithState = withStateValue(MoleculeAutosuggestField)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/autosuggestField/demo).**
