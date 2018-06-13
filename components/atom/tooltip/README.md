# AtomTooltip

AtomTooltip is a component that attaches a tooltip over a targeted element. It has some properties like being shown always on the screen changing sides if necessary, delays can be set, options to select text on tooltip and more. This component is based on the [Tooltip component](https://reactstrap.github.io/components/tooltips/) of [reactstrap](https://reactstrap.github.io/) which is built using [popper.js](https://popper.js.org/), so:
- all the props that are accepted by reacstraps's [`Tooltip`]([Tooltip component](https://reactstrap.github.io/components/tooltips/)) will also be accepted by `AtomTooltip`
- all the [modifiers](https://popper.js.org/popper-documentation.html#modifiers) that are accepted by [popper.js](https://popper.js.org/) will also be accepted by `AtomTooltip` through the `modifiers` prop


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
<p id="astros">Typical message</p>
<AtomTooltip target="astros">
  Hello <strong>world</strong>!
</AtomTooltip>
```

### Selecting desired position of the tooltip

```javascript
<p id="astros">Typical message</p>
<AtomTooltip target="astros" placement="right">
  Hello <strong>world</strong>!
</AtomTooltip>
```

### Without arrow

```javascript
<p id="astros">Typical message</p>
<AtomTooltip target="astros" hideArrow>
  Hello <strong>world</strong>!
</AtomTooltip>
```

### With delay on show and/or hide

```javascript
<p id="astros">Typical message</p>
<AtomTooltip target="astros" delay={{show: 300, hide: 1500}}>
  Hello <strong>world</strong>!
</AtomTooltip>
```

### Letting the user selecting text in tooltip

```javascript
<p id="astros">Typical message</p>
<AtomTooltip target="astros" autohide={false}>
  Hello <strong>world</strong>!
</AtomTooltip>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/tooltip/demo).**