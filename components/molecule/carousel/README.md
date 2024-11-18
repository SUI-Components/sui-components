# MoleculeCarousel

Minimalistic and smooth touch carousel component for React ⚛️

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/carousel/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,carousel)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-carousel?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-carousel)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Acarousel&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Acarousel)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-carousel)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/carousel/LICENSE.md)

## Features

- 🖼️ 1:1 slider for any content
- 📱 Optimized for mobile usage (block scroll on slide)
- ⚡ Optimized for performance
- ⌨️ Supports keyboard navigation
- 😪 Lazy load support
- ☝️ No dependencies, just one possible polyfill: intersection-observer polyfill

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-molecule-carousel
```

## Usage

### Basic usage

#### Import package and use the component

```js
import MoleculeCarousel from '@s-ui/react-molecule-carousel'

return <MoleculeCarousel />
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/react-molecule-carousel/lib/index';
```

> **Find full description and more examples in the [demo page](#).**

## [Migration](<MIGRATION.md>)

From [react-slidy](https://github.com/midudev/react-slidy) 4 to @s-ui/react-molecule-carousel