# MoleculeCoachmark

`MoleculeCoachmark` is a wrapper of the [react-joyride](https://react-joyride.com/) library in order to create smooth guided tours in the apps to explain new features to the users.

For more information on how to use the provided props, visit the [react-joyride documentation site](https://docs.react-joyride.com/)

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/coachmark/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,coachmark)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-coachmark?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-coachmark)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Acoachmark&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Acoachmark)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-coachmark)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/coachmark/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-coachmark
```

## Usage

### Basic usage

#### Import package and use the component

```js
import MoleculeCoachmark from '@s-ui/react-molecule-coachmark'

return <MoleculeCoachmark {...props} />
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/react-molecule-coachmark/lib/index';
```

### Overwriting styles

Overwriting styles is possible thanks to the `styles` prop. [Here you can find a list](https://github.com/gilbarbara/react-joyride/blob/3e08384415a831b20ce21c8423b6c271ad419fbf/src/styles.js) of possible properties to be overwritten

> **Find full description and more examples in the [demo page](#).**
