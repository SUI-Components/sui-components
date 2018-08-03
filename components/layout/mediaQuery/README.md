# LayoutMediaQuery

`LayoutMediaQuery` is a wrapper that will pass through a _function as a child_ an object with the breakpoints matched according to the width of the parent container

## Installation

```sh
$ npm install @s-ui/react-layout-media-query --save
```

## Usage

### Basic usage (default breakpoints)

```javascript
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

<LayoutMediaQuery>
  {({M, L, XL}) => {
    if (XL) return <p>LargeDesktop</p>
    if (L) return <p>Desktop</p>
    if (M) return <p>Tablet</p>
    return <p>Mobile</p>
  }}
</LayoutMediaQuery>
```

This default component will use default breakpoints agreed for schibsted projects

```
{
  xs: 480,
  s: 600,
  m: 840,
  l: 960,
  xl: 1280,
  xxl: 1440
}
```

### Listening to the viewport resize

```javascript
import LayoutMediaQuery from '@s-ui/react-layout-media-query'

<LayoutMediaQuery viewport>
  {({M, L, XL}) => {
    if (XL) return <p>LargeDesktop</p>
    if (L) return <p>Desktop</p>
    if (M) return <p>Tablet</p>
    return <p>Mobile</p>
  }}
</LayoutMediaQuery>
```

### Custom Breakpoints

We have also available a factory function that we can use to create a `LayoutMediaQuery` with custom breakpoints

```javascript
import { LayoutMediaQueryFactory } from '@s-ui/react-layout-media-query'

const BREAKPOINTS = {
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200'
}

const LayoutMediaQueryBootstrap = LayoutMediaQueryFactory(BREAKPOINTS)

<LayoutMediaQueryBootstrap>
  {({MD, LG, XL}) => {
    if (XL) return <p>LargeDesktop</p>
    if (LG) return <p>Desktop</p>
    if (MD) return <p>Tablet</p>
    return <p>Mobile</p>
  }}
</LayoutMediaQueryBootstrap>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/layout/mediaQuery/demo).**