# MoleculeFieldset


`MoleculeFieldset` is a component that wraps a composition of Label + some input (input, textarea, ...) + Validations  Messages. It has some properties like:


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
<MoleculeFieldset label="name">
  <input type="text"/>
</MoleculeFieldset>
```

### With Error Message 

```
<MoleculeFieldset label="name" errorText="Error!">
  <input type="text"/>
</MoleculeFieldset>
```

### With Success Message 

```
<MoleculeFieldset label="name" successText="Success!">
  <input type="text"/>
</MoleculeFieldset>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/fieldset/demo).**