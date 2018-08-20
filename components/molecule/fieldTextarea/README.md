# MoleculeFieldTextarea


`MoleculeFieldTextarea` is a component that wraps a composition of Label + Textarea + Validations  Messages. 


## Installation

```sh
$ npm install @s-ui/react-molecule-field-textarea --save
```

## Usage

After importing the component `MoleculeFieldTextarea` like this

```javascript
import MoleculeFieldTextarea from '@s-ui/react-molecule-field-textarea'
```

### Basic usage
    
```
  <MoleculeFieldTextarea
    id="description"
    label="Description"
  />
```

### With initial value
    
```
  <MoleculeFieldTextarea
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
  />
```

### With maxChars
    
```
  <MoleculeFieldTextarea
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    maxChars={75}
  />
```

### With Error Message 
```
  <MoleculeFieldTextarea
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    errorText="All wrong!"
  />
```

### With Success Message 
```
  <MoleculeFieldTextarea
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
  />
```

### With Help Text

```
  <MoleculeFieldTextarea
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    helpText="Enter some description with no less than 20 characters"
  />
```

### Inline
```
  <MoleculeFieldTextarea
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    inline
  />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/fieldTextarea/demo).**