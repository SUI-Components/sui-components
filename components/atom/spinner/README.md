# AtomSpinner

> An animated loop used for giving users feedback while the content of a page or section is being loaded.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-atom-spinner --save
```

## Usage

### Basic usage
```js
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

return (
  <AtomSpinner show type={AtomSpinnerTypes.FULL}>
    {component}
  </AtomSpinner>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/spinner/demo).**
