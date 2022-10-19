# AtomValidationText

> Validation text is used for indicating whether the entered data is correct. It is provided by using the "Help Text" plus one color each.

## Installation

```sh
$ npm install @s-ui/react-atom-validation-text --save
```

## Usage

### Add text

Just add a text, set through the prop `text`.

### Types

There are defined 3 types (`success`, `error` and `alert`) available at the exported object `AtomValidationTextTypes` and that can be set through the prop `type`.

### Basic usage
```js
import AtomValidationText from '@s-ui/react-atom-validation-text'

return (<AtomValidationText text="This is the text." type="alert" />)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/validationText).**
