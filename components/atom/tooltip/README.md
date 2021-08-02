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
