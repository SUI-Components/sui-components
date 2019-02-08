# MoleculeSelectField


`MoleculeSelectField` is a component that wraps a composition of Label + some input (input, textarea, ...) + Validations  Messages for a [`MoleculeSelect`](https://sui-components.now.sh/workbench/molecule/select/demo) component


## Installation

```sh
$ npm install @s-ui/react-molecule-select-field --save
```

## Usage

After importing the component `MoleculeSelectField` like this

```javascript
import MoleculeSelecyField from '@s-ui/react-molecule-select-field'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

const IconCloseTag = () => <span>x</span>  
const IconArrowDown = () => <span>▼</span>  

const options = ['John','Paul','George','Ringo']

```

### Basic usage
    
```js
<MoleculeSelectField
  label="Country"
  placeholder="Select a Country..."
  onChange={(_, {value}) => console.log(value)}
  iconArrowDown={<IconArrowDown />}
>
  {options.map((option, i) => (
    <MoleculeSelectOption key={i} value={option}>
      {option}
    </MoleculeSelectOption>
  ))}
</MoleculeSelectField>
```

### With Error Message 

```js
<MoleculeSelectField
    label="Country"
    placeholder="Select a Country..."
    onChange={(_, {value}) => console.log(value)}
    iconArrowDown={<IconArrowDown />}
    errorText="Error!"
  >
    {options.map((option, i) => (
      <MoleculeSelectOption key={i} value={option}>
        {option}
      </MoleculeSelectOption>
    ))}
</MoleculeSelectField>
```

### With Success Message 

```js
<MoleculeSelectField
    label="Country"
    placeholder="Select a Country..."
    onChange={(_, {value}) => console.log(value)}
    iconArrowDown={<IconArrowDown />}
    successText="Success!"
  >
    {options.map((option, i) => (
      <MoleculeSelectOption key={i} value={option}>
        {option}
      </MoleculeSelectOption>
    ))}
</MoleculeSelectField>
```

### With Help Text

```js
<MoleculeSelectField
    label="Country"
    placeholder="Select a Country..."
    onChange={(_, {value}) => console.log(value)}
    iconArrowDown={<IconArrowDown />}
    helpText="Read the instructions to write proper format"
  >
    {options.map((option, i) => (
      <MoleculeSelectOption key={i} value={option}>
        {option}
      </MoleculeSelectOption>
    ))}
</MoleculeSelectField>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/selectField/demo).**
