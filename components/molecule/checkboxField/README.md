# MoleculeCheckboxField

`MoleculeCheckboxField` is the combination of and `AtomCheckbox` and a `MoleculeField`

## Installation

```sh
$ npm install @s-ui/react-molecule-checkbox-field --save
```

## Usage

```js
import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'
```

### Basic usage (info)

```js
<MoleculeCheckboxField
    id="description-inline2"
    label="Description"
    helpText="Tu descripción en Latin"
/>
```

### Success Message

```js
<MoleculeCheckboxField
    id="description2"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
/>
```

### Error Message

```js
 <MoleculeCheckboxField
    id="notes"
    label="Notes"
    errorText="All wrong!"
    value="In some place of La Mancha which name..."
/>
```

### Alert Message

```js
 <MoleculeCheckboxField
    id="notes"
    label="Notes"
    alertText="Something meh..."
    value="In some place of La Mancha which name..."
/>
```

> **Find full description and more examples in the [demo page](/workbench/molecule/checkboxField).**