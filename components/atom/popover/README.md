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

Some times you may need to programmatically recalculate the `AtomPopover` position in order to fix visual inconsistencies (i.e. a change on the popover content could change the popover size, and therefore recalculating the position may be needed to ensure that popover is displayed as expected). To do so, it's possible to provide a component in the `AtomPopover`'s `content` property, this component will receive a function inside a property named `update`, calling this function will result on a popover's position recalculation.

```js
<AtomPopover
  placement={atomPopoverPositions.BOTTOM}
  onClose={() => console.log("CLOSE POPOVER!")}
  content={({update}) =>
    <>
      Hello <strong>world</strong>!
      <button onClick={update}>Click me to recalculate the popover position!</button>
    </>
  }
>
  <div>
    Show Popover
  </div>
</AtomPopover>

```

The `update` prop is a function provided by `Popper` (v1), which is the library in charge of rendering and positioning the popover component. You can get more information about this function here: https://popper.js.org/docs/v1/#Popper.scheduleUpdate


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/popover/demo).**
