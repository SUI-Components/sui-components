# BreakpointToggle

> Toogle elements. The 'breakpoint' option indicates when the item is displayed.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-breakpoint-toggle --save
```

## Usage

### Basic usage
```js
import BreakpointToggle from '@schibstedspain/sui-breakpoint-toggle'

return (<div>
  <button>Normal button</button>
  <br />
  <BreakpointToggle breakpoint={575}>
    <button>Mobile button</button>
  </BreakpointToggle>
</div>)

```
