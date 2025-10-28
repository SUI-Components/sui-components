# MoleculeSelectField

`MoleculeSelectField` is a component that wraps a composition of Label + some input (input, textarea, ...) + Validation Messages for a [`MoleculeSelect`](https://sui-components.now.sh/workbench/molecule/select/demo) component

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/selectField/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,selectField)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-select-field?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-select-field)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AselectField&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AselectField)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-select-field)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/selectField/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-select-field --save
```

## Usage

After importing the component `MoleculeSelectField` like this

```javascript
import MoleculeSelectField from '@s-ui/react-molecule-select-field'
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

### Basic usage with multiselection
    
```js
<MoleculeSelectField
  label="Country"
  placeholder="Select a Country..."
  onChange={(_, {value}) => console.log(value)}
  iconArrowDown={<IconArrowDown />}
  iconCloseTag={<IconCloseTag />}
  multiselection
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

### With Alert Message 

```js
<MoleculeSelectField
    label="Country"
    placeholder="Select a Country..."
    onChange={(_, {value}) => console.log(value)}
    iconArrowDown={<IconArrowDown />}
    alertText="Error!"
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


## State Management for this componente

Like `MoleculeSelect`, `MoleculeSelectField` can also use the `withStateValue` hoc to create a stateful version of this component 

```js
import {withStateValue} from '@s-ui/hoc'
import MoleculeSelectField from '@s-ui/react-molecule-select-field'

...

const MoleculeSelectFieldWithState = withStateValue(MoleculeSelectField)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/selectField/demo).**
