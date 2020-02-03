# MoleculeRadioButtonField

`MoleculeRadioButtonField` is the combination of and `AtomRadioButton` and a `MoleculeField`


## Installation

```sh
$ npm install @s-ui/react-molecule-radio-button-field --save
```

## Usage

```js
import MoleculeRadioButtonField from '@s-ui/react-molecule-radio-button-field'
```

### Basic (with Information help text)

```js
<MoleculeRadioButtonField
  id="description-inline2"
  label="Description"
  helpText="Tu descripción en Latin"
/>
```

### Success Message

```js
 <MoleculeRadioButtonField
    id="description2"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
  />
```

### Error Message

```js
 <MoleculeRadioButtonField
    id="notes"
    label="Notes"
    errorText="All wrong!"
    value="In some place of La Mancha which name..."
  />
```

### Alert Message

```js
 <MoleculeRadioButtonField
    id="notes"
    label="Notes"
    alertText="Something meh..."
    value="In some place of La Mancha which name..."
  />
```

> **Find full description and more examples in the [demo page](/workbench/molecule/radioButtonField).**