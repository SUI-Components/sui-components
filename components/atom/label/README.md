# AtomLabel

> The Label is the name of the associated field, that explains what is the about. It should be clear, concise and short.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-atom-label --save
```

## Usage

### Basic usage
```js
import AtomLabel from '@s-ui/react-atom-label'

return (
  <div>
    <AtomLabel
      name='atomLabelName'
      for='labelName'
      text='Hello label'
      optional='(optional text)' />

    <input id='atomLabelName' type='text' />
  </div>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/label/demo).**
