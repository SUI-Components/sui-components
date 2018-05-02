# AtomSwitch

> Description

The switch is the radio button when there’re only 2 exclusive options. “On/off” is a common and clear example for explaining this component.
In order to collect the result of this switch there is a callback `onToggle`, this callback receives a flag on true if
select is active.

There are several types and sizes for this component.

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
          size='default'
          type='toggle'
          disabled={false}
          label='Label'
          labelLeft='Off'
          labelRight='On'
          labelOptionalText='Optional label'
          onToggle={customCallback}
       />)
```


> **Find full description and more examples in the [demo page](#).**