# MoleculeButtonGroupField

`MoleculeButtonGroupField` is the combination of and `MoleculeButtonGroup` and a `MoleculeField`

## Installation

```sh
$ npm install @s-ui/react-molecule-button-group-field
```

```js
import MoleculeButtonGroupField from '@s-ui/react-molecule-button-group-field'
```

### Basic (with Information help text)

```js
  <MoleculeButtonGroupField
    id="info-help-text"
    label="Your text here"
    helpText="Tu descripción en Latin"
  />
```

### Success Message

```js
  <MoleculeButtonGroupField
    id="success-help-text"
    label="Your text here"
    successText="Everything ok!"
  />
```

### Error Message

```js
  <MoleculeButtonGroupField
    id="error-help-text"
    label="Your text here"
    errorText="All wrong!"
  />
```

### Alert Message

```js
  <MoleculeButtonGroupField
    id="alert-help-text"
    label="Your text here"
    alertText="Something meh..."
  />
```

> **Find full description and more examples in the [demo page](/workbench/molecule/buttonButtonField).**