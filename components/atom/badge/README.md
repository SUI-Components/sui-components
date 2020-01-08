# AtomBadge

> Atom Element: SUI badge

![](./assets/screenshot.png)

## Installation

```sh
npm install @s-ui/react-atom-badge --save
```

## Usage

```js
import Badge, { atomBadgeTypes, atomBadgeSizes } from '@s-ui/react-atom-badge'

render {
  return (
    <Badge
      size={atomBadgeSizes.SMALL}
      type={atomBadgeTypes.SUCCESS}
      label='Hello SUI-Badge!'
    />
  )
}

```

**Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/badge).**
