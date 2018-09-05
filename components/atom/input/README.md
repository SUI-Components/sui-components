# AtomInput


`AtomInput` is a component that wraps a composition of Label + Textarea + Validations  Messages. 


## Installation

```sh
$ npm install @s-ui/react-atom-input --save
```

## Usage

After importing the component `AtomInput` like this

```javascript
import AtomInput from '@s-ui/react-atom-input'
```

### Basic usage
    
```
  <AtomInput
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
  <AtomInput
    id="description2"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
  />
```

### With `errorText`
    
```
  <AtomInput
    id="notes"
    label="Notes"
    errorText="All wrong!"
  />
```

### With `helpText`
```
  <AtomInput
    id="description-inline2"
    label="Description"
    helpText="Tu descripción en Latin"
    value="Lorem ipsum dolor sit amet"
  />
```

### Inline
```
  <AtomInput
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    inline
  />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/input/demo).**