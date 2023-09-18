# MoleculeButtonGroup

`MoleculeButtonGroup` is a component that wraps a group of buttons, related in content.

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
