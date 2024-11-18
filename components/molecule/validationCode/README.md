# MoleculeValidationCode

> MoleculeValidationCode implements the AtomMoleculeValidationCode and adds it more features such as clear button, send button and resend button. It also provides a label to provide information to the user.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/validationCode/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,validationCode)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-validation-code?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-validation-code)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AvalidationCode&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AvalidationCode)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-validation-code)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/validationCode/LICENSE.md)

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
