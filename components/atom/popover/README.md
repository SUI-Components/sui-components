# AtomPopover

AtomPopover is a component that wraps an element and shows a popover around it.

## Installation

```sh
$ npm install @s-ui/react-atom-popover --save
```

## Usage

### Basic usage
```js
import AtomPopover, { atomPopoverPositions } from '@s-ui/react-atom-popover'

```

```js
<AtomPopover
  placement={atomPopoverPositions.BOTTOM}
  onClose={() => console.log("CLOSE POPOVER!")}
  content={
    <>
      Hello <strong>world</strong>!
    </>
  }
>
  <div>
    Show Popover
  </div>
</AtomPopover>

```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/popover/demo).**
