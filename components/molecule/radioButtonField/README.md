# MoleculeRadioButtonField

`MoleculeRadioButtonField` is the combination of and `AtomRadioButton` and a `MoleculeField`

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/radioButtonField/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,radioButtonField)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-radio-button-field?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-radio-button-field)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AradioButtonField&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AradioButtonField)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-radio-button-field)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/radioButtonField/LICENSE.md)

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