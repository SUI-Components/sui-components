# MoleculeCoachmark

`MoleculeCoachmark` is a wrapper of the [react-joyride](https://react-joyride.com/) library in order to create smooth guided tours in the apps to explain new features to the users.

For more information on how to use the provided props, visit the [react-joyride documentation site](https://docs.react-joyride.com/)

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
