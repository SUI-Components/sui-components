# AtomToast

> AtomToast is a component that renders an empty floating box.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/toast/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,toast)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-toast?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-toast)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Atoast&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Atoast)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-toast)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/toast/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-toast --save
```

## Usage

### Basic usage

```js
import AtomToast, {
  atomToastPositions,
  atomToastAutoCloseTimes
} from '@s-ui/react-atom-toast';

return (
  <AtomToast
    position={atomToastPositions.topRight}
    autoCloseTime={atomToastAutoCloseTimes.short}
  >
    <span>lorem ipsum</span>
  </AtomToast>
);
```

> **Find full description and more examples in the [demo page](#).**
