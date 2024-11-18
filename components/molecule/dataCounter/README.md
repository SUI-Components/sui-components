# MoleculeDataCounter

`MoleculeDataCounter` is an input type number controller we can use to increase (+1) or decrease (-1) the value of such input. 

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/dataCounter/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,dataCounter)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-data-counter?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-data-counter)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AdataCounter&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AdataCounter)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-data-counter)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/dataCounter/LICENSE.md)

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