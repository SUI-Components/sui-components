# LayoutGrid

> The layout grid component adapts to screen size (responsive), ensuring consistency across layouts.
> The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Based on our design principles, this component is based on a 12 column grid layout.

## Installation

```sh
$ npm install @s-ui/react-layout-grid
```

## Usage

- This component uses CSS Flexbox for high flexibility (Support for CSS grid? Would be great 😉).
- There are two types of layout: `<LayoutGrid />` and your items `<LayoutGridItem />`.
- Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
- Items have padding to create the spacing between individual items.
- The breakpoints is defined on [sui-theme](https://github.com/SUI-Components/sui-theme/blob/master/src/layout/_breakpoints.scss): `xxs | xs | s | m | l | xl | xxl`

### Basic usage

#### Import package and use the component

```js
import LayoutGrid from '@s-ui/react-layout-grid'

return <LayoutGrid />
```

Default

```js
<LayoutGrid>
  <LayoutGridItem xxs={4}>...</LayoutGridItem>
  <LayoutGridItem xxs={8}>...</LayoutGridItem>
</LayoutGrid>
```

With breakpooints

```js
<LayoutGrid>
  <LayoutGridItem s={4} m={2} xl={6}>
    ...
  </LayoutGridItem>
  <LayoutGridItem s={8} m={10} xl={6}>
    ...
  </LayoutGridItem>
</LayoutGrid>
```

With `alignItems` and `justifyContent` props

```js
<LayoutGrid alignItems="center" justifyContent="space-around">
  <LayoutGridItem s={4} xl={6}>
    ...
  </LayoutGridItem>
  <LayoutGridItem s={8} xl={6}>
    ...
  </LayoutGridItem>
</LayoutGrid>
```

With cells offset

```js
<LayoutGrid>
  <LayoutGridItem s={6} sOffset={3} xl={10} xlOffset={1}>
    ...
  </LayoutGridItem>
</LayoutGrid>
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
// @import 'your theme';
@import '~@s-ui/react-layout-grid/lib/index';
```

> **Find full description and more examples in the [demo page](#).**
