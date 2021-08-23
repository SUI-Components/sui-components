# PinInput

PinInput is a component that handles the use of a code input in diferent input boxes, creating a beautiful visual effect for the user and providing an easy way to handle the code for the developer.

## Installation

```sh
$ npm install @s-ui/react-atom-pin-input
```

## Usage

```js
import PinInput, {PinInputField} from '@s-ui/react-atom-pin-input'

return (
  <div>
    <PinInput onChange={onChangeHandler} defaultValue={code} />
  </div>
)
```

### Basic usage

```js
<PinInput onChange={onChangeHandler} defaultValue={code} />
```

### Placeholder usage

```js
<PinInput placeholder="A" onChange={onChangeHandler} defaultValue={code} />
```

### Password filter usage

```js
<PinInput isPassword onChange={onChangeHandler} defaultValue={code} />
```

### Sizes usage

```js
<PinInput size="medium" onChange={onChangeHandler} defaultValue={code} />
```

### Length usage

```js
<PinInput lenth={6} onChange={onChangeHandler} defaultValue={code} />
```

### Mask usage

```js
<PinInput mask="NUMBER" onChange={onChangeHandler} defaultValue={code} />
```

### Disabled usage

```js
<PinInput disabled onChange={onChangeHandler} defaultValue={code} />
```

### Status usage

```js
<PinInput status="error" onChange={onChangeHandler} defaultValue={code} />
```

### Children usage

```js
<PinInput onChange={onChangeHandler} defaultValue={code}>
  -
</PinInput>
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/react-atom-pin-input/lib/index';
```

> **Find full description and more examples in the [demo page](https://sui-components.vercel.app//workbench/atom/validationCode/demo).**
