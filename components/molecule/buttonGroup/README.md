# MoleculeButtonGroup

`MoleculeButtonGroup` is a component that wraps a group of clickable options, related in content.

## Installation

```sh
$ npm install @s-ui/react-molecule-button-group --save
```

## Usage

Having the proper components imported 

```js
import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'
import AtomButtom from '@schibstedspain/sui-atom-button'
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

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/buttonGroup).**
