# AtomTooltip

AtomTooltip is a component that wraps an element and shows a tooltip over it. It has some properties like:

- it will show the `title` attribute of the wrapped element by default
- can also display html as content of the tooltip
- being displayed on the screen changing sides if necessary
- being displayed on target focus (through keyboard)
- delays can be set
- the arrow position can be set
- options to select text on tooltip
- tooltip will be hidden if targeted element is not in the viewport
- tooltip can be applied over buttons (or any element w/ `onClick`)

General behaviour will be:

- **Desktop (Non-touch devices)** → tooltip will be displayed only on `mouseover`
- **Mobile (Touch devices)** → tooltip will be displayed on `touch` over target element and hidden w/ another `touch` outside of it

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/tooltip/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,tooltip)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-tooltip?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-tooltip)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Atooltip&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Atooltip)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-tooltip)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/tooltip/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-tooltip --save
```

## Usage

After importing the component `AtomTooltip` like this

```javascript
import AtomTooltip from '@s-ui/react-atom-tooltip'
```

### Basic usage

```javascript
<AtomTooltip content="Last month of the year">
  <strong>december</strong>
</AtomTooltip>
```

### HTML in the Tooltip

```javascript
<AtomTooltip
  content={
    <div>
      Hello <strong>world</strong>!
    </div>
  }
>
  <strong>december</strong>
</AtomTooltip>
```

### Without arrow

```javascript
<AtomTooltip isArrowed={false} content="Last month of the year">
  <strong>december</strong>
</AtomTooltip>
```

### With delay on show and/or hide

```javascript
<AtomTooltip delay={{show: 300, hide: 1500}} content="Last month of the year">
  <strong>december</strong>
</AtomTooltip>
```

### Selecting arrow position

```javascript
<AtomTooltip
  placement={atomTooltipPlacements.TOP_START}
  content="Last month of the year"
>
  <strong>december</strong>
</AtomTooltip>
```

### Tooltip on a "call to action" element

```javascript
<AtomTooltip content="This menu display some cool options">
  <button onClick={() => alert('👍  displaying menú')}>Menu options</button>
</AtomTooltip>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/tooltip/demo).**
