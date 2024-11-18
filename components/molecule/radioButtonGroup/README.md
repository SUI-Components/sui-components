# MoleculeRadioButtonGroup

`MoleculeRadioButtonGroup` is a container of several `AtomRadioButton` or `MoleculeRadioButtonField` to simplify its use

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/radioButtonGroup/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,radioButtonGroup)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-radio-button-group?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-radio-button-group)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AradioButtonGroup&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AradioButtonGroup)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-radio-button-group)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/radioButtonGroup/LICENSE.md)

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