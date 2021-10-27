# MoleculeValidationCode

> MoleculeValidationCode implements the AtomMoleculeValidationCode and adds it more features such as, clear button, send button and resend button. It also provides a label to provide information to the user.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-molecule-validation-code
```

## Usage

### Basic usage

```js
import MoleculeValidationCode from '@s-ui/react-molecule-validation-code'

return (
  <MoleculeValidationCode
    sendButtonTextLabel="Send"
    deleteButtonTextLabel="Delete"
    labelText="Your verification code"
    resendButtonTextLabel="Resend"
    onChange={onChangeHandler}
  />
)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/react-molecule-validation-code/lib/index';
```

### Placeholder usage

```js
<MoleculeValidationCode
  placeholder="A"
  onChange={onChangeHandler}
  defaultValue={code}
/>
```

### Password filter usage

```js
<MoleculeValidationCode
  isPassword
  onChange={onChangeHandler}
  defaultValue={code}
/>
```

### Sizes usage

```js
<MoleculeValidationCode
  size="medium"
  onChange={onChangeHandler}
  defaultValue={code}
/>
```

### Length usage

```js
<MoleculeValidationCode
  lenth={6}
  onChange={onChangeHandler}
  defaultValue={code}
/>
```

### Mask usage

```js
<MoleculeValidationCode
  mask="NUMBER"
  onChange={onChangeHandler}
  defaultValue={code}
/>
```

### Disabled usage

```js
<MoleculeValidationCode
  disabled
  onChange={onChangeHandler}
  defaultValue={code}
/>
```

### Status usage

```js
<MoleculeValidationCode
  status="error"
  onChange={onChangeHandler}
  defaultValue={code}
/>
```

### Children usage

```js
<MoleculeValidationCode onChange={onChangeHandler} defaultValue={code}>
  -
</MoleculeValidationCode>
```

> **Find full description and more examples in the [demo page](#).**
