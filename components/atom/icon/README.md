# AtomIcon

> Atom Element: Icon

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