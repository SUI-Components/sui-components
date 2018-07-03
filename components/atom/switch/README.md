# AtomSwitch

> Description

The switch is the radio button when there’re only 2 exclusive options. “On/off” is a common and clear example for explaining this component.

In order to collect the result of this switch there is a callback `onToggle`, this callback receives a flag on `true` if select is active. If you're using a `select` type of this component, `false` means the first option and `true` the second one.

There are several two sizes for this component: `default` and `large`.

## Installation

```sh
$ npm install @s-ui/react-atom-switch --save
```

## Usage

### Basic usage
```js
import AtomSwitch from '@s-ui/react-atom-switch'

return (
  <AtomSwitch
    initialValue={false}
    size='default'
    type='toggle'
    disabled={false}
    label='Label'
    labelLeft='Off'
    labelRight='On'
    labelOptionalText='Optional label'
    onToggle={flag => console.log(`Switch value is ${flag}`)}
  />
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/switch/demo).**
