# MoleculeFieldset


`MoleculeFieldset` is a component that wraps a composition of Label + some input (input, textarea, ...) + Validations  Messages. 


## Installation

```sh
$ npm install @s-ui/react-molecule-fieldset --save
```

## Usage

After importing the component `MoleculeFieldset` like this

```javascript
import MoleculeFieldset from '@s-ui/react-molecule-fieldset'
```

### Basic usage
    
```
  <MoleculeFieldset label="name" name="name">
    <input id="name" type="text"/>
  </MoleculeFieldset>
```

### With Error Message 
```
<MoleculeFieldset label="surname" name="surname" errorText="Error!">
  <input id="surname" type="text"/>
</MoleculeFieldset>
```

### With Success Message 

```
  <MoleculeFieldset label="address" name="address" successText="Success!">
    <input id="address" type="text"/>
  </MoleculeFieldset>
```

### With Help Text

```

<MoleculeFieldset label="country" name="country" helpText="Read the instructions to write proper format">
  <input id="country" type="text"/>
</MoleculeFieldset>
```

### Inline
```
<MoleculeFieldset inline label="city" name="city">
  <input id="city" type="text"/>
</MoleculeFieldset>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/fieldset/demo).**