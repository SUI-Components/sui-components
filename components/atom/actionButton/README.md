# AtomActionButton

SUI Atom ActionButton

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/actionButton/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,actionButton)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-action-button?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-action-button)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AactionButton&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AactionButton)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-action-button)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/actionButton/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-action-button
```

## Usage

### Basic usage

```js
import AtomActionButton from '@s-ui/react-atom-action-button'

const Icon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.3506 6.3506 2.649 2.649h-6v-6l1.938 1.938c1.842-1.849 4.347-2.938 7.062-2.938 5.515 0 10 4.486 10 10h-2c0-4.411-3.588-8-8-8-2.172 0-4.176.872-5.649 2.351zm11.2988 11.2988-2.649-2.649h6v6l-1.938-1.939c-1.842 1.85-4.347 2.939-7.062 2.939-5.515 0-10-4.486-10-10h2c0 4.411 3.588 8 8 8 2.172 0 4.176-.872 5.649-2.351z" /></svg>
  )
}

return (<div>
  <AtomActionButton icon={Icon}>Normal</AtomActionButton>
  <AtomActionButton icon={Icon} focused>Focused</AtomActionButton>
  <AtomActionButton icon={Icon} size='large' disabled>Disabled, Large</AtomActionButton>
</div>)

```

#### Import package and use the component

```js
import AtomActionButton from '@s-ui/react-atom-action-button'

const Icon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6.3506 6.3506 2.649 2.649h-6v-6l1.938 1.938c1.842-1.849 4.347-2.938 7.062-2.938 5.515 0 10 4.486 10 10h-2c0-4.411-3.588-8-8-8-2.172 0-4.176.872-5.649 2.351zm11.2988 11.2988-2.649-2.649h6v6l-1.938-1.939c-1.842 1.85-4.347 2.939-7.062 2.939-5.515 0-10-4.486-10-10h2c0 4.411 3.588 8 8 8 2.172 0 4.176-.872 5.649-2.351z" /></svg>
  )
}

return (<AtomActionButton icon={Icon} />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
// @import 'your theme';
@import '~@s-ui/react-atom-action-button/lib/index';
```

> **Find full description and more examples in the [demo page](#).**