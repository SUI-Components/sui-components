# AtomRadiobutton

> Description

Radio buttons are used when there is a list of options that mutually exclude each other. In other words, only one option can be selected, automatically deselecting the other preselected options.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-atom-radiobutton --save
```

## Usage

### Basic usage
```js
import AtomRadiobutton from '@s-ui/react-atom-radiobutton'

return (<AtomRadiobutton id="uniqueId" value="Option Value"
    onChange={(ev, {value}) => {
      console.log("onChange callback function")
    }}/>)
```


> **Find full description and more examples in the [demo page](#).**
