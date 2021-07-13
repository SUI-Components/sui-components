# AtomValidationCode

Component to input a validation code.

## Installation

```sh
$ npm install @s-ui/react-atom-validation-code
```

## Usage

### Basic usage

#### Import package and use the component

```js
import AtomValidationCode from '@s-ui/react-atom-validation-code'

return (
  <AtomValidationCode 
    onChange={handleChange}
    label="Verification code"
    lenght={6} 
  />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/react-atom-validation-code/lib/index';
```


> **Find full description and more examples in the [demo page](https://sui-components.vercel.app//workbench/atom/validationCode/demo).**