# MoleculeButtonGroup

`MoleculeButtonGroup` is a component that wraps a group of buttons, related in content.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/buttonGroup/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,accordion)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-button-group?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-button-group)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AbuttonGroup&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aaccordion)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-button-group)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/buttonGroup/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-button-group --save
```

## Usage

Having the proper elements imported

```js
import MoleculeButtonGroup, {
  moleculeButtonGroupSpaced
} from '@s-ui/react-molecule-button-group'
import AtomButtom, {atomButtonGroupPositions} from '@s-ui/react-atom-button'
```

### Basic usage

```js
<MoleculeButtonGroup type="secondary">
  <AtomButtom>A</AtomButtom>
  <AtomButtom>B</AtomButtom>
  <AtomButtom>C</AtomButtom>
</MoleculeButtonGroup>
```

```js
<MoleculeButtonGroup type="tertiary" negative>
  <AtomButtom>A</AtomButtom>
  <AtomButtom>B</AtomButtom>
  <AtomButtom>C</AtomButtom>
</MoleculeButtonGroup>
```

### Full Width

```js
<MoleculeButtonGroup type="secondary" fullWidth>
  <AtomButtom>A</AtomButtom>
  <AtomButtom>B</AtomButtom>
  <AtomButtom>C</AtomButtom>
</MoleculeButtonGroup>
```

### Specifying Group Positions Values

```js
<MoleculeButtonGroup type="secondary" groupPositions={atomButtonGroupPositions}>
  <AtomButtom>A</AtomButtom>
  <AtomButtom>B</AtomButtom>
  <AtomButtom>C</AtomButtom>
</MoleculeButtonGroup>
```

### Spaced

```js
<MoleculeButtonGroup type="secondary" spaced={moleculeButtonGroupSpaced.LARGE}>
  <AtomButtom>A</AtomButtom>
  <AtomButtom>B</AtomButtom>
  <AtomButtom>C</AtomButtom>
</MoleculeButtonGroup>
```

### Vertical Layout

```js
<MoleculeButtonGroup type="secondary" isVertical>
  <AtomButtom>A</AtomButtom>
  <AtomButtom>B</AtomButtom>
  <AtomButtom>C</AtomButtom>
</MoleculeButtonGroup>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/buttonGroup).**
