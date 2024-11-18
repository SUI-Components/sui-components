# AtomLabel

> The Label is the name of the associated field, that explains what is the about. It should be clear, concise and short.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/label/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,label)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-label?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-label)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Alabel&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Alabel)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-label)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/label/LICENSE.md)

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
