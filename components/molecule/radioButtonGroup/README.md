# MoleculeRadioButtonGroup

`MoleculeRadioButtonGroup` is a container of several `AtomRadioButton` or `MoleculeRadioButtonField` to simplify its use

## Installation

```sh
$ npm install @s-ui/react-molecule-radio-button-group --save
```

## Usage

```js
import MoleculeRadioButtonGroup from '@s-ui/react-molecule-radio-button-group'
```

### with `AtomRadioButton`

```js
<MoleculeRadioButtonGroup
  onChange={(ev, {name, value}) => {
    console.log({[name]: value})
  }}
  name="favorite-beatle"
  value="john"
>
  <AtomRadioButton value="john" />
  <AtomRadioButton value="paul" />
  <AtomRadioButton value="george" />
  <AtomRadioButton value="ringo" />
  <AtomRadioButton value="martin" disabled />
</MoleculeRadioButtonGroup>
```

### with `MoleculeRadioButtonField`

```js
 <MoleculeRadioButtonGroup
  onChange={(ev, {name, value}) => {
    console.log({[name]: value})
  }}
  name="field-favorite-beatle"
  value="john"
>
  <MoleculeRadioButtonField
    id="john"
    value="john"
    label="John"
    helpText="John Lennon"
  />
  <MoleculeRadioButtonField
    id="paul"
    value="paul"
    label="Paul"
    helpText="Paul McCartney"
  />
  <MoleculeRadioButtonField
    id="george"
    value="george"
    label="George"
    helpText="George Harrison"
  />
  <MoleculeRadioButtonField
    id="george"
    value="ringo"
    label="Ringo"
    helpText="Ringo Star"
  />
</MoleculeRadioButtonGroup>
```


> **Find full description and more examples in the [demo page](/workbench/molecule/radioButtonGroup).**