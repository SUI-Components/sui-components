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
- **Mobile (Touch devices)** → tooltip will be displayed on `click` over target element and hidden w/ another `click` outside of it

For wrapped elements w/ `onClick` action defined:
- **Desktop (Non-touch devices)** → tooltip will be displayed only on `mouseover`
- **Mobile (Touch devices)** → tooltip will be displayed on `longpress` (having the element pressed more than 1s). The `click` will trigger the defined action for the element

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
<AtomTooltip>
  <strong title="Last month of the year">december</strong>
</AtomTooltip>
```

### HTML in the Tooltip

```javascript
<AtomTooltip content={ () => (
  <React.Fragment>
    Hello <strong>world</strong>!
  </React.Fragment>
)}>
  <strong>december</strong>
</AtomTooltip>
```

### Without arrow

```javascript
<AtomTooltip hideArrow>
  <strong title="Last month of the year">december</strong>
</AtomTooltip>
```

### With delay on show and/or hide

```javascript
<AtomTooltip delay={{show: 300, hide: 1500}}>
  <strong title="Last month of the year">december</strong>
</AtomTooltip>
```

### Letting the user select text in tooltip

```javascript
<AtomTooltip autohide={false}>
  <strong title="Last month of the year">december</strong>
</AtomTooltip>
```

### Selecting arrow position

```javascript
<AtomTooltip placement={atomTooltipPlacements.TOP_START}>
  <strong title="Last month of the year">december</strong>
</AtomTooltip>
```

### Tooltip on a "call to action" element

```javascript
<AtomTooltip>
  <button
    title="This menu display some cool options"
    onClick={() => alert('👍  displaying menú')}
  >
    Menú options
  </button>
</AtomTooltip>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/tooltip/demo).**
