# AtomSwitch

The switch is the radio button when there’re only 2 exclusive options. “On/off” is a common and clear example for explaining this component.

In order to collect the result of this switch there is a callback `onToggle`, this callback receives a flag on `true` if select is active. If you're using a `select` type of this component, `false` means the first option and `true` the second one.

There are several two sizes for this component: `default` and `large`.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/switch/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,switch)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-switch?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-switch)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aswitch&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aswitch)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-switch)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/switch/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-switch --save
```

## Usage

### Basic usage - Uncontrolled component

```js
import AtomSwitch from '@s-ui/react-atom-switch'

return (
  <AtomSwitch
    disabled={false}
    initialValue={false}
    isFitted={false}
    isLoading={true}
    label="Label"
    labelLeft="Off"
    labelOptionalText="Optional label"
    labelRight="On"
    onToggle={flag => console.log(`Switch value is ${flag}`)}
    size="default"
    design="toggle"
  />
)
```

### Basic usage - Controlled component

```js
import AtomSwitch from '@s-ui/react-atom-switch'

return (
  <AtomSwitch
    labelLeft="Off"
    labelRight="On"
    onToggle={value => handleChangeFromParent(value)}
    design="toggle"
    value={value}
  />
)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/switch/demo).**
