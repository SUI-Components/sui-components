# MoleculeCheckboxField

`MoleculeCheckboxField` is the combination of and `AtomCheckbox` and a `checkboxField`

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/checkboxField/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,checkboxField)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-checkbox-field?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-checkbox-field)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%checkboxField&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AcheckboxField)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-checkbox-field)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/checkboxField/LICENSE.md)

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