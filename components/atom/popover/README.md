# AtomPopover

AtomPopover is a component that wraps an element and shows a popover around it.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/popover/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,popover)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-popover?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-popover)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Apopover&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Apopover)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-popover)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/popover/LICENSE.md)

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
