# MoleculeInputField


`MoleculeInputField` is a component that wraps a composition of Label + Textarea + Validations  Messages. 


## Installation

```sh
$ npm install @s-ui/react-molecule-input-field --save
```

## Usage

After importing the component `MoleculeInputField` like this

```javascript
import MoleculeInputField from '@s-ui/react-molecule-input-field'
```

### Basic usage
    
```
  <MoleculeInputField
    id="second"
    placeholder="Medium Input"
    leftAddon="http://"
    rightAddon="@schibsted.com"
    label="Description"
    value="In some place of La Mancha which name..."
  />
```

### With `successText`
    
```
  <MoleculeInputField
    id="description2"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
  />
```

### With `errorText`
    
```
  <MoleculeInputField
    id="notes"
    label="Notes"
    errorText="All wrong!"
  />
```

### With `helpText`
```
  <MoleculeInputField
    id="description-inline2"
    label="Description"
    helpText="Tu descripción en Latin"
    value="Lorem ipsum dolor sit amet"
  />
```

### Inline
```
  <MoleculeInputField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    inline
  />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/inputField/demo).**