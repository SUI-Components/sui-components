# AtomCheckbox

> Description
Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes inon the list, so checking one box doesn't uncheck the others. A stand-alone checkbox is used for a single option that the user can turn on or off. Each vertical can determine whether or not a stand-alone checkbox will be selected by default

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-atom-checkbox --save
```

## Usage

### Basic usage
```js
import AtomCheckbox from '@s-ui/react-atom-checkbox'

return (<AtomCheckbox id="uniqueId" value="OptionValue"
    onChange={(ev, {value}) => {
      console.log("onChange callback function")
    }}/>)
```


> **Find full description and more examples in the [demo page](#).**
