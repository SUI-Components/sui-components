# MoleculeRating

`MoleculeRating` will display a rating showing how good or popular someone o something is.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/rating/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,rating)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-rating?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-rating)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Arating&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Arating)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-rating)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/rating/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-rating --save
```

## Usage

```js
import MoleculeRating, {MoleculeRatingSizes} from '@s-ui/react-molecule-rating'
```

### Basic usage

```js
<MoleculeRating value={2} label="25 opiniones"/>
```

### With Link

```js
<MoleculeRating value={4} label="25 opiniones" link href="https://www.adevinta.com/"/>        
```

### With MEDIUM size

```js
<MoleculeRating value={4} label="25 opiniones" size={MoleculeRatingSizes.MEDIUM} link href="https://www.adevinta.com/"/>        
```

### With CUSTOM icons

```js
import {IconStarFilled, IconStarHalfFilled, IconStarEmpty} from './Icons'

const customPropsStar = {
  IconStarFilled,
  IconStarHalfFilled,
  IconStarEmpty
}

<MoleculeRating
    value={3.5}
    size={MoleculeRatingSizes.LARGE}
    label="25 opiniones"
    {...customPropsStar}
/>
```

### With Hover and onClick

```js
<MoleculeRating
  isHovered
  ratingValues={[1, 2, 3, 4, 5]}
  size={MoleculeRatingSizes.LARGE}
  onClick={handleClick}
/>
```





> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/rating/demo).**