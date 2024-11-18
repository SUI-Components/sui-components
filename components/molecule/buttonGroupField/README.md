# MoleculeButtonGroupField

`MoleculeButtonGroupField` is the combination of and `MoleculeButtonGroup` and a `MoleculeField`

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/buttonGroupField/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,buttonGroupField)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-button-group-field?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-button-group-field)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Abutton-group-field&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AbuttonGroupField)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-button-group-field)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/buttonGroupField/LICENSE.md)

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