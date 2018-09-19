# MoleculeTextareaField


`MoleculeTextareaField` is a component that wraps a composition of Label + Textarea + Validations  Messages. 


## Installation

```sh
$ npm install @s-ui/react-molecule-textarea-field --save
```

## Usage

After importing the component `MoleculeTextareaField` like this

```javascript
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
```

### Basic usage
    
```
  <MoleculeTextareaField
    id="description"
    label="Description"
  />
```

### With initial value
    
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
  />
```

### With maxChars
    
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    maxChars={75}
  />
```

### With Error Message 
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    errorText="All wrong!"
  />
```

### With Success Message 
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
  />
```

### With Help Text

```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    helpText="Enter some description with no less than 20 characters"
  />
```

### Inline
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    inline
  />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/textareaField/demo).**