# AtomValidationText

> Validation text is used for indicating whether the entered data is correct. It is provided by using the "Help Text" plus one color each.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/validationText/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,validationText)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-validation-text?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-validation-text)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AvalidationText&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AvalidationText)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-validation-text)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/validationText/LICENSE.md)

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
