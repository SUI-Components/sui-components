# MoleculeDataCounter

`MoleculeDataCounter` is an input type number controller we can use to increase (+1) or decrease (-1) the value of such input. 

## Installation

```sh
$ npm install @s-ui/react-molecule-data-counter --save
```

## Usage

```js
import MoleculeDataCounter, {moleculeDataCounterSizes} from '@s-ui/react-molecule-data-counter'
```


### Basic usage

```js
<MoleculeDataCounter label="Label" id="demo1"/>
```

### Disabled

```js
<MoleculeDataCounter label="Label" id="demo2" disabled/>
```

### Setting min & max

```js
<MoleculeDataCounter label="Label" id="demo3" min={3} max={8} />
```

### Size=SMALL

```js
<MoleculeDataCounter label="Label" id="demo3" size={moleculeDataCounterSizes.SMALL} />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/dataCounter/demo).**