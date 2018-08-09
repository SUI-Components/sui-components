# MoleculeField


`MoleculeField` is a component that wraps a composition of Label + some input (input, textarea, ...) + Validations  Messages. 


## Installation

```sh
$ npm install @s-ui/react-molecule-field --save
```

## Usage

After importing the component `MoleculeField` like this

```javascript
import MoleculeField from '@s-ui/react-molecule-field'
```

### Basic usage
    
```
  <MoleculeField label="name" name="name">
    <input id="name" type="text"/>
  </MoleculeField>
```

### With Error Message 
```
<MoleculeField label="surname" name="surname" errorText="Error!">
  <input id="surname" type="text"/>
</MoleculeField>
```

### With Success Message 

```
  <MoleculeField label="address" name="address" successText="Success!">
    <input id="address" type="text"/>
  </MoleculeField>
```

### With Help Text

```

<MoleculeField label="country" name="country" helpText="Read the instructions to write proper format">
  <input id="country" type="text"/>
</MoleculeField>
```

### Inline
```
<MoleculeField inline label="city" name="city">
  <input id="city" type="text"/>
</MoleculeField>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/field/demo).**