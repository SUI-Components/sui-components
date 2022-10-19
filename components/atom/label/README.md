# AtomLabel

> The Label is the name of the associated field, that explains what is the about. It should be clear, concise and short.

## Installation

```sh
$ npm install @s-ui/react-atom-label --save
```

## Usage

### Basic usage
Labels are shown on top of the input form elements by default due to their block type display. Use `inline = 'left'` or `inline = 'right'` props to make them inline. 
```js
import AtomLabel from '@s-ui/react-atom-label'

return (
  <div>
    <AtomLabel
      name='atomLabelName'
      for='labelName'
      text='Hello label'
      optional='(optional text)'
      inline='( left || right )'
      type='alert' />

    <input id='atomLabelName' type='text' />
  </div>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/label/demo).**
