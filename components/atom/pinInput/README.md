# PinInput

PinInput is a component that handles the use of a code input in different input boxes, creating a beautiful visual effect for the user and providing an easy way to handle the code for the developer.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/pinInput/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,pinInput)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-pin-input?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-pin-input)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3ApinInput&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3ApinInput)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-pin-input)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/pinInput/LICENSE.md)

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
