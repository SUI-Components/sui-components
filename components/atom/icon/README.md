# AtomIcon

> Atom Element: Icon

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/icon/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,icon)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-icon?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-icon)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aicon&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aicon)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-icon)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/icon/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-icon --save
```

## Usage

`<AtomIcon>` wraps a `<svg>` that follows the rules defined on the UX Definition and give you some colors, sizes and interesting features like lazy-load rendering.

### Basic usage
```js
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES,
  ATOM_ICON_RENDERS
} from '@s-ui/react-atom-icon'

const check = <svg viewBox="0 0 24 24">
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
</svg>

return (
  <>
    <AtomIcon>{check}</AtomIcon>
    <AtomIcon size={ATOM_ICON_SIZES.large}>{check}</AtomIcon>
    <AtomIcon color={ATOM_ICON_COLORS.primary}>{check}</AtomIcon>
    <AtomIcon render={ATOM_ICON_RENDERS.lazy}>{check}</AtomIcon>
  </>
)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/icon/demo).**