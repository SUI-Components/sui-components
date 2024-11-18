# AtomTextarea

AtomTextarea a component that wraps a textarea displaying the text passed in the `value` prop

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/validationText/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,validationText)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-validation-text?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-validation-text)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AvalidationText&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AvalidationText)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-validation-text)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/validationText/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-textarea --save
```

## Usage

After importing the component `AtomTextarea` like this

```javascript
import AtomTextarea from '@s-ui/react-atom-textarea'
```

### Basic usage

```javascript
<AtomTextarea value="Saul Bass on failure" />
```

### Long size

```javascript
<AtomTextarea size="long" value="Saul Bass on failure: Failure is built into creativity" />
```

### With placeholder

```javascript
<AtomTextarea placeholder="Write something cool here..." />
```

### Textarea States

The component can receive a `success`, `error` or `alert` state, to highlight his border with colors defined on sui-theme.

```javascript
<AtomTextarea state="success" />
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/textarea/demo).**
